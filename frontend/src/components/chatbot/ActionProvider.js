import { useNavigate } from "react-router-dom";
import shipmentService from "../../services/shipment";
import userService from "../../services/user";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  showOptionsWidget() {
    const message = this.createChatBotMessage(
      "What else can I help you with?",
      {
        widget: "options",
      }
    );
    this.setChatbotMessage(message);
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
    setTimeout(() => {
      this.showOptionsWidget();
    }, 30000);
  };
  handleAccount = () => {
    const message = this.createChatBotMessage("What would you like to know?");
    this.setChatbotMessage(message);
  };

  handleAccountInfo = async () => {
    const user = JSON.parse(window.localStorage.getItem("loggedappUser"));

    if (!user) {
      console.error("No user found in localStorage");
      return;
    }
    try {
      const userData = await userService.getUserByUsername(user.username);

      console.log("User Data:", userData);

      this.setChatbotMessage(
        this.createChatBotMessage(`Here is your account information:`)
      );

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
    this.setChatbotMessage(
      this.createChatBotMessage(`Your name is ${fullName}.`)
    );
    setTimeout(() => {
      this.showOptionsWidget();
    }, 30000);
  };

  getPoints = (userData) => {
    const points = userData.points;
    this.setChatbotMessage(
      this.createChatBotMessage(`You have ${points} points.`)
    );
    setTimeout(() => {
      this.showOptionsWidget();
    }, 30000);
  };

  getDiscountCodes = (userData) => {
    const discount = userData.discount;
    this.setChatbotMessage(
      this.createChatBotMessage(`You have a ${discount}% discount.`)
    );
    setTimeout(() => {
      this.showOptionsWidget();
    }, 30000);
  };

  handleNameRequest = async () => {
    const user = JSON.parse(window.localStorage.getItem("loggedappUser"));
    if (!user) {
      console.error("No user found in localStorage");
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
    const user = JSON.parse(window.localStorage.getItem("loggedappUser"));
    if (!user) {
      console.error("No user found in localStorage");
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
    const user = JSON.parse(window.localStorage.getItem("loggedappUser"));
    if (!user) {
      console.error("No user found in localStorage");
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

  getSubscriptionStatus = () => {};

  async callGoogleGeminiAPI(userInput) {
    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
    const apiKey = "";

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status} | Message: ${
            data.error?.message || "Unknown error"
          }`
        );
      }

      const generatedText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response.";
      const message = this.createChatBotMessage(generatedText);
      this.setChatbotMessage(message);
      setTimeout(() => {
        this.showOptionsWidget();
      }, 20000);
    } catch (error) {
      console.error("Error calling Google Gemini API:", error);
      const errorMessage =
        "There was an issue generating a response. Please try again later.";
      this.setChatbotMessage(this.createChatBotMessage(errorMessage));

      this.showOptionsWidget();
    }
  }

  handleExplainShipping = async () => {
    const userInput =
      "Explain how shipping works in a delivery system for beginners. outline three key components. keep it to 2 sentences with short bullet points. If the user asks about ";

    await this.callGoogleGeminiAPI(userInput);
  };

  handleOurStory = async () => {
    const userInput =
      "We are a delivery service company called Deltra. Deltra was co-founded by six individuals (Sydney, Mohammed, Midhurshaan, Jeremy, Adam, Carlo) who were fed up with receiving late items and broken items due to careless delivery companies. Write a short (2 sentence) message explaining why we started our business.";

    await this.callGoogleGeminiAPI(userInput);
  };

  handlePackageNotArrived = async () => {
    const userInput =
      "A user used our chatbot to say they haven't received their package. Send a message that is short to tell them to send us an email at theblueprint634@gmail.com with their tracking id";

    await this.callGoogleGeminiAPI(userInput);
  };

  handleBrokenPackage = async () => {
    const userInput =
      "A user used our chatbot to say that their package was broken on arrival. Send a message that is short to apologize for the inconvenience and how we're going to investigate the root cause of the issue and tell them to send us an email at theblueprint634@gmail.com with their tracking id to get reimbursement on their parcel";

    await this.callGoogleGeminiAPI(userInput);
  };

  handleUnavailableDuringDeliveryDate = async () => {
    const userInput =
      "A person just said they won't be available during the delivery date for their package. Tell them in a short concise manner that they should send us an email with their tracking id as well as their next earliest available date in order to for us to inform our drivers";

    await this.callGoogleGeminiAPI(userInput);
  };

  handleInternationalQuote = async (message) => {
    const userInput = message + "Using the previous sentence return just a short sentence saying something like the estimated shipping cost for international shipments is followed by the final answer. Use stamdard international shipment fees. If the message doesn't include weight and/or dimensions tell them that the price depends on those factors and end with \"Please ask the question again with the appropriate information\". Use a formula that gives a rough estimate of the cost and assume the package will be delivered using standard delivery. Just assume the formula you are using is the one specific to our company Deltra and keep you response short just re-iterate the information passed such as weight, size, origin country, destination country followed by the price or price range";

    await this.callGoogleGeminiAPI(userInput);
  };

  setChatbotMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleCompanyInfo = async () => {
    const userInput =
      "Company name is Deltra come up with 3 basic company policies for our fake shipping delivert system. keep it very short. Don't make the sentences long";
    await this.callGoogleGeminiAPI(userInput);
  };
  handleQuestion = () => {
    const message = this.createChatBotMessage(
      "What would you like to know about our shipping service?"
    );
    this.setChatbotMessage(message);
  };
}

export default ActionProvider;
