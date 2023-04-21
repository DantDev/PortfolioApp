import React from "react";
import aboutImg from "../assets/portifolio-about-pic.jpg"

export default function About() {
    return(
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Designer & developer based out of Setubal/PT</p>
            <div className="about-me__body">
                <p>I am a self taught frontend developer, who has some background and experience on desing. I have worked with marketing using Photoshop and also i have some experience with 3D using Blender.I am always looking for learning new things , trying to self improve on my skills.</p>
                <p>My aspiration is to always be better than i was yesterday .</p>
            </div>
            <img src={aboutImg} alt="Pedro looking at the camera smiling" className="about-me__img"/>
        </section>
    )
}