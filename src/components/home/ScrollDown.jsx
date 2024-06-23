import React from 'react'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
        <a href='#about' className='home__scroll-button
        button--flex'>
            <svg 
            width="20" height="30" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="280" rx="90" ry="90" fill="none" stroke="#000000" strokeWidth="6"/>
            <rect x="90" y="30" width="20" height="40" rx="10" ry="10" fill="#000000"/>
            <line x1="100" y1="70" x2="100" y2="200" stroke="#000000" strokeWidth="3"/>
            </svg>
            <span className="home__scroll-name">Scroll Down</span>
            <i className='uil uil-arrow-down home__scroll-arrow'></i>





        </a>
    </div>
  )
}

export default ScrollDown