import React, { createContext, ReactNode, useContext } from "react";

type TranslationData = {
  [key: string]: string;
};

interface TranslationContextProps {
  translations: TranslationData;
}

const TranslationContext = createContext<TranslationContextProps>(
  {} as TranslationContextProps,
);

export const TranslationProvider: React.FC<{
  translations: TranslationData;
  children: ReactNode;
}> = ({ translations, children }) => {
  return (
    <TranslationContext.Provider value={{ translations }}>
      {children}
    </TranslationContext.Provider>
  );
};

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  const { translations } = context;

  const t = (key: string, fallback?: string) => {
    return translations[key] || fallback || key;
  };

  return { t };
}
