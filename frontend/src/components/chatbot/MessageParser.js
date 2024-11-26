class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello world")) {
        this.actionProvider.helloWorldHandler()
    }
    const trackingIdPattern = /^[a-zA-Z0-9]{24}$/; 

    const match = message.match(trackingIdPattern);

    if (match) {
      
      const trackingId = match[0]; 
      this.actionProvider.handleTrackingId(trackingId);
    } else {
      
      const errorMessage = "I couldn't find a valid tracking ID. Please provide a valid tracking ID.";
      this.actionProvider.setChatbotMessage(this.actionProvider.createChatBotMessage(errorMessage));
    }

  }
}

export default MessageParser;