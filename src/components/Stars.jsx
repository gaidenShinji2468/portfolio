import {useEffect} from "react";
import starsProps from "../utils/starsProps";
import "/src/assets/styles/Stars.css";

function Stars()
{
    useEffect(() => {
	starsProps(window.innerWidth, window.innerHeight, 250);
    }, [window.innerWidth, window.innerHeight]);

    return (
        <div id="stars">
	    {
                JSON.parse(localStorage.getItem("props"))?.map((props, index) => {
                    return (
                        <span
			    key={index}
			    className="interstellar-star"
			    style={{...props}}
			></span>
		    );
		})
	    }
	</div>
    );
}

export default Stars;
