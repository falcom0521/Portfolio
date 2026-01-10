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

                <p className="about__description">I’m a passionate Mobile Application Developer with hands-on experience in building scalable and user-friendly applications using React Native and Flutter. I enjoy transforming ideas into high-quality digital products and have worked on projects involving real-time features, REST API integration, and modern UI/UX practices. I’m always eager to learn new technologies and continuously improve my craft.</p>
            </div>

        </div>
    </section>
    )
}

export default About