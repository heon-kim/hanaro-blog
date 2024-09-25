import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: "en" | "ko";
  toggleLanguage: () => void;
};

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<"en" | "ko">("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function LanguageButton() {
  const { language, toggleLanguage } = useContext(LanguageContext); // useContext를 사용하여 언어와 toggleLanguage 함수 가져오기

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Change to Korean" : "Change to English"}
    </button>
  );
}

function Greeting() {
  const { language } = useContext(LanguageContext); // useContext를 사용하여 언어 정보를 가져오기

  return <h1>{language === "en" ? "Hello!" : "안녕하세요!"}</h1>;
}

function Language() {
  return (
    <LanguageProvider>
      <Greeting />
      <LanguageButton />
    </LanguageProvider>
  );
}

export default Language;
