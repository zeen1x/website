import React, {useEffect} from 'react';

import '../css/App.css';
import '../css/default.css';
import '../css/layout.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import CallToAction from './components/CallToAction.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import InitJs from './Init.js';

import { LangProvider } from './LangProvider';

function App() {
  useEffect(() => {
    InitJs();
  });

  return (
    <LangProvider>
      <div className="App">
        <Header></Header>
        <About></About>
        <Footer></Footer>
      </div>
    </LangProvider>
  );
}

export default App;
