var chatbotButton = document.getElementById('chatbot-button');
var chatbotContainer = document.getElementById('chatbot-container');

chatbotButton.onclick = function () {
    chatbotContainer.style.display = 'block';
};

function closeChatbot() {
    chatbotContainer.style.display = 'none';
}
