import React from "react";
import { useNavigate } from "react-router-dom";

const Options = ({ handleTracking, handleAccount, handleOther }) => {
	const navigate = useNavigate();
	const handleQuote = () => {
		navigate("/quotationproposal");
	};
	const handleShip = () => {
		navigate("/placeDelivary");
	};

	const options = [
		{
			text: "Track your Package",
			handler: handleTracking,
			id: 1,
		},
		{
			text: "Get a Quote",
			handler: handleQuote,
			id: 2,
		},
		{
			text: "Ship a Package",
			handler: handleShip,
			id: 3,
		},
		{
			text: "View my Account",
			handler: handleAccount,
			id: 4,
		},
		{
			text: "Other",
			handler: handleOther,
			id: 5,
		},
	];

	const buttonsMarkup = options.map((option) => (
		<button
			key={option.id}
			onClick={option.handler}
			className="option-button"
		>
			{option.text}
		</button>
	));
	return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
