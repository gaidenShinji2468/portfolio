import "/src/assets/styles/Stars.css";

function Stars()
{
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
