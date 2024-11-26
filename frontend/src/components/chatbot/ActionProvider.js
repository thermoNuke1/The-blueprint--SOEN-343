import { useNavigate } from "react-router-dom";
import shipmentService from '../../services/shipment'; 
import userService from '../../services/user';

class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

  
	handleTracking = () => {
		const message = this.createChatBotMessage(
			"Please provide your tracking ID."
		);
		this.setChatbotMessage(message);
	};
	handleTrackingId = async (trackingId) => {
    const trimmedTrackingId = trackingId.trim();
		const message = this.createChatBotMessage(
			`Fetching the status of your shipment..`
		);
		this.setChatbotMessage(message);

		try {
			const shipmentData = await shipmentService.getShipment(trimmedTrackingId);
			const statusMessage = `Your shipment with ID ${trackingId} has the shipping status: ${shipmentData.shipment_status}.`;
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


handleAccountInfo = async () => {
  const user = JSON.parse(window.localStorage.getItem('loggedappUser'));


  if (!user) {
      console.error('No user found in localStorage');
      return;
  }

  try {
      const userData = await userService.getUserByUsername(user.username);
      console.log('User Data:', userData);

      this.setChatbotMessage(this.createChatBotMessage(`Here is your account information:`));

      this.getName(userData); 
      this.getPoints(userData);
      this.getDiscountCodes(userData); 

  } catch (error) {
      const errorMessage = `Sorry, I cannot find any information on this user`;
      console.error(errorMessage);
      this.setChatbotMessage(this.createChatBotMessage(errorMessage));
  }
};


getName = (userData) => {
  const fullName = `${userData.firstname} ${userData.lastname}`;
  this.setChatbotMessage(this.createChatBotMessage(`Your name is ${fullName}.`));
};


getPoints = (userData) => {
  const points = userData.points;
  this.setChatbotMessage(this.createChatBotMessage(`You have ${points} points.`));
};

getDiscountCodes = (userData) => {
  const discount = userData.discount;
  this.setChatbotMessage(this.createChatBotMessage(`You have a ${discount}% discount.`));
};

handleNameRequest = async () => {
  const user = JSON.parse(window.localStorage.getItem('loggedappUser'));
  if (!user) {
      console.error('No user found in localStorage');
      return;
  }

  try {
      const userData = await userService.getUserByUsername(user.username);
      this.getName(userData);
  } catch (error) {
      const errorMessage = `Sorry, I cannot find your name.`;
      console.error(errorMessage);
      this.setChatbotMessage(this.createChatBotMessage(errorMessage));
  }
};

handlePointsRequest = async () => {
  const user = JSON.parse(window.localStorage.getItem('loggedappUser'));
  if (!user) {
      console.error('No user found in localStorage');
      return;
  }

  try {
      const userData = await userService.getUserByUsername(user.username);
      this.getPoints(userData);
  } catch (error) {
      const errorMessage = `Sorry, I cannot find your points.`;
      console.error(errorMessage);
      this.setChatbotMessage(this.createChatBotMessage(errorMessage));
  }
};

handleDiscountRequest = async () => {
  const user = JSON.parse(window.localStorage.getItem('loggedappUser'));
  if (!user) {
      console.error('No user found in localStorage');
      return;
  }

  try {
      const userData = await userService.getUserByUsername(user.username);
      this.getDiscountCodes(userData);
  } catch (error) {
      const errorMessage = `Sorry, I cannot find your discount information.`;
      console.error(errorMessage);
      this.setChatbotMessage(this.createChatBotMessage(errorMessage));
  }
};

  getSubscriptionStatus = () => {

  }

  async callGoogleGeminiAPI(userInput) {
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';  
    const apiKey = '';  

    const payload = {
        contents: [
            {
                parts: [
                    {
                        text: userInput, 
                    },
                ],
            },
        ],
        model: "gemini-1.5-flash-latest", 
    };

    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json(); 
        console.log("API Response:", data); 

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} | Message: ${data.error?.message || 'Unknown error'}`);
        }

        const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
        const message = this.createChatBotMessage(generatedText);
        this.setChatbotMessage(message);
    } catch (error) {
        console.error("Error calling Google Gemini API:", error);
        const errorMessage = "There was an issue generating a response. Please try again later.";
        this.setChatbotMessage(this.createChatBotMessage(errorMessage));
    }
}



handleExplainAI = async () => {
  const userInput = "Explain how AI works";
  const message = this.createChatBotMessage("Let me explain AI...");
  this.setChatbotMessage(message);

  await this.callGoogleGeminiAPI(userInput);
};

  
	setChatbotMessage = (message) => {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}));
	};
}

export default ActionProvider;
