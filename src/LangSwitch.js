import React, { useContext } from 'react';
import LangContext from './LangContext.js';

export default function LangSwitch() {
  const { switchLang, lang } = useContext(LangContext);

  let langToSwitchTo = "fr";

  if ( lang === "fr" ){
    langToSwitchTo = "en";
  }

  return (
    <div className='LangSwitch'>
      <button onClick={() => switchLang(langToSwitchTo)}>
        {langToSwitchTo.toUpperCase()}
      </button>
    </div>
  )
}