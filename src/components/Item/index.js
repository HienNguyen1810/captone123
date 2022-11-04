import React from "react";
import Card from "react-bootstrap/Card";

function Item(props) {
	return (
		<Card bg="light" className="border-0 h-100">
			<Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
				<div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
					<i className={props.i}></i>
				</div>
				<Card.Title className="fs-4 fw-bold">{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Item;
