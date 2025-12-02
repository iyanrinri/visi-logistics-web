'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      title={language === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
    >
      <Globe size={18} />
      <span className="language-text">
        {language === 'en' ? 'ID' : 'EN'}
      </span>

      <style jsx>{`
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: transparent;
          border: 2px solid var(--color-primary);
          border-radius: var(--border-radius);
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .language-switcher:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-1px);
        }

        .language-text {
          font-size: 0.85rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .language-switcher {
            padding: 0.4rem 0.6rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </button>
  );
}