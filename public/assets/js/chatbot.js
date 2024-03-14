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

var seleksiRules = [
    {
        question: "Jalur seleksi apa saja yang tersedia di Institut Teknologi Del?",
        answer: "Di Institut Teknologi Del, terdapat beberapa jalur seleksi seperti Seleksi Bersama Masuk Perguruan Tinggi Negeri (SBMPTN), Seleksi Mandiri, dan jalur prestasi akademik."
    },
    {
        question: "Persyaratan apa saja yang harus dipenuhi untuk mengikuti jalur seleksi SPMB IT Del?",
        answer: "Persyaratan untuk mengikuti seleksi di Institut Teknologi Del dapat berbeda-beda tergantung jalur seleksinya. Namun, umumnya persyaratan meliputi kelulusan SMA/SMK/sederajat dan mengikuti prosedur pendaftaran yang ditentukan."
    },
    {
        question: "Bagaimana cara melihat hasil seleksi SPMB IT Del?",
        answer: "Hasil seleksi SPMB IT Del dapat dilihat melalui website resmi Institut Teknologi Del atau melalui pengumuman resmi yang akan diinformasikan kepada peserta seleksi."
    },
    {
        question: "Kapan pengumuman hasil seleksi SPMB IT Del?",
        answer: "Pengumuman hasil seleksi SPMB IT Del biasanya dilakukan setelah proses seleksi selesai dan semua evaluasi telah dilakukan. Jadwal pengumuman akan diinformasikan kepada peserta seleksi melalui website resmi atau media komunikasi lainnya."
    }
];

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

generateWelcomeMessage(); // Memanggil fungsi untuk menghasilkan pesan selamat datang secara acak

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

function selectCategory(category) {
    document.getElementById('categories').style.display = 'none'; 
    document.getElementById('chat-input').style.display = 'inline-flex'; 

    var message;
    switch (category) {
        case 'Seleksi':
            message = "Anda memilih 'Seleksi'. Bagaimana saya bisa membantu Anda lebih lanjut?";
            break;
        case 'Pendaftaran':
            message = "Anda memilih 'Pendaftaran'. Apa pertanyaan Anda?";
            break;
        case 'Jadwal':
            message = "Anda memilih 'Jadwal'. Apakah Anda membutuhkan informasi tentang jadwal?";
            break;
        case 'Biaya':
            message = "Anda memilih 'Biaya'. Bagaimana saya bisa membantu Anda dengan biaya?";
            break;
        case 'Beasiswa':
            message = "Anda memilih 'Beasiswa'. Apakah Anda mencari informasi tentang beasiswa?";
            break;
        case 'Fasilitas':
            message = "Anda memilih 'Fasilitas'. Bagaimana saya bisa membantu Anda dengan fasilitas?";
            break;
        case 'Program Studi':
            message = "Anda memilih 'Program Studi'. Bagaimana saya bisa membantu Anda dengan program studi?";
            break;
        case 'Kontak':
            message = "Anda memilih 'Kontak'. Apakah Anda memerlukan informasi kontak?";
            break;
        default:
            message = "Bagaimana saya bisa membantu Anda?";
            break;
    }
    displayMessage(message, 'admin');
    document.getElementById('chatbot-container').classList.add('open');
}

function matchRule(input) {
    for (var i = 0; i < seleksiRules.length; i++) {
        var rule = seleksiRules[i];
        var regex = new RegExp(rule.question, 'i'); // Menggunakan regular expression dengan ignore case
        if (regex.test(input)) {
            return rule.answer;
        }
    }
    return "Maaf, saya tidak mengerti pertanyaan Anda.";
}

// Fungsi untuk menampilkan pesan jawaban
function displayAnswer(question) {
    var answer = matchRule(question);
    displayMessage(answer, 'admin');
}

// Fungsi untuk memproses pesan pengguna
function processUserInput(input) {
    displayMessage(input, 'user'); // Menampilkan pesan pengguna di chat
    displayAnswer(input); // Menampilkan jawaban berdasarkan aturan rule-based
}

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    processUserInput(userInput); // Memproses pesan pengguna
    document.getElementById('user-input').value = ''; // Mengosongkan input setelah pengguna mengirim pesan
}

// Fungsi untuk menampilkan pesan
function displayMessage(message, sender) {
    var chatContent = document.getElementById('chatbot-content');
    var chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.innerHTML = "<p><strong>" + (sender === 'user' ? 'You' : 'Admin') + ": </strong>" + message + "</p>";
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}
