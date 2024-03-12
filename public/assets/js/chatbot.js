var chatbotButton = document.getElementById('chatbot-button');
var chatbotContainer = document.getElementById('chatbot-container');
var suggestions = document.getElementById('suggestions');
var chatInput = document.getElementById('chat-input');

chatbotButton.onclick = function () {
    chatbotContainer.style.display = 'block';
};

function closeChatbot() {
    chatbotContainer.style.display = 'none';
}

function selectSuggestion(option) {
    suggestions.style.display = 'none'; 
    chatInput.style.display = 'inline-flex'; 

    var message;
    switch (option) {
        case 'Selection':
            message = "You selected 'Selection'. How can I assist you further?";
            break;
        case 'Question':
            message = "You selected 'Question'. What questions do you have?";
            break;
        case 'TimeTable':
            message = "You selected 'TimeTable'. Do you need information about the timetable?";
            break;
        case 'StudyProgram':
            message = "You selected 'StudyProgram'. How can I help you with the study programs?";
            break;
        case 'Scholarship':
            message = "You selected 'Scholarship'. Are you looking for information about scholarships?";
            break;
        default:
            message = "How can I assist you?";
            break;
    }
    displayMessage(message, 'admin');
    chatbotContainer.classList.add('open');
}

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    displayMessage(userInput, 'user');
}

function displayMessage(message, sender) {
    var chatContent = document.getElementById('chatbot-content');
    var chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.innerHTML = "<p><strong>" + (sender === 'user' ? 'You' : 'Admin') + ": </strong>" + message + "</p>";
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}