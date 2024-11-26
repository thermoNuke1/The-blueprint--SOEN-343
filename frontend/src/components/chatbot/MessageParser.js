class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello world")) {
      this.actionProvider.helloWorldHandler();
    } else if (lowercase.includes("explain ai")) {
      this.actionProvider.handleExplainAI(); // Added logic for Explain AI
    } else {
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
