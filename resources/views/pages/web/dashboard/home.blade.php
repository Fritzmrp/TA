<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/chatbot.css">
    <title>SPMB Del</title>
</head>

<body>
    <header>
        <nav>
            <a href="#home">HOME</a>
            <a href="#info">INFO & PENDAFTARAN</a>
            <a href="#biaya">BIAYA</a>
            <a href="#prodi">PRODI</a>
            <a href="#pengumuman">PENGUMUMAN</a>
            <a href="#forum">FORUM</a>
            <a href="#berita">BERITA</a>
            <a href="#daftar">DAFTAR ONLINE</a>
            <a href="#kontak">KONTAK</a>
            <a href="#login">LOGIN</a>
        </nav>
    </header>

    <section>
        <div class="info-container">
            <img src="assets/images/logodel.jpg" alt="Logo IT Del" width="80" height="80" class="logo">
            <div>
                <h2>SPMB IT Del</h2>
                <p>Informasi Penerimaan Mahasiswa Baru Institut Teknologi Del</p>
            </div>
        </div>

        <div class="slide-container">
            <div class="slide-img">
                <img src="assets/images/PendaftaranUSM.jpg" alt="Slide Image" width="100%" height="auto">
            </div>
            <div class="menu-container">
                <h3>Jadwal Pendaftaran</h3>
                <table>
                    <tr>
                        <td>JPS</td>
                        <td>13 Januari 2024 - 04 Februari 2024</td>
                    </tr>
                    <tr>
                        <td>PMDK</td>
                        <td>22 Desember 2023 - 14 Januari 2024</td>
                    </tr>
                    <tr>
                        <td>USM 1</td>
                        <td>05 Februari 2024 - 07 Maret 2024</td>
                    </tr>
                    <tr>
                        <td>USM 2</td>
                        <td>18 Maret 2024 - 08 Mei 2024</td>
                    </tr>
                    <tr>
                        <td>USM 3</td>
                        <td>10 Mei 2024 - 06 Juni 2024</td>
                    </tr>
                    <tr>
                        <td>UTBK</td>
                        <td>10 Juni 2024 - 04 Juli 2024</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="content-container">
            <div class="content-box">
                <h3>MARTUHAN</h3>
                <p>
                    MarTuhan adalah keyakinan akan keberadaan Tuhan dan kesetiaan untuk mengenal dan mengasihi Tuhan, sebagai sambutan atas kasih Tuhan kepada manusia, yang membangkitkan gairah belajar disiplin kontemplatif spiritual yang membentuk pembaharuan budi sehingga menimbulkan kepedulian mengasihi sesama dan pengabdian dalam kehidupan bermasyarakat.

                    Ada tiga ciri MarTuhan, yaitu:

                    1.Pengenalan dan kasih kepada Tuhan merupakan kedalaman kesehatan spriritual dengan menyediakan saluran untuk mempertahankan kesadaran akal budi atas keberadaan dan kebenaranNya.
                    2.Belajar disiplin kontemplatif spiritual merupakan ciri pemelajar untuk semakin mengalami kedewasaan relasi dengan Tuhan yang menimbulkan pembaharuan budi, dan
                    3.Keinginan untuk mengembangkan sesama dengan berbicara, mendengar, dan bersama merasakan kehadiran Allah memampukan diri bertumbuh dan bersaksi terhadap perubahan budi pekerti yang saling membangun.

                    Iman: belajar dan berbuat menuju pembaharuan budi
                </p>
            </div>

            <div class="content-box">
                <h3>MARROHA</h3>
                <p>
                    Marroha adalah sikap dalam bertindak berlandaskan pada kerendahan hati dengan penuh tanggung jawab, melakukan apapun dengan hati, dan tunduk pada nilai-nilai moral dalam kaitannya dengan makhluk hidup lainnya.

                    Integritas: kesadaran moral dan etika menuju kebajikan
                </p>
            </div>

            <div class="content-box">
                <h3>MARBISUK</h3>
                <p>
                    Marbisuk adalah bijaksana berdasarkan hikmat yang mengedepankan kearifan dan pengertian berdasarkan penguasaan pengetahuan dan kecakapan dalam bekerja dan kesediaan belajar sepanjang hayat.

                    Ilmu: cakap dan berkarya dengan akal budi menuju hikmat
                </p>
            </div>
        </div>
    </section>

    <div id="chatbot-button" class="chatbot-button">
        <img src="assets/images/chatbot.png" alt="Chatbot Icon">
    </div>

    <div id="chatbot-container" class="chatbot-container">
        <div class="chatbot-header">
            <span class="close-chatbot" onclick="closeChatbot()">&times;</span>
            <h4>Chatbot SPMB IT Del</h4>
        </div>
        <div id="chatbot-content" class="chatbot-content">
            <!-- Pesan sambutan -->
            <div class="chat-message" id="welcome-message">
                <p><strong>Admin SPMB IT Del</strong></p>
                <p>Hello! I'm the Admin of SPMB IT Del, your AI powered assistant here to help you with all your needs! 😊</p>
                <p>May I know what you want to ask about SPMB IT Del?</p>
            </div>
    
            <!-- Suggestions -->
            <div class="suggestions">
                <div class="left-suggestions">
                    <p><strong>Suggestions:</strong></p>
                    <ul>
                        <li onclick="selectSuggestion('Selection')">Selection</li>
                        <li onclick="selectSuggestion('Question')">Question</li>
                        <li onclick="selectSuggestion('TimeTable')">TimeTable</li>
                        <li onclick="selectSuggestion('StudyProgram')">StudyProgram</li>
                        <li onclick="selectSuggestion('Scholarship')">Scholarship</li>
                    </ul>
                </div>
                <div class="right-suggestions">
                    <p><strong>Suggestions:</strong></p>
                    <ul>
                        <li onclick="selectSuggestion('Cost')">Cost</li>
                        <li onclick="selectSuggestion('Facility')">Facility</li>
                        <li onclick="selectSuggestion('Campus')">Campus</li>
                        <li onclick="selectSuggestion('Contact')">Contact</li>
                        <li onclick="selectSuggestion('Other')">Other</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="chatbot-input">
            <input type="text" id="user-input" placeholder="Type your message...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <footer>
        <p>&copy; 2024 Institut Teknologi Del. All rights reserved.</p>
    </footer>

    <script src="assets/js/chatbot.js"></script>
</body>

</html>
