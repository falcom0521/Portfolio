import React from 'react'
import "./about.css"
import Aboutimg from "../../assets/profile1.png";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        
        <div className="about__container container grid">
            <img src={Aboutimg} alt='' className='about__img'/>

            <div className='about__data'>
                <Info />

                <p className="about__description">I'm a passionate Computer Science Engineering student deeply fascinated by technology. I enjoy tackling challenges and constantly pushing myself to learn and grow. Through self-guided learning, I've developed skills in web development, focusing on Python and React.js, which have empowered me to bring ideas to life through software.</p>
            </div>

        </div>
    </section>
    )
}

export default About