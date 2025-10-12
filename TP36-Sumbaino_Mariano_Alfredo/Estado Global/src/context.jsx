import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },portuguese: {
        id: "PT",
        text: PTBR
    },spanish: {
        id: "ES",
        text: ES
    }
    /* SUGERENCIA: Añada las nuevas lenguas que desee */
};

/* CONSEJO: Utilice createContext e inicie el idioma inglés como predeterminado. */
const LanguageContext = createContext(languages.english);

export default LanguageContext;