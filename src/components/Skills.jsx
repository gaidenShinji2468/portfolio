import "/src/assets/styles/Skills.css";

function Skills()
{
    const skills = [
        {
	    id: "movil-app",
            title: "Diseño de Aplicaciones Moviles",
	    thumbnail: "./movil_app_dev.png" 
	},
	{
	    id: "animations",
            title: "Diseño de Animaciones",
	    thumbnail: "./animations_dev.png"
	},
	{
	    id: "design-sys",
            title: "Creación de Sistemas de Diseño",
	    thumbnail: "./design_sys_dev.png"
	},
	{
	    id: "web-app",
            title: "Desarrollo Web",
	    thumbnail: "./web_dev.png"
	}
    ];

    return (
        <ul id="skills">
	    {
                skills.map((skill, index) => {
                    return (
                        <li key={index} id={skill.id} className="skill">
			    <figure>
			        <img type="image/png" src={skill.thumbnail} alt={`This is a ${skill.thumbnail} image`}/>
			        <figcaption>{skill.title}</figcaption>
			    </figure>
			</li>
		    );
		})
	    }
	</ul>
    );
}

export default Skills;
