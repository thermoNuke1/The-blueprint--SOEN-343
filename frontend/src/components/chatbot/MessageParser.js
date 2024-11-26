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
