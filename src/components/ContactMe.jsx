import {useState} from "react";
import {
    Whatsapp,
    Linkedin,
    EnvelopeAtFill
} from "react-bootstrap-icons";
import "/src/assets/styles/ContactMe.css";

function ContactMe()
{
    const [content, fillContent] = useState("");
    const socialNetworks = [
	{
            id: "gmail",
	    icon: <EnvelopeAtFill/>,
	    content: "gaidenshinji2468@gmail.com"
	},
	{
            id: "whatsapp",
	    icon: <Whatsapp/>,
	    content: "+58 412 032 5803"
	},
	{
            id: "linkedin",
	    icon: <Linkedin/>,
	    content: "https://www.linkedin.com/in/romel-gil-4b1370213"        }
    ];

    return (
	<>
            <ul id="contact-me">
	        {
                    socialNetworks.map((social, index) => {
                        return (
			    <li 
			        key={index}
			        id={social.id}
			        className="social"
			        onClick={() => fillContent(social.content)}
			    >
                                <span className="social-halo">{social.icon}</span>
			    </li>
		        );
		    })
	        }
	    </ul>
	    <span>{content}</span>
	</>
    );
}

export default ContactMe;
