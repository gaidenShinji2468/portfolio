import {
    useState,
    useEffect
} from "react";
import "/src/assets/styles/Loader.css";

function Loader()
{ 
    const [isReady, setIsReady] = useState(true);
 
    useEffect(() => {
        setTimeout(() => {
            setIsReady(false);
	}, 2600);
    }, []);

    return (
	<>
	    {
	        isReady && <div id="loader">
	            <span id="halo">
		        <span id="core"></span>
		    </span>
		    <span id="loader-title">GSH... Devs</span>
	        </div>
	    }
	</>
    );
}

export default Loader;
