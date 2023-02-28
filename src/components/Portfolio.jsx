import "/src/assets/styles/Portfolio.css";
import {
    Github,
    Display
} from "react-bootstrap-icons";

function Portfolio()
{
    const portfolio = [
	{
            id: "api-cocktails",
	    title: "API Cocktails",
	    thumbnail: "./api_cocktails_app.png",
	    url: "https://api-cocktails.netlify.app",
	    git: "https://github.com/gaidenShinji2468/api_cocktails.git"
	},
	{
            id: "crud-products",
	    title: "CRUD Products",
	    thumbnail: "./crud_products_app.png",
	    url: "https://crud-products02.netlify.app",
	    git: "https://github.com/gaidenShinji2468/crud_products.git"
	},
	{
            id: "e-commerce",
	    title: "E-Commerce",
	    thumbnail: "./e_commerce_app.png",
	    url: "https://gsh-e-commerce.netlify.app",
	    git: "https://github.com/gaidenShinji2468/e-commerce.git"
	},
	{
            id: "pokedex",
	    title: "Pokedex",
	    thumbnail: "./pokedex_app.png",
	    url: "https://gsh-pokedex.netlify.app",
	    git: "https://github.com/gaidenShinji2468/pokedex.git"
	},
	{
            id: "random-users",
	    title: "Random Users",
	    thumbnail: "./random_users_app.png",
	    url: "https://gsh-random-users.netlify.app",
	    git: "https://github.com/gaidenShinji2468/random_card.git"
	}
    ];

    return (
        <ul id="portfolio">
            {
                portfolio.map((app, index) => {
                    return (
                        <li key={index} id={app.id} className="app">
			    <ul>
			        <li>
                                    <figure>
			                <img type="image/png" src={app.thumbnail} alt={`This is a ${app.thumbnail} image`}/>
			                <figcaption>{app.title}</figcaption>
			            </figure>
			        </li>
			        <li>
			            <a href={app.url}><Display/></a>
			            <a href={app.git}><Github/></a>
			        </li>
			    </ul>
			</li>
		    );
		})
	    }
	</ul>
    );
}

export default Portfolio;
