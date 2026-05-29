import React, { createContext, useState, useContext} from 'react';

// Define the type for our language state
type Language = 'ES' | 'EN' | 'FR';

interface LanguageContextType {
    lang: Language;
    toggleLanguage: () => void;
}

// Create the context with an undefined default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component to wrap the app and provide the language state
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('ES');

    const toggleLanguage = () => {
        setLang((prev) => (prev === 'ES' ? 'EN' : prev === 'EN' ? 'FR' : 'ES'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return context;
};