import "/src/assets/styles/Star.css";

function Star({
    id,
    title,
    color,
    toggle,
    top
})
{
    return (
        <div id={id} className="star-base" onClick={() => toggle()}>
	    {top && <span className="star-title">{title}</span>}
	    <div className="star">
                <div
	            className="star-halo"
	            style={{
                        border: `1px solid ${color}`
		    }}
	        >
	            <div
	                className="star-core"
	                style={{
                            background: `radial-gradient(closest-side, white 15%, ${color} 30%, var(--bs-body-bg) 80%)`
			}}
	            ></div>
	        </div>
	    </div>
	    {!top && <span className="star-title">{title}</span>}
	</div>
    );
}

export default Star;
