
import React, { useState, useCallback, useEffect } from 'react';
import { GamePhase, Player, Role, Language } from './types';
import { WORD_LIST_EN, WORD_LIST_DE, MIN_PLAYERS, MAX_PLAYERS, LOCAL_STORAGE_PLAYER_NAMES_KEY } from './constants';
import { translations, TranslationSet } from './translations';
import MainMenu from './components/MainMenu';
import NameEntry from './components/NameEntry';
import RoleReveal from './components/RoleReveal';
import DiscussionScreen from './components/DiscussionScreen';

const generateId = (): string => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

const App: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.MainMenu);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [numImpostors, setNumImpostors] = useState<number>(1);
  const [language, setLanguage] = useState<Language>(() => {
    return Language.DE; 
  });

  const t = translations[language];
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.appTitle;
    console.log(`[App] Language changed to: ${language.toUpperCase()}. Document title: "${t.appTitle}"`);
  }, [language, t.appTitle]);

  useEffect(() => {
    console.log(`[App] Game phase changed to: ${GamePhase[gamePhase]}`);
  }, [gamePhase]);

  const setAppLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const savePlayerNamesToStorage = (currentPlayers: Player[]) => {
    const playerNames = currentPlayers.map(p => p.name);
    localStorage.setItem(LOCAL_STORAGE_PLAYER_NAMES_KEY, JSON.stringify(playerNames));
  };

  const initializePlayerSlots = useCallback(() => {
    const savedNamesJSON = localStorage.getItem(LOCAL_STORAGE_PLAYER_NAMES_KEY);
    let loadedPlayers: Player[] = [];

    if (savedNamesJSON) {
        try {
            const savedNames: string[] = JSON.parse(savedNamesJSON);
            loadedPlayers = savedNames
                .slice(0, MAX_PLAYERS) 
                .map(name => ({ id: generateId(), name: name.trim(), role: null, word: null }));
        } catch (e) {
            console.error("[App] Failed to parse saved player names:", e);
        }
    }

    let finalPlayers: Player[];
    if (loadedPlayers.length > 0) {
        finalPlayers = [...loadedPlayers];
        if (finalPlayers.length < MIN_PLAYERS) {
            const additionalSlotsNeeded = MIN_PLAYERS - finalPlayers.length;
            for (let i = 0; i < additionalSlotsNeeded; i++) {
                finalPlayers.push({ id: generateId(), name: '', role: null, word: null });
            }
        }
    } else {
        finalPlayers = Array.from({ length: MIN_PLAYERS }, () => ({
            id: generateId(),
            name: '',
            role: null,
            word: null
        }));
    }
    
    setPlayers(finalPlayers);
    console.log('[App] Player slots initialized. Count:', finalPlayers.length, 'From localStorage:', !!savedNamesJSON && loadedPlayers.length > 0);
  }, []);


  const handleStartGame = useCallback(() => {
    initializePlayerSlots();
    setGamePhase(GamePhase.NameEntry);
  }, [initializePlayerSlots]);

  const handleAddPlayer = useCallback(() => {
    setPlayers(prev => {
      if (prev.length < MAX_PLAYERS) {
        const newPlayer = { id: generateId(), name: '', role: null, word: null };
        const updatedPlayers = [...prev, newPlayer];
        savePlayerNamesToStorage(updatedPlayers);
        console.log('[App] Player added. Total players:', updatedPlayers.length);
        return updatedPlayers;
      }
      console.warn('[App] Attempted to add player beyond max limit.');
      return prev;
    });
  }, []);

  const handleRemovePlayer = useCallback((id: string) => {
    setPlayers(prev => {
      const updatedPlayers = prev.filter(player => player.id !== id);
      savePlayerNamesToStorage(updatedPlayers);
      console.log(`[App] Player removed: ${id}. Remaining players:`, updatedPlayers.length);
      return updatedPlayers;
    });
  }, []);

  const handlePlayerNameChange = useCallback((id: string, name: string) => {
    const trimmedName = name.trimStart(); 
    setPlayers(prev => {
      const updatedPlayers = prev.map(player => 
        player.id === id ? { ...player, name: trimmedName } : player
      );
      const namesToSave = updatedPlayers.map(p => ({...p, name: p.name.trim()}));
      savePlayerNamesToStorage(namesToSave);
      return updatedPlayers;
    });
  }, []);
  
  const handlePlayerNameBlur = useCallback((id: string) => {
    setPlayers(prev => {
        const updatedPlayers = prev.map(p =>
            p.id === id ? { ...p, name: p.name.trim() } : p
        );
        savePlayerNamesToStorage(updatedPlayers);
        return updatedPlayers;
    });
  }, []);


  const handleClearPlayerName = useCallback((id: string) => {
    setPlayers(prevPlayers => {
        const updatedPlayers = prevPlayers.map(player =>
            player.id === id ? { ...player, name: '' } : player
        );
        savePlayerNamesToStorage(updatedPlayers);
        console.log(`[App] Player name cleared: ID ${id}`);
        return updatedPlayers;
    });
  }, []);

  const handleFinalizePlayersAndAssignRoles = useCallback(() => {
    console.log('[App] Attempting to finalize players and assign roles...');
    const finalTrimmedPlayers = players.map(p => ({...p, name: p.name.trim()}));
    setPlayers(finalTrimmedPlayers); 

    const validPlayers = finalTrimmedPlayers.filter(p => p.name !== ''); 
    if (validPlayers.length < MIN_PLAYERS) {
      const errorMsg = t.alertMinPlayersRequired(MIN_PLAYERS);
      alert(errorMsg);
      console.warn(`[App] Validation Error: ${errorMsg}. Current valid players: ${validPlayers.length}`);
      return;
    }
    
    const names = validPlayers.map(p => p.name.toLowerCase());
    if (new Set(names).size !== names.length) {
        const errorMsg = t.alertUniqueNamesRequired;
        alert(errorMsg);
        console.warn(`[App] Validation Error: ${errorMsg}. Player names:`, names);
        return;
    }

    const currentWordList = language === Language.DE ? WORD_LIST_DE : WORD_LIST_EN;
    const selectedWord = currentWordList[Math.floor(Math.random() * currentWordList.length)];
    setCurrentWord(selectedWord);
    console.log(`[App] Selected word: "${selectedWord}" (Lang: ${language.toUpperCase()})`);

    let impostorCount = 1;
    if (validPlayers.length >= 9) {
      impostorCount = 3;
    } else if (validPlayers.length >= 6) {
      impostorCount = 2;
    }
    setNumImpostors(impostorCount);
    console.log(`[App] Number of impostors: ${impostorCount} for ${validPlayers.length} players.`);

    let shuffledPlayers = [...validPlayers].sort(() => 0.5 - Math.random());

    const assignedPlayers: Player[] = [];
    for (let i = 0; i < shuffledPlayers.length; i++) {
      if (i < impostorCount) {
        assignedPlayers.push({ ...shuffledPlayers[i], role: Role.Impostor, word: null });
      } else {
        assignedPlayers.push({ ...shuffledPlayers[i], role: Role.Civilian, word: selectedWord });
      }
    }
    
    setPlayers(assignedPlayers.sort(() => 0.5 - Math.random())); 
    setCurrentPlayerIndex(0);
    setGamePhase(GamePhase.RoleReveal);
    console.log('[App] Roles assigned. Players:', assignedPlayers.map(p => ({name: p.name, role: p.role, word: p.word ? '***' : null })));
  }, [players, language, t]);

  const handleNextPlayerReveal = useCallback(() => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => {
        console.log(`[App] Next player reveal. Index: ${prev + 1}/${players.length}`);
        return prev + 1;
      });
    } else {
      console.log('[App] All roles revealed. Moving to Discussion phase.');
      setGamePhase(GamePhase.Discussion);
    }
  }, [currentPlayerIndex, players.length]);

  const handleResetGame = useCallback(() => {
    console.log('[App] Resetting game...');
    setCurrentWord('');
    setCurrentPlayerIndex(0);
    setNumImpostors(1);
    setGamePhase(GamePhase.MainMenu);
    console.log('[App] Game reset complete. Language remains:', language.toUpperCase());
  }, [language]); 
  
  const renderContent = () => {
    switch (gamePhase) {
      case GamePhase.MainMenu:
        return <MainMenu 
                  onStartGame={handleStartGame} 
                  t={t} 
                  currentLang={language} 
                  setLang={setAppLanguage} 
                />;
      case GamePhase.NameEntry:
        return (
          <NameEntry
            players={players}
            onAddPlayer={handleAddPlayer}
            onRemovePlayer={handleRemovePlayer}
            onNameChange={handlePlayerNameChange}
            onClearName={handleClearPlayerName}
            onFinalizePlayers={handleFinalizePlayersAndAssignRoles}
            onBackToMenu={handleResetGame}
            t={t}
          />
        );
      case GamePhase.RoleReveal:
        if (players.length > 0 && players[currentPlayerIndex]) {
          return (
            <RoleReveal
              player={players[currentPlayerIndex]}
              onNext={handleNextPlayerReveal}
              isLastPlayer={currentPlayerIndex === players.length - 1}
              totalPlayers={players.length}
              currentPlayerNumber={currentPlayerIndex + 1}
              t={t}
            />
          );
        }
        console.warn("[App] RoleReveal: No players or invalid currentPlayerIndex.", players, currentPlayerIndex);
        return <div className="text-center p-8 text-[var(--color-brand-text)]">{t.loadingPlayerRoles}</div>; // Updated text color
      case GamePhase.Discussion:
        return <DiscussionScreen 
                  onNewGame={handleResetGame} 
                  numImpostors={numImpostors} 
                  t={t} 
                />;
      default:
        console.error(`[App] Unknown game phase: ${gamePhase}. Defaulting to MainMenu.`);
        return <MainMenu 
                  onStartGame={handleStartGame} 
                  t={t} 
                  currentLang={language} 
                  setLang={setAppLanguage}
                />;
    }
  };

  return (
    // Removed explicit bg/text colors here, as they are handled globally in index.html's body style
    <div className="min-h-screen antialiased">
      {renderContent()}
    </div>
  );
};

export default App;