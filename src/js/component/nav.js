import React from "react";
import PropTypes from "prop-types";

export const NavBar = props => {
	return (
		<div className="sticky-top">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<div className="">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div
						className="collapse navbar-collapse d-md-flex justify-content-md-end"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									{props.label}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.label2}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.label3}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.label4}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
NavBar.propTypes = {
	label: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	label4: PropTypes.string
};
