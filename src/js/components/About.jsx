import React, { useContext } from 'react';
import LangContext from '../LangContext';
import profilePic from '../../images/profilepic.png'

function About() {
    const { about } = useContext(LangContext).currentLangData;

    let date = new Date();
    let yearsInProgramming = date.getFullYear() - 2016;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilePic} alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>{about.title}</h2>
                    <p>{about.description1} {yearsInProgramming} {about.description2}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>{about.informations}</h2>
                            <p className="address">
                                <span>Francis Desbiens</span><br />
                                <span>3006 Rue De Dompierre<br />
                                    Quebec, CA G1X1E1
                                </span><br />
                                <span>(418) 490-0445</span><br />
                                <span>fran6.desbiens@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;