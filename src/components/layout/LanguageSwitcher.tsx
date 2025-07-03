import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const optionClass = (lang: string) =>
    `cursor-pointer flex items-center space-x-1 px-2 ${language === lang ? 'font-bold underline' : ''}`;

  return (
    <div className="flex space-x-2 text-sm">
      <span
        className={optionClass('it')}
        onClick={() => setLanguage('it')}
      >
        <span>🇮🇹</span>
        <span>IT</span>
      </span>
      <span
        className={optionClass('en')}
        onClick={() => setLanguage('en')}
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </span>
    </div>
  );
};

export default LanguageSwitcher;
