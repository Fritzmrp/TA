var chatbotButton = document.getElementById('chatbot-button');
var chatbotContainer = document.getElementById('chatbot-container');
var suggestions = document.getElementById('suggestions');
var chatInput = document.getElementById('chat-input');
var closeChatbotButton = document.querySelector('.close-chatbot');
var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

chatbotButton.addEventListener('mouseenter', function() {
    if (window.getComputedStyle(chatbotContainer).getPropertyValue('display') === 'block') {
        chatbotButton.innerHTML = closeIcon;
    }
});

chatbotButton.addEventListener('mouseleave', function() {
    if (window.getComputedStyle(chatbotContainer).getPropertyValue('display') === 'block') {
        chatbotButton.innerHTML = '<img src="assets/images/chatbot.png" alt="Chatbot Icon">';
    }
});

closeChatbotButton.addEventListener('click', function() {
    closeChatbot();
});

chatbotButton.onclick = function () {
    if (window.getComputedStyle(chatbotContainer).getPropertyValue('display') === 'block') {
        chatbotContainer.style.display = 'none';
        chatbotButton.innerHTML = '<img src="assets/images/chatbot.png" alt="Chatbot Icon">';
    } else {
        chatbotContainer.style.display = 'block';
        chatbotButton.innerHTML = closeIcon;
    }
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