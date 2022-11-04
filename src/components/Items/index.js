import React from "react";
import Item from "../Item";

function Items() {
	const data = [
		{
			i: "bi bi-collection",
			title: "Fresh new layout",
			text: "With Bootstrap 5, we've created a fresh new layout for this template!",
		},
		{
			i: "bi bi-cloud-download",
			title: "Free to download",
			text: "As always, Start Bootstrap has a powerful collectin of free templates.",
		},
		{
			i: "bi bi-card-heading",
			title: "Jumbotron hero header",
			text: "The heroic part of this template is the jumbotron hero header!",
		},
		{
			i: "bi bi-bootstrap",
			title: "Feature boxes",
			text: "We've created some custom feature boxes using Bootstrap icons!",
		},
		{
			i: "bi bi-code",
			title: "Simple clean code",
			text: "We keep our dependencies up to date and squash bugs as they come!",
		},
		{
			i: "bi bi-patch-check",
			title: "A name you trust",
			text: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
		},
	];
	const renderItem = () => {
		return data.map((data, index) => (
			<div key={`col_${index}`} className="col-lg-6 col-xxl-4 mb-5">
				<Item key={`item_${index}`} {...data} />
			</div>
		));
	};

	return (
		<section className="pt-4">
			<div className="container px-lg-5">
				<div className="row gx-lg-5">{renderItem()}</div>
			</div>
		</section>
	);
}

export default Items;
