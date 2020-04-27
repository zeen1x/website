import React, {useContext} from 'react';
import LangSwitch from '../LangSwitch';
import LangContext from '../LangContext';

function Header() {
    const { header } = useContext(LangContext).currentLangData;

    return (
        <header id="home" >
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title={header.showNavigation}>{header.showNavigation}</a>
                <a className="mobile-btn" href="#" title={header.hideNavigation}>{header.hideNavigation}</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">{header.home}</a></li>
                    <li><a className="smoothscroll" href="#about">{header.about}</a></li>
                    <li><a className="smoothscroll" href="#resume">{header.resume}</a></li>
                    <li><a className="smoothscroll" href="#portfolio">{header.portfolio}</a></li>
                    <li><a className="smoothscroll" href="#skills">{header.skills}</a></li>
                    <li><a className="smoothscroll" href="#contact">{header.contact}</a></li>
                    <li>
                        <LangSwitch></LangSwitch>
                    </li>
                </ul> 
                
            </nav> 
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{header.title}</h1>
                    <h2>{header.titleDescription1} {header.titleDescription2} <a className="smoothscroll" href="#about">{header.titleDescriptionLink}</a> {header.titleDescription3}</h2>
                    <hr />
                    <ul className="social">
                        <li><a href="https://www.facebook.com/francis.desbiens.18"><i className="fa fa-facebook" /></a></li>
                        <li><a href="https://www.linkedin.com/in/francis-desbiens-292347117/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/fran6.desbiens/"><i className="fa fa-instagram" /></a></li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
        </header>
    );
};

export default Header;