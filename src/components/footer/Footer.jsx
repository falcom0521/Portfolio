import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ajay Paul Shine</h1>

            <ul className="footer__list">
                <li>
                    <a href='#about'
                    className='footer__link'>About</a>
                </li>

                <li>
                    <a href='#qualification'
                    className='footer__link'>qualifiacation</a>
                </li>

                <li>
                    <a href='#projects'
                    className='footer__link'>Projects </a>
                </li>

                
            </ul>
            <div className="footer__social">
            <a href="mailto:ajaypaulshine@gmail.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/ajaypaulshine/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/falcom0521" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Ajay paul shine. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer