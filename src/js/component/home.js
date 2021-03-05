import React from "react";

//include images into your bundle
import { NavBar } from "./nav.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

const card = {
	title: "Card Title 1",
	title2: "Card Title 2",
	title3: "Card Title 3",
	title4: "Card Title 4",
	image: "https://picsum.photos/id/10/500/325",
	image2: "https://picsum.photos/id/1002/500/325",
	image3: "https://picsum.photos/id/1015/500/325",
	image4: "https://picsum.photos/id/1016/500/325",
	dsc:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
	dsc2:
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunt",
	dsc3:
		"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure it",
	dsc4:
		"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidemd"
};

const nav = {
	label: "Home",
	label2: "About",
	label3: "Services",
	label4: "Contact"
};

//create your first component
export function Home() {
	return (
		<>
			<NavBar
				label={nav.label}
				label2={nav.label2}
				label3={nav.label3}
				label4={nav.label4}
			/>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div className="me-2 mt-5">
							<Card
								title={card.title}
								image={card.image}
								dsc={card.dsc}
							/>
						</div>
					</div>
					<div className="col-md-3">
						<div className="me-2 mt-5">
							<Card
								title={card.title2}
								image={card.image2}
								dsc={card.dsc2}
							/>
						</div>
					</div>
					<div className="col-md-3">
						<div className="me-2 mt-5">
							<Card
								title={card.title3}
								image={card.image3}
								dsc={card.dsc3}
							/>
						</div>
					</div>
					<div className="col-md-3">
						<div className="my-5">
							<Card
								title={card.title4}
								image={card.image4}
								dsc={card.dsc4}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
