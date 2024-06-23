import React, { useState } from 'react';
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section_title">Qualifiction</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon">
                        </i>Education 
                </div>

                <div className={toggleState === 2
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon">
                        </i> Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div 
                className={toggleState === 1 ?
                    "qualification__content qualification__content-active" :
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">Adam Public School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>  2018 
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Higher Secondary School</h3>
                            <span className="qualification__subtitle">Depaul EMHSS </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>  2020
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BTech Computer Science</h3>
                            <span className="qualification__subtitle">MBCCET</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2024 current
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState === 2 ?
                    "qualification__content qualification__content-active" :
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Devops Intern</h3>
                            <span className="qualification__subtitle"> Completed a six month internship at Connect2Join, actively involved in the development of their Angular web application.</span>
                            
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Frontend Developer</h3>
                            <span className="qualification__subtitle">Frontend developer at MagikEvents, where I undertook multiple projects utilizing React.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>  2024
                            </div>
                        </div>
                        
                    </div>

                    

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification