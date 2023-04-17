import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    
    return(
        <footer className="footer">
            <a href="mailto:p3drr0@gmail.com" className="footer__link">p3drr0@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/DantDev" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                
                <li className="social-list__item">
                    <a className="social-list__link" href="https://instagram.com/p3drr0" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                </li>
                
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/pedro-calixto-526986257/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                
                <li className="social-list__item">
                    <a className="social-list__link" href="https://facebook.com/pedrohenrique.calixtodias" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                </li>
                
            </ul>
        </footer>
    )
}