import React from "react";
import portfolioImg1 from "../assets/portfolio/Scoreboard.jpg"
import portfolioImg2 from "../assets/portfolio/randomgenerator.jpg"
import portfolioImg3 from "../assets/portfolio/tenziesgame.jpg"
import portfolioImg4 from "../assets/portfolio/unitsconverter.jpg"
import portfolioImg5 from "../assets/portfolio/quizapp.jpg"
import portfolioImg6 from "../assets/portfolio/vanapp.jpg"

export default function Projects() {
    return(
        <section className="my-work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle--work">A selection of my range of work</p>

                <div className="portfolio">
                    <a href="https://marvelous-jelly-3a3495.netlify.app/" target="_blank" className="portfolio__item">
                        <img src={portfolioImg1} className="portfolio__img"/>
                    </a>

                    <a href="https://ubiquitous-souffle-6bbf07.netlify.app/" target="_blank" className="portfolio__item">
                        <img src={portfolioImg2} className="portfolio__img"/>
                    </a>
            
                    <a href="https://dynamic-rugelach-02716f.netlify.app/" target="_blank" className="portfolio__item">
                        <img src={portfolioImg3} className="portfolio__img"/>
                    </a>

                    <a href="https://loquacious-daffodil-a7cd2a.netlify.app/" target="_blank" className="portfolio__item">
                        <img src={portfolioImg4} className="portfolio__img"/>
                    </a>
            
                    <a href="https://cheery-queijadas-27cf04.netlify.app/" target="_blank" className="portfolio__item">
                        <img src={portfolioImg5} className="portfolio__img"/>
                    </a>
            

                    <a href="https://thunderous-parfait-33e78b.netlify.app/" target="_blank" className="portfolio__item">
                        <img src={portfolioImg6} className="portfolio__img"/>
                    </a>
                </div>

        </section>    
    )
}