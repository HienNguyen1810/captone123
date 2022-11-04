import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav defaultActiveKey={1} className="ms-auto">
						<Nav.Link eventKey={1} href="#home">
							Home
						</Nav.Link>
						<Nav.Link eventKey={2} href="#about">
							About
						</Nav.Link>
						<Nav.Link eventKey={3} href="#contact">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
