
import React from 'react';
import { Player } from '../types';
import Button from './Button';
import { TrashIcon, XCircleIcon } from './icons';
import { TranslationSet } from '../translations';

interface PlayerInputProps {
  player: Player;
  playerIndex: number;
  onNameChange: (id: string, name: string) => void;
  onRemovePlayer: (id: string) => void;
  onClearName: (id: string) => void;
  isRemovable: boolean;
  t: TranslationSet;
}

const PlayerInput: React.FC<PlayerInputProps> = ({
  player,
  playerIndex,
  onNameChange,
  onRemovePlayer,
  onClearName,
  isRemovable,
  t,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-[var(--color-brand-text-muted)] font-medium w-8 text-right">{playerIndex + 1}.</span>
      
      <div className="relative flex-grow">
        <input
          type="text"
          value={player.name}
          onChange={(e) => onNameChange(player.id, e.target.value)}
          placeholder={t.playerInputPlaceholder(playerIndex + 1)}
          className="bg-[var(--color-brand-input-bg)] border border-[var(--color-brand-input-border)] text-[var(--color-brand-text)] placeholder-[var(--color-brand-text-muted)] text-sm rounded-lg focus:ring-[var(--color-brand-input-border-focus)] focus:border-[var(--color-brand-input-border-focus)] block w-full p-2.5 pr-9" // Added pr-9 for button space
          maxLength={20}
          aria-label={`${t.playerInputPlaceholder(playerIndex + 1)}`}
        />
        {player.name.trim() !== '' && (
          <Button
            onClick={() => onClearName(player.id)}
            variant="ghost"
            size="sm"
            className="p-1.5 text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-text)] absolute right-1.5 top-1/2 transform -translate-y-1/2 focus:ring-0 focus:ring-offset-0" // Positioned button
            aria-label={t.clearPlayerNameAriaLabel}
            tabIndex={-1} // Exclude from tab navigation
          >
            <XCircleIcon className="w-5 h-5" />
          </Button>
        )}
      </div>

      <div className="flex-shrink-0 flex items-center justify-end" style={{ width: '40px' }}> {/* Adjusted width for a single button */}
        {isRemovable && (
           <Button
              onClick={() => onRemovePlayer(player.id)}
              variant="danger"
              size="sm"
              className="p-1.5"
              aria-label={t.removePlayerAriaLabel}
            >
            <TrashIcon className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default React.memo(PlayerInput);
                                                                                                                                                                                                                                                                                          