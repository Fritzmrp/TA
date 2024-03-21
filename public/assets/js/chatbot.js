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

// Fungsi untuk mengambil kategori dari database dan menampilkannya
function getKategori() {
    fetch('/kategori')
    .then(response => response.json())
    .then(kategori => {
        const categoriesList = document.getElementById('categories').querySelector('ul');
        categoriesList.innerHTML = ''; // Bersihkan daftar kategori sebelum menambahkan yang baru
        kategori.forEach(kat => {
            const categoryItem = document.createElement('li');
            categoryItem.textContent = kat.nama_kategori;
            categoryItem.onclick = function() {
                selectCategory(kat.nama_kategori);
            };
            categoriesList.appendChild(categoryItem);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Memanggil fungsi untuk mengambil kategori saat halaman dimuat
getKategori();

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
    if (chatbotContainer) { // Periksa apakah chatbotContainer tidak null
        if (window.getComputedStyle(chatbotContainer).getPropertyValue('display') === 'block') {
            chatbotContainer.style.display = 'none';
            chatbotButton.innerHTML = '<img src="assets/images/chatbot.png" alt="Chatbot Icon">';
        } else {
            chatbotContainer.style.display = 'block';
            chatbotButton.innerHTML = closeIcon;
        }
    }
};

function selectCategory(category) {
    fetch('/pertanyaan/' + category)
    .then(response => response.json())
    .then(pertanyaan => {
        const questionButtonsContainer = document.getElementById('question-buttons-container');
        questionButtonsContainer.innerHTML = ''; // Bersihkan daftar pertanyaan sebelum menambahkan yang baru
        pertanyaan.forEach(pert => {
            const questionButton = document.createElement('button');
            questionButton.textContent = pert.pertanyaan;
            questionButton.onclick = function() {
                sendQuestion(pert.pertanyaan);
            };
            questionButtonsContainer.appendChild(questionButton);
        });
        // Tampilkan kontainer input pesan
        document.getElementById('chatbot-input').style.display = 'block';
        document.getElementById('question-buttons').style.display = 'block'; // Tampilkan daftar pertanyaan
    })
    .catch(error => console.error('Error:', error));
}

// Fungsi untuk mengirim pertanyaan yang dipilih ke server dan menampilkan jawabannya
function sendQuestion(question) {
    // Kirim pertanyaan ke server
    fetch('/send-pertanyaan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pertanyaan: question })
    })
    .then(response => response.json())
    .then(data => {
        // Tampilkan jawaban dari server
        var chatContent = document.getElementById('chatbot-content');
        var chatMessage = document.createElement('div');
        chatMessage.className = 'chat-message';
        chatMessage.innerHTML = "<p><strong>Admin: </strong>" + data.jawaban + "</p>";
        chatContent.appendChild(chatMessage);
        chatContent.scrollTop = chatContent.scrollHeight;
    })
    .catch(error => console.error('Error:', error));
}

// Fungsi untuk mengirim pesan ke server
function sendMessage(message) {
    // Kirim pesan ke server dan tanggapi di sini
    // Contoh implementasi:
    var chatContent = document.getElementById('chatbot-content');
    var chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.innerHTML = "<p><strong>Anda: </strong>" + message + "</p>";
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}

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
