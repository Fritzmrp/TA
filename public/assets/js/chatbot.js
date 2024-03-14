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
            message = "Anda memilih 'Seleksi'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons();
            break;
        // tambahkan case untuk kategori lain jika diperlukan
        default:
            message = "Bagaimana saya bisa membantu Anda?";
            displayMessage(message, 'admin');
            break;
    }
    document.getElementById('chatbot-container').classList.add('open');
}

function displayQuestionButtons() {
    var questions = [
        "Jalur seleksi apa saja yang tersedia di Institut Teknologi Del?",
        "Persyaratan apa saja yang harus dipenuhi untuk mengikuti jalur seleksi SPMB IT Del?",
        "Bagaimana cara melihat hasil seleksi SPMB IT Del?",
        "Kapan pengumuman hasil seleksi SPMB IT Del?"
    ];

    var questionList = document.createElement('ul');
    questionList.classList.add('question-list');

    questions.forEach(function(question) {
        var listItem = document.createElement('li');
        listItem.textContent = question;
        listItem.classList.add('question-button');
        listItem.onclick = function() {
            processUserInput(question);
        };
        questionList.appendChild(listItem);
    });

    document.getElementById('chatbot-content').appendChild(questionList);
}

var additionalRules = [
    {
        question: "jalur seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jalur",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jalur penerimaan",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "penerimaan",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "proses seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "sistem seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "ujian seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "ujian",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "penilaian seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "penilaian",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jadwal seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut:\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\n2. USM 1 (Ujian Saring Masuk)\n3. USM 2 (Ujian Saring Masuk)\n4. USM 3 (Ujian Saring Masuk)\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\n6. JPS (Jalur Prestasi Siswa)\n\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut:\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    // Tambahkan aturan tambahan lain jika diperlukan
];

function matchRule(input) {
    // Ubah input dan pertanyaan aturan tambahan menjadi huruf kecil untuk pencocokan yang tidak case-sensitive
    input = input.toLowerCase();

    // Periksa aturan utama
    for (var i = 0; i < seleksiRules.length; i++) {
        var rule = seleksiRules[i];
        var keywords = rule.question.toLowerCase().split(' ');
        var match = true;
        keywords.forEach(function(keyword) {
            if (input.indexOf(keyword) === -1) {
                match = false;
            }
        });
        if (match) {
            return rule.answer;
        }
    }

    // Periksa aturan tambahan
    for (var j = 0; j < additionalRules.length; j++) {
        var additionalRule = additionalRules[j];
        if (input.indexOf(additionalRule.question) !== -1) {
            return additionalRule.answer;
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
    var answer = matchRule(input);
    displayMessage(answer, 'admin');
}

function displayMessage(message, sender) {
    var chatContent = document.getElementById('chatbot-content');
    var chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    chatMessage.innerHTML = "<p><strong>" + (sender === 'user' ? 'You' : 'Admin') + ": </strong>" + message + "</p>";
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    processUserInput(userInput); // Memproses pesan pengguna
    document.getElementById('user-input').value = ''; // Mengosongkan input setelah pengguna mengirim pesan
}