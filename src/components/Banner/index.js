import React from "react";
import { Button, Container } from "react-bootstrap";

function Banner() {
	return (
		<header className="py-5">
			<Container className="px-lg-5">
				<div className="p-4 p-lg-5 bg-light rounded-3 text-center">
					<div className="m-4 m-lg-5">
						<h1 className="display-5 fw-bold">A warm welcome!</h1>
						<p className="fs-4">
							Bootstrap utility classNamees are used to create this jumbotron
							since the old component has been removed from the framework. Why
							create custom CSS when you can use utilities?
						</p>
						<Button variant="primary" size="lg" href="#!">
							Call to action
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Banner;
