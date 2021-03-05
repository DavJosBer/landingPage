import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card text-center">
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text my-3">{props.dsc}</p>
				<a href="#" className="btn btn-primary">
					Find Out More
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	dsc: PropTypes.string
};
