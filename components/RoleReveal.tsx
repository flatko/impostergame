
import React, { useState, useEffect } from 'react';
import { Player, Role } from '../types';
import Button from './Button';
import Card from './Card';
import { EyeIcon, ArrowRightIcon, SparklesIcon } from './icons';
import { TranslationSet } from '../translations';

interface RoleRevealProps {
  player: Player;
  onNext: () => void;
  isLastPlayer: boolean;
  totalPlayers: number;
  currentPlayerNumber: number;
  t: TranslationSet;
}

const RoleReveal: React.FC<RoleRevealProps> = ({
  player,
  onNext,
  isLastPlayer,
  totalPlayers,
  currentPlayerNumber,
  t,
}) => {
  const [isRoleVisible, setIsRoleVisible] = useState(false);

  useEffect(() => {
    setIsRoleVisible(false);
  }, [player]);

  const handleShowRole = () => {
    setIsRoleVisible(true);
  };

  const handleContinue = () => {
    setIsRoleVisible(false); 
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <Card className="w-full max-w-md">
        <p className="text-[var(--color-brand-text-muted)] mb-2">{t.playerXofY(currentPlayerNumber, totalPlayers)}</p>
        {!isRoleVisible ? (
          <>
            <h2 
              className="text-3xl font-bold text-[var(--color-brand-highlight)] mb-6"
              dangerouslySetInnerHTML={{ __html: t.passDeviceTo(player.name) }}
            />
            <p className="text-[var(--color-brand-text)] mb-8">
              {t.onlyYouShouldSeeRole}
            </p>
            <Button onClick={handleShowRole} size="lg" icon={<EyeIcon className="w-6 h-6" />} fullWidth variant="primary">
              {t.imPlayerShowRole(player.name)}
            </Button>
          </>
        ) : (
          <>
            <SparklesIcon className="w-16 h-16 text-[var(--color-brand-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[var(--color-brand-highlight)] mb-4">
              {t.alrightPlayer(player.name)}
            </h2>
            {player.role === Role.Civilian ? (
              <>
                <p className="text-xl text-[var(--color-brand-text)] mb-2">
                  {t.youAreCivilian} <span className="font-bold text-[var(--color-success)]">{t.roleCivilian}</span>!
                </p>
                <p className="text-lg text-[var(--color-brand-text)] mb-1">{t.yourSecretWordIs}</p>
                <p className="text-4xl font-extrabold text-[var(--color-brand-secondary)] my-4 p-3 bg-[var(--color-brand-input-bg)] rounded-lg inline-block">
                  {player.word}
                </p>
                <p className="text-[var(--color-brand-text-muted)] mt-2 mb-8">{t.rememberWordDontSay}</p>
              </>
            ) : (
              <>
                <p className="text-xl text-[var(--color-brand-text)] mb-2">
                  {t.youAreImpostor} <span className="font-bold text-[var(--color-danger)]">{t.roleImpostor}</span>!
                </p>
                <p className="text-lg text-[var(--color-brand-text-muted)] mb-8">
                  {t.impostorIntro}
                </p>
              </>
            )}
            <Button onClick={handleContinue} size="lg" icon={<ArrowRightIcon className="w-6 h-6" />} fullWidth variant="secondary">
              {isLastPlayer ? t.gotItStartDiscussion : t.gotItPassToNext}
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default RoleReveal;