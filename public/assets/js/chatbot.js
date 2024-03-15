var chatbotButton = document.getElementById('chatbot-button');
var chatbotContainer = document.getElementById('chatbot-container');
var closeChatbotButton = document.querySelector('.close-chatbot');
var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
var welcomeMessages = [
    "Halo! Selamat datang di chatbot FAQ layanan SPMB IT Del. Ada yang bisa saya bantu?",
    "Selamat datang! Ada yang bisa saya bantu?",
    "Hi! Apakah ada yang bisa saya bantu?",
    "Hai! Selamat datang di chatbot layanan SPMB IT Del. Ada yang bisa saya bantu?",
    "Selamat datang di chatbot FAQ layanan SPMB IT Del. Apakah ada yang bisa saya bantu?",
    "Halo! Ada yang bisa saya bantu?"
];

// Fungsi untuk menghasilkan pesan selamat datang secara acak
function generateWelcomeMessage() {
    var now = new Date();
    var hour = now.getHours();
    var welcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

    if (hour < 12) {
        welcomeMessage = "Selamat pagi! " + welcomeMessage;
    } else if (hour < 18) {
        welcomeMessage = "Selamat siang! " + welcomeMessage;
    } else {
        welcomeMessage = "Selamat malam! " + welcomeMessage;
    }

    document.getElementById('welcome-message').innerHTML = "<p><strong>Admin SPMB IT Del</strong></p><p>" + welcomeMessage + "</p>";
}

// Memanggil fungsi untuk menghasilkan pesan selamat datang secara acak
generateWelcomeMessage();

// Event listener untuk tombol chatbot
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

// Event listener untuk tombol close chatbot
closeChatbotButton.addEventListener('click', function() {
    closeChatbot();
});

// Event listener untuk toggle chatbot
chatbotButton.onclick = function () {
    if (window.getComputedStyle(chatbotContainer).getPropertyValue('display') === 'block') {
        chatbotContainer.style.display = 'none';
        chatbotButton.innerHTML = '<img src="assets/images/chatbot.png" alt="Chatbot Icon">';
    } else {
        chatbotContainer.style.display = 'block';
        chatbotButton.innerHTML = closeIcon;
    }
};

// Fungsi untuk menutup chatbot
function closeChatbot() {
    chatbotContainer.style.display = 'none';
}

// Fungsi untuk menampilkan jawaban yang terbagi menjadi beberapa bagian
function displayMultiPartAnswer(answerParts) {
    var chatContent = document.getElementById('chatbot-content');
    answerParts.forEach(function(part) {
        var chatMessage = document.createElement('div');
        chatMessage.className = 'chat-message';
        chatMessage.innerHTML = "<p><strong>Admin: </strong>" + part + "</p>";
        chatContent.appendChild(chatMessage);
    });
    chatContent.scrollTop = chatContent.scrollHeight;
}
