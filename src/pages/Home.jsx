import React from "react";
import bgImg from "../assets/Profile Pic.jpg"
import instaIcon from "../assets/instagramicon.png"
import githubIcon from "../assets/githubicon.png"
import linkedinIcon from "../assets/linkedinicon.png"


export default function Home() {
    return(
        <section className="intro">
            <h1 className="section__title section__title--intro">
                Hi , i am <strong>Pedro Calixto</strong>
                </h1>
            <p className="section__subtitle section__subtitle--intro">Front-end dev</p>
            <img src={bgImg} alt="a picture of Pedro Calixto" className="intro__img" />
        </section>
    )
}