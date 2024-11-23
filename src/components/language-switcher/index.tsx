import { useTranslation } from "react-i18next";
import "./language-switcher.scss";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const languages: { [key: string]: { nativeName: string } } = {
    "en": { nativeName: "English" },
    "es": { nativeName: "Español" }
  };
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      {Object.keys(languages).map((language) => (
        <button key={language} onClick={() => changeLanguage(language)} disabled={i18n.resolvedLanguage === language} className="language-switcher__button">
          {languages[language.toString()].nativeName}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;