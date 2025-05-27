import React from 'react';
import Button from './Button';
import Card from './Card';
import AdBanner, { AD_BANNER_HEIGHT_VALUE } from './AdBanner'; // Import AdBanner and height
import { PlayIcon } from './icons';
import { MIN_PLAYERS } from '../constants'; 
import { TranslationSet, Language } from '../translations';

interface MainMenuProps {
  onStartGame: () => void;
  t: TranslationSet;
  currentLang: Language;
  setLang: (lang: Language) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartGame, t, currentLang, setLang }) => {
  const appTitle = t.appTitle || "ImposterGame";
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4" 
      style={{ paddingBottom: AD_BANNER_HEIGHT_VALUE }} // Add padding for AdBanner
    >
      <Card className="w-full max-w-md text-center">
        <div className="mb-8">
          <img 
            src="./impostor_logo.png" 
            alt={`${appTitle} Logo`} 
            className="w-48 md:w-64 h-auto mx-auto mb-6" 
          />
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent-orange)]">
            {appTitle}
          </h1>
          <p className="mt-3 text-[var(--color-brand-text-muted)] text-lg">
            {t.mainMenuTagline}
          </p>
        </div>
        <Button
          onClick={onStartGame}
          size="lg"
          icon={<PlayIcon className="w-6 h-6" />}
          fullWidth
          variant="primary"
        >
          {t.startGame}
        </Button>
        <p className="mt-8 text-sm text-[var(--color-brand-text-muted)]">
          {t.gatherPlayers(MIN_PLAYERS)}
        </p>

        <div className="mt-6 flex justify-center space-x-3">
          <Button
            onClick={() => setLang(Language.DE)}
            variant={currentLang === Language.DE ? 'primary' : 'secondary'}
            size="sm"
            disabled={currentLang === Language.DE}
          >
            {t.switchToGerman}
          </Button>
          <Button
            onClick={() => setLang(Language.EN)}
            variant={currentLang === Language.EN ? 'primary' : 'secondary'}
            size="sm"
            disabled={currentLang === Language.EN}
          >
            {t.switchToEnglish}
          </Button>
        </div>
      </Card>
       <footer className="mt-12 text-center text-[var(--color-brand-text-muted)] text-sm">
        <p>{t.footerPlayful(new Date().getFullYear(), appTitle)}</p>
      </footer>
      <AdBanner t={t} />
    </div>
  );
};

export default MainMenu;