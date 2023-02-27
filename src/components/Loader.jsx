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
	}, 4000);
    }, []);

    return (
	<>
	    {
	        isReady && <div id="loader">
	            <span id="halo">
		        <span id="core"></span>
		    </span>
	        </div>
	    }
	</>
    );
}

export default Loader;
