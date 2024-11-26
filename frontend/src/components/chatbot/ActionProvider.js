import { useNavigate } from "react-router-dom";
import shipmentService from "../../services/shipment";
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	//	handleQuote = () => {};

	handlePython = () => {
		const message = this.createChatBotMessage("Python is a fantastic choice!");
		this.setChatbotMessage(message);
	};

	handleGolang = () => {
		const message = this.createChatBotMessage(
			"Golang is known for its speed and efficiency!"
		);
		this.setChatbotMessage(message);
	};

	handleTracking = () => {
		const message = this.createChatBotMessage(
			"Please provide your tracking ID."
		);
		this.setChatbotMessage(message);
	};
	handleTrackingId = async (trackingId) => {
		const message = this.createChatBotMessage(
			`Fetching the status of your shipment..`
		);
		this.setChatbotMessage(message);

		try {
			const shipmentData = await shipmentService.getShipment(trackingId);
			const statusMessage = `Your shipment with ID ${trackingId} has the shipping status: ${shipmentData.status}.`;
			this.setChatbotMessage(this.createChatBotMessage(statusMessage));
		} catch (error) {
			const errorMessage = `Sorry, I cannot find any information for shipment ID ${trackingId}. Please check the ID and try again.`;
			this.setChatbotMessage(this.createChatBotMessage(errorMessage));
		}
	};
	handleAccount = () => {
		const message = this.createChatBotMessage("What would you like to know?");
		this.setChatbotMessage(message);
	};

	setChatbotMessage = (message) => {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}));
	};
}

export default ActionProvider;
