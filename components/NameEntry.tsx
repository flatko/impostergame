
import React from 'react';
import { Player } from '../types';
import { MIN_PLAYERS, MAX_PLAYERS } from '../constants';
import PlayerInput from './PlayerInput';
import Button from './Button';
import Card from './Card';
import { PlusIcon, PlayIcon, UsersIcon } from './icons';
import { TranslationSet } from '../translations';

interface NameEntryProps {
  players: Player[];
  onAddPlayer: () => void;
  onRemovePlayer: (id: string) => void;
  onNameChange: (id: string, name: string) => void;
  onClearName: (id: string) => void;
  onFinalizePlayers: () => void;
  onBackToMenu: () => void;
  t: TranslationSet;
}

const NameEntry: React.FC<NameEntryProps> = ({
  players,
  onAddPlayer,
  onRemovePlayer,
  onNameChange,
  onClearName,
  onFinalizePlayers,
  onBackToMenu,
  t,
}) => {
  const canStartGame = players.length >= MIN_PLAYERS && players.every(p => p.name.trim() !== '');
  const uniquePlayerNames = new Set(players.map(p => p.name.trim().toLowerCase())).size === players.filter(p => p.name.trim() !== "").length;
  const allChecksPass = canStartGame && uniquePlayerNames;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-lg">
        <div className="flex items-center justify-center mb-6">
          <UsersIcon className="w-10 h-10 text-[var(--color-brand-secondary)] mr-3"/>
          <h1 className="text-3xl font-bold text-[var(--color-brand-primary)]">{t.nameEntryTitle}</h1>
        </div>
        
        {/* Adjusted classes for padding and spacing */}
        <div className="mb-4 max-h-80 overflow-y-auto px-2 py-1 space-y-3">
          {players.map((player, index) => (
            <PlayerInput
              key={player.id}
              player={player}
              playerIndex={index}
              onNameChange={onNameChange}
              onRemovePlayer={onRemovePlayer}
              onClearName={onClearName}
              isRemovable={players.length > MIN_PLAYERS}
              t={t}
            />
          ))}
        </div>

        {players.length < MAX_PLAYERS && ( 
          <Button
            onClick={onAddPlayer}
            variant="secondary"
            icon={<PlusIcon className="w-5 h-5" />}
            fullWidth
            className="mb-3"
          >
            {t.addPlayer}
          </Button>
        )}

        {!canStartGame && players.some(p => p.name.trim() === "") && (
          <p className="text-sm text-[var(--color-warning)] mb-3 text-center">
            {t.minPlayersRequiredError(MIN_PLAYERS)}
          </p>
        )}
         {!canStartGame && players.length < MIN_PLAYERS && (
          <p className="text-sm text-[var(--color-warning)] mb-3 text-center">
            {players.some(p => p.name.trim() !== "") ? t.minPlayersRequiredError(MIN_PLAYERS).split(',')[0] : t.minPlayersRequiredError(MIN_PLAYERS)}
          </p>
        )}
        {!uniquePlayerNames && players.some(p => p.name.trim() !== "") && (
            <p className="text-sm text-[var(--color-warning)] mb-3 text-center">
                {t.uniqueNamesRequiredError}
            </p>
        )}

        <div className="mt-6 space-y-3">
          <Button
            onClick={onFinalizePlayers}
            disabled={!allChecksPass}
            icon={<PlayIcon className="w-5 h-5" />}
            fullWidth
            size="lg"
            variant="primary" // Explicitly primary
          >
            {t.finalizePlayersAndAssignRoles}
          </Button>
          <Button
            onClick={onBackToMenu}
            variant="ghost"
            fullWidth
          >
            {t.backToMainMenu}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NameEntry;