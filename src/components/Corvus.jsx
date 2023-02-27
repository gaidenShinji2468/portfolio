import {
    useState,
    useEffect
} from "react";
import "/src/assets/styles/Corvus.css";
import Star from "./Star";

function Corvus({
    toggleAboutMe,
    toggleSkills,
    toggleExperience,
    togglePortfolio,
    toggleContactMe
})
{
    return (
        <div id="corvus">
	    {/*Stars*/}
	    <Star
	        id="about-me"
	        title="Acerca de Mí"
	        color="#4872d2"
	        toggle={toggleAboutMe}
	        top
	    />
	    <Star
	        id="skills"
	        title="Habilidades"
	        color="#f46ad6"
	        toggle={toggleSkills}
	        top
	    />
	    <Star
	        id="experience"
	        title="Experiencia"
	        color="#ff4f4f"
	        toggle={toggleExperience}
	    />
	    <Star
	        id="portfolio"
	        title="Portafolio"
	        color="#fbfe2e"
	        toggle={togglePortfolio}
	    />
	    <Star
	        id="contact-me"
	        title="Contáctame"
	        color="#b16ffe"
	        toggle={toggleContactMe}
	    />
	    {/*Links*/}
	    <span id="about-me-to-skills" className="link"></span>
	    <span id="about-me-to-experience" className="link"></span>
	    <span id="skills-to-portfolio" className="link"></span>
	    <span id="experience-to-portfolio" className="link"></span>
	    <span id="portfolio-to-contact-me" className="link"></span>
	</div>
    );
}

export default Corvus;
