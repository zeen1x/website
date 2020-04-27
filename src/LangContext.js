import React from 'react';

const LangContext = React.createContext({
    lang: '',
    currentLangData: {},
    switchLang: () => { },
});

export default LangContext;