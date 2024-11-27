class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const lowercase = message.toLowerCase();

    if (lowercase.includes("how does shipping work") || lowercase.includes("shipping process") || lowercase.includes("delivery system") || lowercase.includes("logistics") || lowercase.includes("shipping information") || lowercase.includes("delivery methods") || lowercase.includes("shipping services") || lowercase.includes("parcel delivery") || lowercase.includes("shipping procedures")) {
      this.actionProvider.handleExplainShipping();
  } else if (lowercase.includes("company")|| lowercase.includes("policy")) {
  this.actionProvider.handleCompanyInfo(); 
  }   else if (lowercase.includes("points")) {
      this.actionProvider.handlePointsRequest(); 
    } else if (lowercase.includes("name")) {
      this.actionProvider.handleNameRequest(); 
    } else if (lowercase.includes("discount")) {
      this.actionProvider.handleDiscountRequest(); 
    } else if (lowercase.includes("your story")) {
      this.actionProvider.handleOurStory();
    } else if (lowercase.includes("package not arrived") || lowercase.includes("package hasn't arrived") || lowercase.includes("package not here yet") || lowercase.includes("still waiting for package") || lowercase.includes("why is my package not here yet") || lowercase.includes("It's passed my delivery date where is my package") || lowercase.includes("Havent't received my package yet") || lowercase.includes("my package missing")) {
      this.actionProvider.handlePackageNotArrived();
    } else if (lowercase.includes("package broken") || lowercase.includes("broken package") || lowercase.includes("damaged package") || lowercase.includes("package damaged") || lowercase.includes("package is broken") || lowercase.includes("package is damaged") || lowercase.includes("my package was broken on arrival")) {
      this.actionProvider.handleBrokenPackage();
    } else if (lowercase.includes("am unavailable") || lowercase.includes("i'm unavailable") || lowercase.includes("am not available") || lowercase.includes("i'm not available") || lowercase.includes("won't be available") || lowercase.includes("will not be available") || lowercase.includes("i will be unavailable")) {
      this.actionProvider.handleUnavailableDuringDeliveryDate();
    } else if (lowercase.includes("international quote") || lowercase.includes("international shipping price") || lowercase.includes("international shipment") || lowercase.includes("international package") || lowercase.includes("international parcel") || lowercase.includes("send a package internationally") || lowercase.includes("send a parcel internationally")) {
      this.actionProvider.handleInternationalQuote(lowercase);
    }
    else {
      const trackingIdPattern = /^[a-zA-Z0-9]{24}$/;

      const match = message.match(trackingIdPattern);

      if (match) {
        const trackingId = match[0];
        this.actionProvider.handleTrackingId(trackingId);
      } else {
        const errorMessage =
          "I couldn't understand your request. Please try again.";
        this.actionProvider.setChatbotMessage(
          this.actionProvider.createChatBotMessage(errorMessage)
        );
      }
    }
  }
}

export default MessageParser;
