import React from "react";
import aboutImg from "../assets/portifolio-about-pic.jpg"

export default function About() {
    return(
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Designer & developer based out of Setubal/PT</p>
            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <img src={aboutImg} alt="Pedro looking at the camera smiling" className="about-me__img"/>
        </section>
    )
}