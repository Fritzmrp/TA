// JavaScript untuk mengatur fungsi chatbot

// Mengambil elemen-elemen yang diperlukan
var chatbotButton = document.getElementById('chatbot-button');
var chatbotContainer = document.getElementById('chatbot-container');

// Menampilkan chatbot container ketika tombol chatbot diklik
chatbotButton.onclick = function () {
    chatbotContainer.style.display = 'block';
};

// Menutup chatbot container
function closeChatbot() {
    chatbotContainer.style.display = 'none';
}
