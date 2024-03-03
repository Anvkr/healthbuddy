const chatHistory = document.getElementById("chatHistory");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage("user", userMessage);
    handleChatbotResponse(userMessage);
    userInput.value = "";
}

function handleChatbotResponse(userMessage) {
    // Simple rule-based chatbot
    let response = "I'm sorry, I didn't understand that.";

    if (userMessage.toLowerCase().includes("health")) {
        response = "It sounds like you have a health-related concern. Can you provide more details?";
    } else if (userMessage.toLowerCase().includes("appointment")) {
        response = "To schedule an appointment, please contact our customer service.";
    }

    appendMessage("chatbot", response);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
