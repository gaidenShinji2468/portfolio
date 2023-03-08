import {useState} from "react";
import {
    Whatsapp,
    Linkedin,
    EnvelopeAtFill
} from "react-bootstrap-icons";
import "/src/assets/styles/ContactMe.css";

function ContactMe()
{
    const [social, setSocial] = useState(null);
    const socialNetworks = [
	{
            id: "gmail",
	    type: "text",
	    icon: <EnvelopeAtFill/>,
	    content: "gaidenshinji2468@gmail.com"
	},
	{
            id: "whatsapp",
	    type: "text",
	    icon: <Whatsapp/>,
	    content: "+58 412 032 5803"
	},
	{
            id: "linkedin",
	    type: "link",
	    icon: <Linkedin/>,
	    content: "https://www.linkedin.com/in/romel-gil-4b1370213"        
	}
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
			        onClick={() => setSocial(social)}
			    >
                                <span className="social-halo">{social.icon}</span>
			    </li>
		        );
		    })
	        }
	    </ul>
	    {
		social && 
		    <>
		    {
		        social.type === "text" ?
		            <span className="social-content">{social.content}</span> :
		            <a className="social-content" href={social.content}>{social.content}</a>
		    }
		    </>
	    }
	</>
    );
}

export default ContactMe;
