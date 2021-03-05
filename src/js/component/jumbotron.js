import React from "react";

export const Jumbotron = () => {
	return (
		<div className="card my-5 px-3 py-5 bg-light">
			<h1 className="display-1 fw-bold">A Warm Welcome!</h1>
			<p className="my-3">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Voluptatibus nobis consectetur dicta, odio voluptatum delectus
				fugit dolorem fuga esse sed quas odit magnam rerum alias totam
				amet cumque nisi autem?
			</p>
			<div className="d-grid gap-2 d-md-flex justify-content-md-start">
				<button className="btn btn-primary me-md-2 mt-3" type="button">
					Call to Action
				</button>
			</div>
		</div>
	);
};
