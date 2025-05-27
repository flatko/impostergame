import React from 'react';
import { TranslationSet } from '../translations';

interface AdBannerProps {
  t: TranslationSet;
}

// Define as a constant, e.g., '60px' or '4rem'
export const AD_BANNER_HEIGHT_VALUE = '60px'; 

const AdBanner: React.FC<AdBannerProps> = ({ t }) => {
  return (
    <div
      style={{ height: AD_BANNER_HEIGHT_VALUE }}
      className="fixed bottom-0 left-0 right-0 bg-[var(--color-brand-input-bg)] text-[var(--color-brand-text-muted)] flex items-center justify-center text-sm z-50 border-t border-[var(--color-brand-input-border)]"
      role="complementary"
      aria-label={t.advertisementLabel}
    >
      <span className="absolute top-1 left-2 text-xs px-1 bg-[var(--color-brand-card)] rounded-sm shadow">
        {t.adShortLabel}
      </span>
      <p>{t.adPlaceholderText}</p>
    </div>
  );
};

export default AdBanner;
