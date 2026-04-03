// Book Content Database
const bookContent = {
    chapters: [
        {
            id: 1,
            title: "Membangun Mindset Guru Quantum",
            icon: "fa-brain",
            desc: "Pola pikir yang memadukan kearifan lokal dengan inovasi global untuk menciptakan keajaiban di kelas.",
            topics: ["Growth Mindset", "Adaptasi Teknologi", "Refleksi Diri", "Lifelong Learning"],
            content: `
                <h2>BAB 1: Membangun Mindset Guru Quantum</h2>
                <p>Mindset Guru Quantum adalah pola pikir yang memadukan kearifan lokal dengan inovasi global. Seperti partikel quantum yang bisa berada di banyak tempat sekaligus, guru quantum juga harus bisa "berada" di banyak peran: sebagai fasilitator, motivator, inovator, dan bahkan entertainer dalam kelas!</p>
                
                <h3>1.1 Apa Itu Mindset Guru Quantum?</h3>
                <p>Ciri-ciri guru dengan mindset quantum:</p>
                <ul>
                    <li>Selalu haus akan pengetahuan baru dan tidak malu belajar dari siapa pun.</li>
                    <li>Melihat tantangan sebagai peluang untuk berkembang, bukan beban.</li>
                    <li>Tidak takut mencoba metode baru dan keluar dari zona nyaman.</li>
                    <li>Memperlakukan setiap murid sebagai individu unik dengan potensi luar biasa.</li>
                    <li>Mampu beradaptasi dengan teknologi dan kebutuhan generasi digital.</li>
                </ul>

                <h3>1.2 Mengapa Mindset Itu Penting?</h3>
                <p>Penelitian dari Stanford University oleh Carol Dweck menunjukkan bahwa orang dengan "growth mindset" lebih berhasil dalam hidup. Sebagai guru, menerapkan growth mindset menularkan semangat belajar kepada murid-murid kita!</p>

                <h3>1.3 Langkah Membangun Mindset Quantum</h3>
                <ul>
                    <li><strong>Refleksi Diri:</strong> Luangkan waktu 10 menit setiap hari untuk merenung.</li>
                    <li><strong>Belajar Terus-Menerus:</strong> Ikuti minimal satu webinar atau baca satu buku setiap bulan.</li>
                    <li><strong>Jaringan Guru Inspiratif:</strong> Bergabung dengan komunitas guru yang positif.</li>
                    <li><strong>Eksperimen:</strong> Cobalah satu metode baru setiap minggu.</li>
                </ul>
            `,
            quickQuestions: [
                "Apa perbedaan fixed mindset dan growth mindset?",
                "Bagaimana cara mengubah mindset menjadi quantum?",
                "Tips menghadapi tantangan sebagai guru"
            ]
        },
        {
            id: 2,
            title: "Deep Teaching - Dari Hati ke Hati",
            icon: "fa-heart",
            desc: "Pendekatan mengajar yang menekankan pemahaman mendalam, koneksi emosional, dan pengalaman bermakna.",
            topics: ["Empati", "Storytelling", "Socratic Questioning", "Jigsaw Method"],
            content: `
                <h2>BAB 2: Deep Teaching - Mengajar dari Hati ke Hati</h2>
                <p>Deep Teaching adalah pendekatan yang menekankan pada pemahaman mendalam dan koneksi emosional. Ini bukan sekadar transfer materi, tapi transformasi jiwa.</p>

                <h3>2.1 Empati: Kunci Utama</h3>
                <p>Empati adalah fondasi. Sebelum mengajar, kita harus memahami perspektif murid: apa yang mereka rasakan, apa yang mereka butuhkan, dan apa yang mereka takutkan.</p>

                <h3>2.2 Storytelling: Seni Bercerita</h3>
                <p>Manusia belajar melalui cerita. Guru yang pandai bercerita akan jauh lebih efektif dalam menyampaikan konsep yang sulit.</p>

                <h3>2.3 Socratic Questioning</h3>
                <p>Teknik bertanya yang memicu pemikiran kritis. Hindari pertanyaan "Ya/Tidak". Gunakan pertanyaan yang menggali "Mengapa" dan "Bagaimana".</p>
            `,
            quickQuestions: [
                "Apa perbedaan Deep Teaching dan mengajar biasa?",
                "Latihan empati yang bisa dilakukan hari ini?",
                "Contoh Socratic Questioning di kelas"
            ]
        },
        {
            id: 3,
            title: "Deep Learning - Belajar Lebih Dalam",
            icon: "fa-graduation-cap",
            desc: "Strategi agar murid tidak hanya menghafal, tapi benar-benar memahami dan menguasai materi.",
            topics: ["Problem-Based Learning", "Inquiry-Based", "Metakognisi", "Surface vs Deep"],
            content: `
                <h2>BAB 3: Deep Learning - Membuat Siswa Belajar Lebih Dalam</h2>
                <p>Deep Learning adalah proses di mana murid aktif mengkonstruksi pemahaman mereka sendiri.</p>

                <h3>3.1 Surface vs Deep Learning</h3>
                <p>Surface learning berfokus pada hafalan untuk ujian. Deep learning berfokus pada pemahaman untuk aplikasi nyata.</p>

                <h3>3.2 Metakognisi</h3>
                <p>Mengajarkan murid untuk "berpikir tentang cara mereka berpikir". Ini membantu mereka menjadi pembelajar mandiri seumur hidup.</p>

                <h3>3.3 Strategi PBL & Inquiry</h3>
                <p>Berikan masalah nyata yang menantang. Biarkan mereka berkolaborasi dan mencari solusi sendiri dengan bimbingan guru.</p>
            `,
            quickQuestions: [
                "Cara mengubah surface learning menjadi deep learning?",
                "Apa itu metakognisi?",
                "Contoh Problem-Based Learning"
            ]
        },
        {
            id: 4,
            title: "STEM Education - Generasi Masa Depan",
            icon: "fa-flask",
            desc: "Integrasi Science, Technology, Engineering, Mathematics dalam konteks nyata.",
            topics: ["Integrated Learning", "Design Thinking", "Hands-On", "Real Problems"],
            content: `
                <h2>BAB 4: STEM Education - Mempersiapkan Generasi Masa Depan</h2>
                <p>STEM bukan sekadar mata pelajaran, tapi sebuah pendekatan untuk memecahkan masalah menggunakan integrasi berbagai disiplin ilmu.</p>

                <h3>4.1 Design Thinking dalam STEM</h3>
                <p>Proses berulang: Empathy → Define → Ideate → Prototype → Test. Ini melatih kreativitas dan ketangguhan siswa.</p>

                <h3>4.2 STEM untuk Non-Sains</h3>
                <p>STEM bisa diterapkan di Bahasa Indonesia atau IPS melalui analisis data sosial, pembuatan media digital, atau perencanaan proyek komunitas.</p>
            `,
            quickQuestions: [
                "STEM di pelajaran non-sains?",
                "Langkah design thinking untuk sekolah",
                "Contoh proyek STEM sederhana"
            ]
        },
        {
            id: 5,
            title: "Teknologi dalam Pembelajaran",
            icon: "fa-laptop-code",
            desc: "Panduan menggunakan LMS, aplikasi interaktif, dan alat kolaboratif modern.",
            topics: ["LMS", "Canva", "Gamifikasi", "Collaborative Tools"],
            content: `
                <h2>BAB 5: Teknologi dalam Pembelajaran Modern</h2>
                <p>Teknologi adalah alat (tools), bukan pengganti guru. Kuncinya adalah bagaimana teknologi meningkatkan interaksi, bukan menjauhkannya.</p>

                <h3>5.1 LMS: Google Classroom & Moodle</h3>
                <p>Gunakan LMS untuk manajemen materi yang rapi dan umpan balik yang terstruktur.</p>

                <h3>5.2 Visual & Interaktif: Canva & Genially</h3>
                <p>Visual yang menarik meningkatkan retensi informasi hingga 65%.</p>

                <h3>5.3 Gamifikasi: Quizizz & Kahoot</h3>
                <p>Belajar sambil bermain meningkatkan dopamin dan motivasi intrinsik siswa.</p>
            `,
            quickQuestions: [
                "LMS gratis terbaik untuk guru?",
                "Tips membuat presentasi Canva yang menarik",
                "Cara mencegah distraksi gadget di kelas"
            ]
        },
        {
            id: 6,
            title: "VR & AR dalam Pendidikan",
            icon: "fa-vr-cardboard",
            desc: "Membawa dunia luar ke dalam kelas melalui pengalaman imersif Virtual dan Augmented Reality.",
            topics: ["Immersive Learning", "Virtual Field Trips", "3D Visualization", "Low-Cost VR"],
            content: `
                <h2>BAB 6: Virtual Reality (VR) & Augmented Reality (AR)</h2>
                <p>VR membawa murid ke tempat yang tidak bisa mereka kunjungi (seperti luar angkasa atau dalam sel tubuh), sementara AR menambahkan lapisan informasi ke dunia nyata.</p>

                <h3>6.1 Virtual Field Trips</h3>
                <p>Mengunjungi Museum Louvre atau Mars tanpa meninggalkan bangku kelas. Sangat efektif untuk pelajaran Sejarah dan Sains.</p>

                <h3>6.2 Low-Cost VR Solutions</h3>
                <p>Gunakan Google Cardboard atau headset terjangkau lainnya dengan smartphone. Banyak aplikasi gratis tersedia di store.</p>
            `,
            quickQuestions: [
                "Aplikasi VR gratis untuk pendidikan?",
                "Cara membuat konten AR sederhana",
                "Manfaat VR untuk memori jangka panjang"
            ]
        },
        {
            id: 7,
            title: "AI untuk Efisiensi Guru",
            icon: "fa-robot",
            desc: "Menggunakan Artificial Intelligence untuk membuat RPP, materi, dan evaluasi dalam hitungan detik.",
            topics: ["ChatGPT for Teachers", "Gamma App", "AI Grading", "Prompt Engineering"],
            content: `
                <h2>BAB 7: Artificial Intelligence (AI) untuk Efisiensi Guru</h2>
                <p>AI bukan musuh, tapi asisten pribadi yang sangat cerdas. Guru bisa menghemat waktu administrasi hingga 30-50% menggunakan AI.</p>

                <h3>7.1 Prompt Engineering untuk Guru</h3>
                <p>Seni memberikan perintah ke AI. Contoh: "Buatlah RPP 1 lembar untuk topik Fotosintesis kelas 5 dengan aktivitas STEM."</p>

                <h3>7.2 Gamma & Canva Magic</h3>
                <p>Membuat slide presentasi dan modul ajar secara otomatis berbasis teks.</p>
            `,
            quickQuestions: [
                "Cara buat RPP pakai ChatGPT?",
                "AI untuk koreksi otomatis",
                "Etika penggunaan AI di sekolah"
            ]
        },
        {
            id: 8,
            title: "Differentiated Instruction",
            icon: "fa-layer-group",
            desc: "Strategi memberikan pembelajaran yang sesuai dengan kebutuhan dan gaya belajar setiap murid.",
            topics: ["Learning Styles", "Inclusive Class", "Personalized Path", "Bloom Taxonomy"],
            content: `
                <h2>BAB 8: Differentiated Instruction (DI)</h2>
                <p>Setiap anak adalah bintang yang bersinar dengan caranya sendiri. DI memastikan tidak ada anak yang tertinggal karena gaya belajarnya berbeda.</p>

                <h3>8.1 Diferensiasi Konten, Proses, & Produk</h3>
                <p>Berikan pilihan materi, metode belajar, dan cara mereka menunjukkan pemahaman (video, tulisan, atau proyek).</p>
            `,
            quickQuestions: [
                "Cara membagi kelompok berdasarkan kemampuan?",
                "Contoh tugas produk yang variatif",
                "Menghadapi kelas dengan kemampuan beragam"
            ]
        },
        {
            id: 9,
            title: "Menjadi Agen Perubahan",
            icon: "fa-rocket",
            desc: "Puncak perjalanan: Membangun komunitas dan menginspirasi ekosistem pendidikan di sekitar Anda.",
            topics: ["Community of Practice", "Educational Leadership", "Networking", "Sustainability"],
            content: `
                <h2>BAB 9: Menjadi Agen Perubahan</h2>
                <p>Anda sudah memiliki alatnya. Sekarang saatnya bergerak. Menjadi guru quantum berarti menjadi obor yang menerangi jalan bagi orang lain.</p>

                <h3>9.1 Membangun Komunitas Belajar</h3>
                <p>Jangan bergerak sendiri. Ajak rekan sejawat, berbagi praktik baik, dan ciptakan budaya inovasi di sekolah Anda.</p>
            `,
            quickQuestions: [
                "Bagaimana memulai komunitas guru?",
                "Tips berbagi praktik baik di sosmed",
                "Menghadapi resistensi perubahan di sekolah"
            ]
        }
    ]
};

// UI Related Functions
function renderChapters() {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) return;
    
    grid.innerHTML = bookContent.chapters.map(ch => `
        <div class="chapter-card" onclick="openChapter(${ch.id})">
            <div class="chapter-number">${ch.id}</div>
            <i class="fas ${ch.icon}" style="font-size: 2rem; color: var(--stem-orange); margin-bottom: 1.5rem; display: block;"></i>
            <h3 class="chapter-title">${ch.title}</h3>
            <p class="chapter-desc">${ch.desc}</p>
            <div class="chapter-topics">
                ${ch.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
            </div>
            <div class="chapter-arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
}

function openChapter(id) {
    const chapter = bookContent.chapters.find(c => c.id === id);
    if (!chapter) return;

    const modal = document.getElementById('chapterModal');
    const content = document.getElementById('chapterContent');
    const quickQs = document.getElementById('quickQuestions');

    content.innerHTML = chapter.content;
    quickQs.innerHTML = chapter.quickQuestions.map(q => `
        <button class="quick-ask-btn" onclick="askAI('${q}')">
            <i class="fas fa-question-circle"></i> ${q}
        </button>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('chapterModal').classList.remove('active');
    document.body.style.overflow = 'auto'// AI Assistant Logic (Calling Backend API)
const API_URL = "http://localhost:5000/api";

function askAI(query) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    document.getElementById('ai-assistant').scrollIntoView({ behavior: 'smooth' });
    addMessage(query, 'user');
    const typingId = addTypingIndicator();

    // Call Backend
    fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(data => {
        removeTypingIndicator(typingId);
        let finalHtml = `<strong>Perspektif Buku:</strong><br>${data.book}`;
        if (data.lit) {
            finalHtml += `<div class="message-divider"></div><strong>Rujukan Literatur Luar:</strong><br>${data.lit}`;
        }
        addMessage(finalHtml, 'ai', data.hasLit);
    })
    .catch(err => {
        removeTypingIndicator(typingId);
        addMessage("Maaf, server sedang offline. Silakan coba lagi nanti.", 'ai');
        console.error("Fetch error:", err);
    });
}

function addMessage(text, type, hasLit = false) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = `
        <div class="message-bubble">
            ${text}
            <div class="message-source">
                <i class="fas fa-book"></i> Sumber: Neo Quantum QMT.AI API
            </div>
            ${hasLit ? `
            <div class="message-source message-source-lit">
                <i class="fas fa-graduation-cap"></i> Referensi Literatur Eksternal
            </div>` : ''}
        </div>
    `;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const id = 'typing-' + Date.now();
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.id = id;
    div.className = 'message ai';
    div.innerHTML = `
        <div class="message-bubble">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    if (input.value.trim()) {
        askAI(input.value);
        input.value = '';
    }
}

function handleKeyPress(e) {
    if (e.key === 'Enter') sendMessage();
}

// Tool Handlers
function openTool(type) {
    let title = "";
    let content = "";
    const modal = document.getElementById('chapterModal');
    const chapterContent = document.getElementById('chapterContent');
    const quickQuestions = document.getElementById('quickQuestions');

    quickQuestions.innerHTML = ""; // Clear sidebar questions

    switch(type) {
        case 'stem':
            title = "STEM Project Generator";
            content = `
                <div class="tool-form">
                    <p>Masukkan topik pelajaran untuk membuat rancangan proyek STEM otomatis.</p>
                    <div style="margin: 1.5rem 0;">
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Mata Pelajaran:</label>
                        <input type="text" id="stemSubject" placeholder="Contoh: IPA, Fisika, Biologi..." style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">
                        
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Topik / Materi:</label>
                        <input type="text" id="stemTopic" placeholder="Contoh: Energi Terbarukan, Ekosistem..." style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px;">
                    </div>
                    <button class="btn-generate" onclick="generateSTEM()">
                        <i class="fas fa-magic"></i> Generate Proyek STEM
                    </button>
                    <div id="toolResult"></div>
                </div>
            `;
            break;
        case 'planner':
            title = "Deep Teaching Planner";
            content = `
                <div class="tool-form">
                    <p>Buat draf RPP yang menyentuh hati dan memicu pemikiran kritis.</p>
                    <div style="margin: 1.5rem 0;">
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Materi Pelajaran:</label>
                        <input type="text" id="planTopic" placeholder="Contoh: Persamaan Linear, Puisi..." style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">
                        
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Target Kelas:</label>
                        <select id="planGrade" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px;">
                            <option value="SD">Sekolah Dasar (SD)</option>
                            <option value="SMP">Sekolah Menengah Pertama (SMP)</option>
                            <option value="SMA">Sekolah Menengah Atas (SMA)</option>
                        </select>
                    </div>
                    <button class="btn-generate" onclick="generatePlanner()">
                        <i class="fas fa-feather-alt"></i> Buat Rencana Pembelajaran
                    </button>
                    <div id="toolResult"></div>
                </div>
            `;
            break;
        case 'checklist':
            title = "Quantum Guru Self-Assessment";
            const items = [
                "Saya selalu berefleksi setelah selesai mengajar.",
                "Saya terbuka terhadap teknologi baru di kelas.",
                "Saya mengenal hobi dan minat sebagian besar murid saya.",
                "Saya sering menggunakan cerita/narasi untuk memulai materi.",
                "Saya memberikan pilihan cara belajar kepada murid saya.",
                "Saya mendorong murid untuk bertanya 'Mengapa' bukan sekadar menghafal.",
                "Saya merasa nyaman saat murid berkolaborasi secara aktif.",
                "Saya mencari solusi kreatif saat fasilitas sekolah terbatas.",
                "Saya terus belajar hal baru setiap bulannya.",
                "Saya percaya setiap murid memiliki potensi jenius."
            ];
            content = `
                <div class="tool-form">
                    <p>Ukur kesiapan Anda menjadi Guru Quantum dengan menjawab jujur:</p>
                    <div id="checklistForm" style="margin: 1.5rem 0;">
                        ${items.map((item, i) => `
                            <div class="checklist-item">
                                <input type="checkbox" id="check-${i}">
                                <label for="check-${i}">${item}</label>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn-generate" onclick="calculateAssessment()">
                        <i class="fas fa-poll"></i> Lihat Hasil Evaluasi
                    </button>
                    <div id="toolResult"></div>
                </div>
            `;
            break;
    }

    chapterContent.innerHTML = `<h2>${title}</h2><div style="margin-top:2rem;">${content}</div>`;
    modal.classList.add('active');
}

// Systematic Generators (Calling Backend API)
function generateSTEM() {
    const subject = document.getElementById('stemSubject').value;
    const topic = document.getElementById('stemTopic').value;
    const resultDiv = document.getElementById('toolResult');

    fetch(`${API_URL}/tools/stem`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, topic })
    })
    .then(res => res.json())
    .then(data => {
        resultDiv.innerHTML = `
            <div class="tool-result-container">
                <div class="result-header">
                    <h3>Rancangan Proyek STEM: ${data.topic}</h3>
                    <button onclick="window.print()" style="background:none; border:none; color:var(--text-light); cursor:pointer;"><i class="fas fa-print"></i> Cetak</button>
                </div>
                <table class="stem-table">
                    <tr>
                        <td class="stem-pillar">Science</td>
                        <td>${data.pillars.science}</td>
                    </tr>
                    <tr>
                        <td class="stem-pillar">Technology</td>
                        <td>${data.pillars.technology}</td>
                    </tr>
                    <tr>
                        <td class="stem-pillar">Engineering</td>
                        <td>${data.pillars.engineering}</td>
                    </tr>
                    <tr>
                        <td class="stem-pillar">Mathematics</td>
                        <td>${data.pillars.mathematics}</td>
                    </tr>
                </table>
            </div>
        `;
    });
}

function generatePlanner() {
    const topic = document.getElementById('planTopic').value;
    const grade = document.getElementById('planGrade').value;
    const resultDiv = document.getElementById('toolResult');

    fetch(`${API_URL}/tools/planner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, grade })
    })
    .then(res => res.json())
    .then(data => {
        resultDiv.innerHTML = `
            <div class="tool-result-container">
                <div class="result-header">
                    <h3>Deep Teaching Plan: ${data.topic} (${data.grade})</h3>
                </div>
                <h4>1. The Hook (Storytelling/Koneksi)</h4>
                <div class="planner-hook">"${data.hook}"</div>
                <h4>2. Socratic Questions</h4>
                <ul style="margin-left:1.5rem; margin-bottom:1rem;">
                    ${data.questions.map(q => `<li>${q}</li>`).join('')}
                </ul>
            </div>
        `;
    });
}

function calculateAssessment() {
    let score = 0;
    for(let i=0; i<10; i++) {
        if(document.getElementById(`check-${i}`).checked) score++;
    }

    const resultDiv = document.getElementById('toolResult');
    let level = score >= 8 ? "Quantum Expert" : (score >= 5 ? "Quantum Practitioner" : "Quantum Novice");
    let colorClass = score >= 8 ? "score-high" : (score >= 5 ? "score-med" : "score-low");

    resultDiv.innerHTML = `
        <div class="tool-result-container" style="text-align:center;">
            <div class="score-badge ${colorClass}">${score} / 10</div>
            <h3>Level Anda: ${level}</h3>
            <div style="background:white; padding:1rem; border-radius:10px; text-align:left; margin-top:1rem;">
                <strong>Rekomendasi:</strong>
                <p>Silakan gunakan AI Assistant untuk konsultasi RPP berdasarkan level Anda.</p>
            </div>
        </div>
    `;
}

// Initialize
window.onload = () => {
    renderChapters();
};
