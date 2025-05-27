import React from 'react';
import Button from './Button';
import Card from './Card';
import AdBanner, { AD_BANNER_HEIGHT_VALUE } from './AdBanner'; // Import AdBanner and height
import { UsersIcon, RefreshCwIcon } from './icons';
import { TranslationSet } from '../translations';

interface DiscussionScreenProps {
  onNewGame: () => void;
  numImpostors: number;
  t: TranslationSet;
}

const DiscussionScreen: React.FC<DiscussionScreenProps> = ({ onNewGame, numImpostors, t }) => {
  const appTitle = t.appTitle || "ImposterGame"; 
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      style={{ paddingBottom: AD_BANNER_HEIGHT_VALUE }} // Add padding for AdBanner
    >
      <Card className="w-full max-w-md">
        <UsersIcon className="w-16 h-16 text-[var(--color-brand-secondary)] mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-[var(--color-brand-highlight)] mb-4">{t.discussionTitle}</h1>
        <p 
            className="text-lg text-[var(--color-brand-text)] mb-6"
            dangerouslySetInnerHTML={{ __html: t.discussionIntro }}
        />
        <div className="bg-[var(--color-brand-input-bg)] p-4 rounded-lg mb-8">
          <p 
            className="text-xl font-semibold text-[var(--color-brand-primary)]"
            dangerouslySetInnerHTML={{ __html: t.impostorCountInfo(numImpostors) }}
          />
        </div>
        <p 
            className="text-[var(--color-brand-text-muted)] mb-8"
            dangerouslySetInnerHTML={{ __html: t.goodLuckEveryone }}
        />
        <Button 
          onClick={onNewGame} 
          size="lg" 
          icon={<RefreshCwIcon className="w-6 h-6" />}
          fullWidth
          variant="primary"
        >
          {t.startNewGame}
        </Button>
      </Card>
      <footer className="mt-12 text-center text-[var(--color-brand-text-muted)] text-sm">
        <p>{t.footerThanks(new Date().getFullYear(), appTitle)}</p>
      </footer>
      <AdBanner t={t} />
    </div>
  );
};

export default DiscussionScreen;