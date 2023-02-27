import {
    useState,
    useEffect
} from "react";
import Loader from "./components/Loader";
import Stars from "./components/Stars";
import Corvus from "./components/Corvus";
import StarModal from "./components/StarModal";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import "./assets/styles/Space.css";

function Space()
{
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showContactMe, setShowContactMe] = useState(false);

    const toggleAboutMe = () => setShowAboutMe(!showAboutMe);
    const toggleSkills = () => setShowSkills(!showSkills);
    const toggleExperience = () => setShowExperience(!showExperience);
    const togglePortfolio = () => setShowPortfolio(!showPortfolio);
    const toggleContactMe = () => setShowContactMe(!showContactMe);

    const aboutMeToSkills = () => {
        toggleAboutMe();
	toggleSkills();
    }

    const aboutMeToExperience = () => {
        toggleAboutMe();
	toggleExperience();
    }

    const skillsToPortfolio = () => {
        toggleSkills();
	togglePortfolio();
    }

    const skillsToAboutMe = () => {
        toggleSkills();
	toggleAboutMe();
    }

    const experienceToPortfolio = () => {
        toggleExperience();
	togglePortfolio();
    }

    const experienceToAboutMe = () => {
        toggleExperience();
	toggleAboutMe();
    }

    const portfolioToSkills = () => {
        togglePortfolio();
	toggleSkills();
    }

    const portfolioToExperience = () => {
        togglePortfolio();
	toggleExperience();
    }

    const portfolioToContactMe = () => {
        togglePortfolio();
	toggleContactMe();
    }

    const contactMeToPortfolio = () => {
        toggleContactMe();
	togglePortfolio();
    }

    return (
	<>
	    <Loader/>
	    <Stars/>
	    <div id="space">
	        <Corvus
                    toggleAboutMe={toggleAboutMe}
	            toggleSkills={toggleSkills}
	            toggleExperience={toggleExperience}
	            togglePortfolio={togglePortfolio}
	            toggleContactMe={toggleContactMe}
	        />
	    
	        <StarModal
                    credentials={{
                        id: "about-me-modal",
		        title: "Acerca de mí"
	            }}
	            show={showAboutMe}
	            toggle={toggleAboutMe}
	            links={[
		        {
                            to: "Habilidades",
		            link: aboutMeToSkills
		        },
		        {
                            to: "Experiencia",
		            link: aboutMeToExperience
		        }
	            ]}
	            core={<AboutMe/>}
	        />
                <StarModal
	            credentials={{
                        id: "skills-modal",
	                title: "Habilidades"
	            }}
	            show={showSkills}
	            toggle={toggleSkills}
	            links={[
		        {
		            to: "Acerca de mí",
		            link: skillsToAboutMe
		        },
                        {
                            to: "Portafolio",
		            link: skillsToPortfolio
		        }
	            ]}
	            core={<Skills/>}
	        />
	        <StarModal
                    credentials={{
                        id: "experience-modal",
		        title: "Experiencia"
	            }}
	            show={showExperience}
	            toggle={toggleExperience}
	            links={[
		        {
		            to: "Acerca de mí",
		            link: experienceToAboutMe
		        },
                        {
                            to: "Portafolio",
		            link: experienceToPortfolio
		        }
	            ]}
	            core={<Experience/>}
	        />
	        <StarModal
	            credentials={{
                        id: "portfolio-modal",
		        title: "Portafolio"
	            }}
	            show={showPortfolio}
	            toggle={togglePortfolio}
	            links={[
                        {
                            to: "Habilidades",
		            link: portfolioToSkills
		        },
		        {
                            to: "Experiencia",
		            link: portfolioToExperience
		        },
		        {
                            to: "Contáctame",
			    link: portfolioToContactMe
		        }
	            ]}
	            core={<Portfolio/>}
	        />
	        <StarModal
                    credentials={{
                        id: "contact-me-modal",
		        title: "Contáctame"
	            }}
	            show={showContactMe}
	            toggle={toggleContactMe}
	            links={[
                        {
                            to: "Portafolio",
		            link: contactMeToPortfolio
		        }
	            ]}
	            core={<ContactMe/>}
	        />
	    </div>
	</>
    );
}

export default Space;
