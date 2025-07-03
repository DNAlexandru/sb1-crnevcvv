import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const optionClass = (lang: string) =>
    `cursor-pointer flex items-center space-x-2 px-3 py-1 ${
      language === lang ? 'font-bold bg-gray-100' : ''
    }`;

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center space-x-1 text-sm border px-2 py-1 rounded hover:bg-gray-100"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{language === 'it' ? '🇮🇹 IT' : '🇬🇧 EN'}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 bg-white border rounded shadow-lg text-sm">
          <div
            className={optionClass('it')}
            onClick={() => {
              setLanguage('it');
              setOpen(false);
            }}
          >
            <span>🇮🇹</span>
            <span>IT</span>
          </div>
          <div
            className={optionClass('en')}
            onClick={() => {
              setLanguage('en');
              setOpen(false);
            }}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
