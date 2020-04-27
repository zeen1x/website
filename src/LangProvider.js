import React, { useState, useLayoutEffect } from 'react';
import LangContext from './LangContext';
import fr from './languages/fr';
import en from './languages/en';

const langMap = {
    "fr": fr,
    "en": en
}

export function LangProvider(props) {

    const [lang, setLang] = useState(
        window.localStorage.getItem('appUILang') ||
        window.navigator.language.substring(0, 2)
    );

    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem('appUILang');

        if (selectedLang) {
            setLang(selectedLang);
        }
    }, [lang])

    const switchLang = (ln) => {
        setLang(ln);
        window.localStorage.setItem('appUILang', ln);
    };

    return (
        <LangContext.Provider value={{
            lang,
            switchLang,
            currentLangData: langMap[lang]
        }}>
            {props.children}
        </LangContext.Provider>
    );
};