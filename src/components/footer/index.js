import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
	return (
		<Navbar expand="xxl" bg="dark" variant="dark" className="py-5">
			<Container className="justify-content-center">
				<Navbar.Text className="text-white">
					Copyright © Your Website 2022
				</Navbar.Text>
			</Container>
		</Navbar>
	);
}

export default Footer;
