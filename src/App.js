import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';

import './App.css';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LangProvider } from './LangProvider';

function App() {
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
