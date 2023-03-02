import {JournalCode} from "react-bootstrap-icons";
import "/src/assets/styles/Experience.css";

function Experience()
{
    const jobs = [
	{
            id: "lacour",
	    position: "Desarrollador en jefe",
	    company: "Lacour C.A.",
	    from: "2022",
	    until: "2023"
	}
    ];

    return (
        <ul id="experience">
	    {
                jobs.map((job, index) => {
                    return (
                        <li key={index} className="job">
			    <JournalCode size="88"/>
			    <div>
                                <h3>{job.position}</h3>
			        <h4>{job.company}</h4>
			    </div>
			    <span>{`${job.from}-${job.until}`}</span>
			</li>
		    );
		})
	    }
	</ul>
    );
}

export default Experience;
