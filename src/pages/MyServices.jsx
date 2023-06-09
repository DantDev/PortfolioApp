import React from "react";
import { Link } from "react-router-dom"

export default function MyServices() {
    return(
        <section className="my-services">
            <h2 className="section__title section__title--services">What i do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design</h3>
                    <p>Always looking for new inspiration , serching for refences , going thru the internet seeking for the new Trends in the matter of the most intuitive , inovative and slick design for my pages . With my Background working with Photoshop on marketing i am used to Always trying to inovate.</p>
                </div>

                <div className="service">
                    <h3>Development</h3>
                    <p>I constantly strive to enhance my development skills by exploring new technologies, frameworks, and methodologies. Through rigorous research and active participation in developer communities, I ensure that I stay at the forefront of the ever-evolving web landscape. </p>
                </div>
            </div>
            <Link to="/projects" className="btn">Projects</Link>
        </section>
        
    )
}