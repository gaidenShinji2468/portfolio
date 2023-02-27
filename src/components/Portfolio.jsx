import "/src/assets/styles/Portfolio.css";

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
                        <li key={index} className="app">

			</li>
		    );
		})
	    }
	</ul>
    );
}

export default Portfolio;
