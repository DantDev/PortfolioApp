import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png"

export default function Header() {

    React.useEffect(() => {
        const navToggle = document.querySelector(".nav-toggle")
        const navLinks = document.querySelectorAll(".nav__link")
        
        navToggle.addEventListener("click", () => {
            document.body.classList.toggle("nav-open")
        })
    
        navLinks.forEach(link => {
            link.addEventListener("click" , () => {
                document.body.classList.remove("nav-open")
            })
        })
    },[])


    return(
        <header>
            <div className="logo">
            <Link to="/" className="site-logo"><img src={logoImg} /></Link>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to="/myservices" className="nav__link">My Services</Link></li>
                    <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                    <li className="nav__item"><Link to="/projects" className="nav__link">Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}