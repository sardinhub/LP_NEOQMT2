// Book Content Database
const bookContent = {
    chapters: [
        {
            id: 1,
            title: "Membangun Mindset Guru Quantum",
            icon: "fa-brain",
            desc: "Pola pikir yang memadukan kearifan lokal dengan inovasi global untuk menciptakan keajaiban di kelas.",
            topics: ["Growth Mindset,", " Adaptasi Teknologi,", " Refleksi Diri,", " Lifelong Learning"],
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
            topics: ["Empati,", " Storytelling,", " Socratic Questioning,", " Jigsaw Method"],
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
            topics: ["Problem-Based Learning,", " Inquiry-Based,", " Metakognisi,", " Surface Learning vs Deep Learning"],
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
            topics: ["Integrated Learning,", " Design Thinking,", " Hands-On,", " Real Problems"],
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
            topics: ["LMS,", " Canva,", " Gamifikasi,", " Collaborative Tools"],
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
            topics: ["Immersive Learning,", " Virtual Field Trips,", " 3D Visualization,", " Low-Cost VR"],
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
            topics: ["ChatGPT for Teachers,", " Gamma App,", " AI Grading,", " Prompt Engineering"],
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
            topics: ["Learning Styles,", " Inclusive Class,", " Personalized Path,", " Bloom Taxonomy"],
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
            topics: ["Community of Practice,", " Educational Leadership,", " Networking,", " Sustainability"],
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
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

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
    quickQs.innerHTML = chapter.quickQuestions.map((q, i) => `
        <button class="quick-ask-btn" onclick="askAI('${q}')">
            <span class="quick-ask-num">${i + 1}</span>
            <span class="quick-ask-text">${q}</span>
        </button>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('chapterModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// AI Assistant Logic (Calling Backend API)
const API_URL = "/api";

function askAI(query) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    document.getElementById('ai-assistant').scrollIntoView({ behavior: 'smooth' });
    addMessage(query, 'user');
    const typingId = addTypingIndicator();

    // Call Backend (Gemini AI or Keyword Fallback)
    fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    })
        .then(res => res.json())
        .then(data => {
            removeTypingIndicator(typingId);

            if (data.answer) {
                // Render markdown-like formatting
                const formattedAnswer = renderMarkdown(data.answer);
                const sourceLabel = data.source === 'gemini' ? 'QuantumGuide AI (Gemini)' : 'Knowledge Base';
                const sourceIcon = data.source === 'gemini' ? 'fa-sparkles' : 'fa-book';
                const sourceClass = data.source === 'gemini' ? 'ai-source-gemini' : 'ai-source-local';

                addAIMessage(formattedAnswer, sourceLabel, sourceIcon, sourceClass);
            } else {
                addMessage("Maaf, terjadi kesalahan. Silakan coba lagi.", 'ai');
            }
        })
        .catch(err => {
            removeTypingIndicator(typingId);
            addMessage("Maaf, server sedang offline. Silakan coba lagi nanti. 🔌", 'ai');
            console.error("Fetch error:", err);
        });
}

// Simple Markdown renderer for AI responses
function renderMarkdown(text) {
    return text
        // Bold: **text**
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic: *text*
        .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
        // Bullet lists: - item or * item
        .replace(/^[\-\*]\s+(.+)$/gm, '<li>$1</li>')
        // Wrap consecutive <li> in <ul>
        .replace(/((?:<li>.*<\/li>\s*)+)/g, '<ul class="ai-list">$1</ul>')
        // Numbered lists: 1. item
        .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
        // Headings: ### text
        .replace(/^###\s+(.+)$/gm, '<h4 class="ai-heading">$1</h4>')
        // Line breaks: double newline to paragraph
        .replace(/\n\n/g, '</p><p>')
        // Single line break
        .replace(/\n/g, '<br>')
        // Wrap in paragraph
        .replace(/^(.+)$/, '<p>$1</p>')
        // Clean empty paragraphs
        .replace(/<p><\/p>/g, '')
        .replace(/<p><br><\/p>/g, '');
}

function addMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = `<div class="message-bubble">${text}</div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addAIMessage(htmlContent, sourceLabel, sourceIcon, sourceClass) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'message ai';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    // Content container for typing effect
    const contentDiv = document.createElement('div');
    contentDiv.className = 'ai-response-content';
    contentDiv.innerHTML = htmlContent;

    // Source badge
    const sourceBadge = document.createElement('div');
    sourceBadge.className = `message-source ${sourceClass}`;
    sourceBadge.innerHTML = `<i class="fas ${sourceIcon}"></i> Powered by ${sourceLabel}`;

    bubble.appendChild(contentDiv);
    bubble.appendChild(sourceBadge);
    div.appendChild(bubble);

    // Initially hidden for animation
    div.style.opacity = '0';
    div.style.transform = 'translateY(10px)';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Animate in
    requestAnimationFrame(() => {
        div.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        div.style.opacity = '1';
        div.style.transform = 'translateY(0)';
    });
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
                <div class="typing-text">QuantumGuide AI sedang berpikir</div>
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
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

    switch (type) {
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
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Mata Pelajaran:</label>
                        <input type="text" id="planSubject" placeholder="Contoh: Matematika, Bahasa Indonesia..." style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">
                        
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Topik Pembelajaran:</label>
                        <input type="text" id="planTopic" placeholder="Contoh: Persamaan Linear, Menulis Puisi..." style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">
                        
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Target Kelas:</label>
                        <select id="planGrade" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1.5rem;">
                            <option value="SD">Sekolah Dasar (SD)</option>
                            <option value="SMP">Sekolah Menengah Pertama (SMP)</option>
                            <option value="SMA">Sekolah Menengah Atas (SMA)</option>
                        </select>

                        <label style="display:block; margin-bottom:0.8rem; font-weight:600;">Profil Lulusan (Pilih yang dituju):</label>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Keimanan dan Ketakwaan kepada Tuhan YME" data-color="blue" checked> Keimanan dan Ketakwaan kepada Tuhan YME</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kewargaan (Citizenship)" data-color="green" checked> Kewargaan (Citizenship)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Penalaran Kritis (Critical Thinking)" data-color="orange" checked> Penalaran Kritis (Critical Thinking)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kreativitas (Creativity)" data-color="purple" checked> Kreativitas (Creativity)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kolaborasi (Collaboration)" data-color="blue"> Kolaborasi (Collaboration)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kemandirian (Self-Regulation)" data-color="green"> Kemandirian (Self-Regulation)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kesehatan (Wellbeing)" data-color="orange"> Kesehatan (Wellbeing)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Komunikasi (Communication)" data-color="purple"> Komunikasi (Communication)</label>
                        </div>
                    </div>
                    <button class="btn-generate" onclick="generatePlanner()" style="margin-top:1rem;">
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
        case 'orderBook':
            title = "Pemesanan Buku Neo Quantum";
            content = `
                <div class="tool-form">
                    <p>Silakan isi detail pemesanan Anda di bawah ini:</p>
                    <div style="margin: 1.5rem 0;">
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Nama Lengkap:</label>
                        <input type="text" id="orderName" placeholder="Contoh: Budi Santoso" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">
                        
                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Nomor Telepon (WhatsApp):</label>
                        <input type="text" id="orderPhone" placeholder="Contoh: 08123456789" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">

                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Alamat E-Mail:</label>
                        <input type="email" id="orderEmail" placeholder="Contoh: budi@email.com" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:1rem;">

                        <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Pilihan Pembayaran:</label>
                        <select id="orderPayment" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:10px;">
                            <option value="Transfer Bank BCA">Transfer Bank BCA</option>
                            <option value="Transfer Bank Mandiri">Transfer Bank Mandiri</option>
                            <option value="Transfer Bank BNI">Transfer Bank BNI</option>
                            <option value="Transfer Bank BRI">Transfer Bank BRI</option>
                            <option value="GoPay">GoPay</option>
                            <option value="OVO">OVO</option>
                            <option value="ShopeePay">ShopeePay</option>
                        </select>
                    </div>
                    <button class="btn-generate" onclick="processOrder()" style="margin-top:1rem;">
                        <i class="fas fa-check-circle"></i> Proses dan Verifikasi
                    </button>
                    <div id="toolResult" style="margin-top:1.5rem;"></div>
                </div>
            `;
            break;
    }

    chapterContent.innerHTML = `<h2>${title}</h2><div style="margin-top:2rem;">${content}</div>`;
    modal.classList.add('active');
}

// Systematic Generators (Calling Backend API)
function generateSTEM() {
    const subject = document.getElementById('stemSubject').value || 'Mata Pelajaran';
    const topic = document.getElementById('stemTopic').value || 'Topik / Proyek';
    const resultDiv = document.getElementById('toolResult');

    resultDiv.innerHTML = `<div style="text-align:center; padding: 2rem;"><i class="fas fa-spinner fa-spin" style="font-size:2rem; color:var(--stem-orange);"></i><p style="margin-top:1rem;">Menganalisis Proyek STEM Quantum...</p></div>`;

    fetch(`${API_URL}/tools/stem`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, topic })
    })
        .then(res => res.json())
        .then(data => {
            resultDiv.innerHTML = `
            <div class="rpp-container">
                <div class="rpp-watermark">DRAFT</div>
                
                <div class="rpp-header" style="background: linear-gradient(135deg, var(--stem-orange) 0%, #f6993f 100%);">
                    <div class="rpp-logo-area">
                        <i class="fas fa-flask rpp-logo-icon"></i>
                    </div>
                    <div class="rpp-title-area">
                        <h2>RENCANA PROYEK STEM (MENDALAM)</h2>
                        <p>Topik: <strong>${data.topic}</strong> | Bidang: <strong>${data.subject}</strong></p>
                        <p>Neo Quantum Miracle Teaching - STEM Generator</p>
                    </div>
                    <div style="display:flex; gap:0.5rem;">
                        <button onclick="window.print()" class="rpp-print-btn">
                            <i class="fas fa-print"></i> Cetak
                        </button>
                        <button onclick="downloadRPPAsPDF('Draft_Proyek_STEM_${data.topic.replace(/\s+/g, '_')}')" class="rpp-print-btn" style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);">
                            <i class="fas fa-file-pdf"></i> PDF
                        </button>
                    </div>
                </div>

                <!-- 1. Komponen STEM -->
                <div class="rpp-section-title">1. KOMPONEN STEM (4 PILAR)</div>
                <table class="rpp-table">
                    <tr><td class="rpp-label" style="color:var(--stem-orange)">Science</td><td>${data.pillars.science}</td></tr>
                    <tr><td class="rpp-label" style="color:var(--stem-orange)">Technology</td><td>${data.pillars.technology}</td></tr>
                    <tr><td class="rpp-label" style="color:var(--stem-orange)">Engineering</td><td>${data.pillars.engineering}</td></tr>
                    <tr><td class="rpp-label" style="color:var(--stem-orange)">Mathematics</td><td>${data.pillars.mathematics}</td></tr>
                </table>

                <!-- 2. Tujuan & Media -->
                <div class="rpp-section-title">2. TUJUAN PEMBELAJARAN & MEDIA</div>
                <table class="rpp-table">
                    <tr>
                        <td class="rpp-label">Tujuan (Objectives)</td>
                        <td>
                            <ul style="padding-left:1.2rem; margin:0;">
                                ${data.objectives.map(obj => `<li>${obj}</li>`).join('')}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="rpp-label">Media & Bahan</td>
                        <td>
                            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                                ${data.materials.map(mat => `<span class="rpp-badge orange" style="font-size:0.75rem;">${mat}</span>`).join('')}
                            </div>
                        </td>
                    </tr>
                </table>

                <!-- 3. Rencana Pertemuan -->
                <div class="rpp-section-title">3. RENCANA PERTEMUAN (FLOW PEMBELAJARAN)</div>
                <table class="rpp-table">
                    <thead>
                        <tr>
                            <th width="15%">Sesi</th>
                            <th>Aktivitas Utama Proyek</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.meetings.map(m => `
                            <tr>
                                <td style="text-align:center;"><span class="rpp-badge blue">Sesi ${m.session}</span></td>
                                <td>${m.activity}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <!-- 4. Asesmen & Rubrik -->
                <div class="rpp-section-title">4. ASESMEN & RUBRIK PENILAIAN</div>
                <div style="padding:1.5rem; background:white; border-bottom:1px solid #e2e8f0;">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
                        <div style="background:#f8fafc; padding:1rem; border-radius:10px; border-left:4px solid var(--stem-orange);">
                            <h4 style="margin:0 0 0.5rem 0; font-size:0.9rem; color:var(--quantum-blue);">Asesmen Formatif</h4>
                            <p style="margin:0; font-size:0.85rem; color:var(--text-light);">${data.assessments.formative}</p>
                        </div>
                        <div style="background:#f8fafc; padding:1rem; border-radius:10px; border-left:4px solid var(--quantum-blue);">
                            <h4 style="margin:0 0 0.5rem 0; font-size:0.9rem; color:var(--quantum-blue);">Asesmen Sumatif</h4>
                            <p style="margin:0; font-size:0.85rem; color:var(--text-light);">${data.assessments.summative}</p>
                        </div>
                    </div>
                    
                    <h4 style="margin-bottom:1rem; color:var(--quantum-blue); border-bottom:1px solid #eee; padding-bottom:0.5rem;">Rubrik Penilaian Proyek</h4>
                    <table class="rpp-table" style="border:1px solid #eee;">
                        <thead>
                            <tr style="background:#f1f5f9;">
                                <th style="color:var(--text-dark); background:#f1f5f9; width:25%;">Kriteria</th>
                                <th style="color:var(--text-dark); background:#f1f5f9; width:15%;">Bobot</th>
                                <th style="color:var(--text-dark); background:#f1f5f9;">Deskripsi Penilaian</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.assessments.rubric.map(r => `
                                <tr>
                                    <td style="font-weight:600;">${r.criteria}</td>
                                    <td style="text-align:center;"><span class="rpp-badge purple">${r.weight}</span></td>
                                    <td style="font-size:0.8rem;">${r.desc}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="rpp-footer" style="background:#ed8936;">
                    <p><i class="fas fa-atom"></i> Dihasilkan oleh <strong>Neo Quantum Miracle Teaching — STEM Generator</strong></p>
                </div>
            </div>
            `;
        });
}


function generatePlanner() {
    const subject = document.getElementById('planSubject').value || 'Mata Pelajaran';
    const topic = document.getElementById('planTopic').value || 'Topik Pembelajaran';
    const grade = document.getElementById('planGrade').value;

    const checkboxes = document.querySelectorAll('.plan-profil:checked');
    let profilHTML = '';
    checkboxes.forEach(cb => {
        profilHTML += `<span class="rpp-badge ${cb.dataset.color}" style="margin-bottom:0.3rem; margin-right:0.3rem; display:inline-block;">${cb.value}</span>`;
    });
    if (!profilHTML) profilHTML = '<em>Belum ada profil yang dipilih</em>';

    const gradeMap = {
        'SD': { label: 'Sekolah Dasar (SD)', fase: 'Fase A/B/C', bloom: 'Mengingat, Memahami, Menerapkan' },
        'SMP': { label: 'Sekolah Menengah Pertama (SMP)', fase: 'Fase D', bloom: 'Memahami, Menerapkan, Menganalisis' },
        'SMA': { label: 'Sekolah Menengah Atas (SMA)', fase: 'Fase E/F', bloom: 'Menganalisis, Mengevaluasi, Mencipta' }
    };
    const gradeInfo = gradeMap[grade];
    const resultDiv = document.getElementById('toolResult');

    resultDiv.innerHTML = `
    <div class="rpp-container">

        <!-- RPP Watermark -->
        <div class="rpp-watermark">DRAFT</div>

        <!-- Header RPP -->
        <div class="rpp-header">
            <div class="rpp-logo-area">
                <i class="fas fa-atom rpp-logo-icon"></i>
            </div>
            <div class="rpp-title-area">
                <h2>MODUL AJAR / DRAFT RPP</h2>
                <p>Berbasis <strong>Standar Kurikulum Pembelajaran Mendalam 2025</strong></p>
                <p>Neo Quantum Miracle Teaching</p>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button onclick="window.print()" class="rpp-print-btn">
                    <i class="fas fa-print"></i> Cetak
                </button>
                <button onclick="downloadRPPAsPDF('Draft_RPP_Quantum_${topic.replace(/\s+/g, '_')}')" class="rpp-print-btn" id="btnDownloadPDF" style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);">
                    <i class="fas fa-file-pdf"></i> PDF
                </button>
            </div>
        </div>

        <!-- BLOK 1: IDENTIFIKASI (KONTEKS) -->
        <div class="rpp-section-title">1. IDENTIFIKASI (KONTEKS)</div>
        <table class="rpp-table">
            <tr><td class="rpp-label">Identifikasi Peserta Didik</td><td>Menjabarkan kesiapan kognitif, minat, motivasi, dan gaya belajar murid. Membangun suasana <em>Berkesadaran</em> dan kesiapan mental belajar.</td></tr>
            <tr><td class="rpp-label">Karakteristik Materi Pelajaran</td><td>Mata Pelajaran: <strong>${subject}</strong> | Topik: <strong>${topic}</strong>. Membutuhkan penalaran, eksplorasi konseptual mendalam, dan relevansi langsung dengan pemecahan masalah (problem-solving) pada realitas kehidupan sehari-hari tingkat ${gradeInfo.label}.</td></tr>
            <tr><td class="rpp-label">Dimensi Profil Lulusan</td><td>
                ${profilHTML}
            </td></tr>
        </table>

        <!-- BLOK 2: DESAIN PEMBELAJARAN -->
        <div class="rpp-section-title">2. DESAIN PEMBELAJARAN (PERENCANAAN)</div>
        <table class="rpp-table">
            <tr><td class="rpp-label" width="22%">Capaian Pembelajaran (CP) & Tujuan Pembelajaran (TP)</td><td>Peserta didik mampu memahami secara mendalam, mengevaluasi, dan menemukan penyelesaian kontekstual terkait <strong>${topic}</strong> sesuai target ${gradeInfo.fase}. Fokus pada pemahaman mendalam, bukan sekadar ketuntasan materi.</td></tr>
            <tr><td class="rpp-label">Topik Pembelajaran</td><td><strong>${topic}</strong> (Didesain lebih faktual dan relevan di dunia nyata, kontekstual).</td></tr>
            <tr><td class="rpp-label">Lintas Disiplin Ilmu</td><td>Materi sangat terkait dengan kemampuan Komunikasi, Literasi Digital, dan Kesadaran Sosial-Emosional.</td></tr>
            <tr><td class="rpp-label">Praktik Pedagogis</td><td>Project-Based Learning (PjBL) atau Inquiry Based Learning.</td></tr>
            <tr><td class="rpp-label">Lingkungan & Kemitraan</td><td>Pemanfaatan ruang fisik/kelas, komunitas sekolah, atau narasumber virtual/digital.</td></tr>
            <tr><td class="rpp-label">Pemanfaatan Teknologi</td><td>Penggunaan media digital, alat kolaborasi online, atau pemanfaatan AI yang mendukung proses belajar mendalam.</td></tr>
        </table>

        <!-- BLOK 3: PENGALAMAN BELAJAR -->
        <div class="rpp-section-title">3. PENGALAMAN BELAJAR (LANGKAH-LANGKAH 3M - Prinsip BBM)</div>
        <table class="rpp-table">
            <thead><tr><th width="18%">Fase / Prinsip BBM</th><th>Aktivitas Pembelajaran Integratif</th><th width="18%">Tahap 3M</th></tr></thead>
            <tbody>
                <tr class="rpp-phase-row">
                    <td><span class="rpp-phase-badge opening">AWAL</span><br><br><small><strong>Berkesadaran</strong> dan <strong>Menggembirakan</strong></small></td>
                    <td>
                        <strong>Apersepsi dan Motivasi:</strong><br>
                        Guru mengkondisikan siswa agar fokus dan membangun koneksi emosional. Membuka topik <strong>${topic}</strong> menggunakan fenomena mengejutkan atau cerita pemantik yang menggugah nalar.
                    </td>
                    <td><span class="rpp-badge green" style="width: 100%; box-sizing: border-box;">Persiapan Mental</span></td>
                </tr>
                <tr>
                    <td><span class="rpp-phase-badge main">INTI</span><br><br><small>Sangat <strong>Bermakna</strong>: membangun kualitas pemahaman</small></td>
                    <td>
                        <strong>1. Memahami (Konstruksi Pengetahuan)</strong><br>
                        Penyelidikan mendalam melalui literasi multi-sumber, dialog socratic, dan diskusi interaktif terkait ${topic}.<br><br>
                        
                        <strong>2. Mengaplikasi (Konteks Nyata)</strong><br>
                        Siswa secara langsung menerapkan konsep ${topic} ke dalam aksi nyata: simulasi, membuahkan proyek mini, atau pemecahan kasus secara riil secara tim/kelompok.<br><br>
                        
                        <strong>3. Merefleksi (Evaluasi Diri)</strong><br>
                        Siswa menyadari proses belajarnya: apa hambatan yang mereka temui, bagaimana cara mengatasinya, dan mencatat jurnal pemahaman.
                    </td>
                    <td>
                        <span class="rpp-badge blue" style="margin-bottom:0.8rem; width: 100%; box-sizing: border-box;">1. Memahami</span>
                        <span class="rpp-badge orange" style="margin-bottom:0.8rem; width: 100%; box-sizing: border-box;">2. Mengaplikasi</span>
                        <span class="rpp-badge purple" style="width: 100%; box-sizing: border-box;">3. Merefleksi</span>
                    </td>
                </tr>
                <tr class="rpp-phase-row">
                    <td><span class="rpp-phase-badge closing">PENUTUP</span></td>
                    <td>
                        <strong>Umpan Balik Konstruktif:</strong><br>
                        Guru dan sesama teman memberikan umpan balik, meneguhkan pemahaman, dan apresiasi. Menjaga semangat bahwa belajar itu bermakna dan memantik rasa ingin tahu berkelanjutan.
                    </td>
                    <td><span class="rpp-badge green" style="width: 100%; box-sizing: border-box;">Penguatan</span></td>
                </tr>
            </tbody>
        </table>

        <!-- BLOK 4: ASESMEN -->
        <div class="rpp-section-title">4. ASESMEN (PENILAIAN PEMAHAMAN MENDALAM)</div>
        <table class="rpp-table">
            <thead><tr><th width="25%">Jenis Asesmen</th><th>Fokus Asesmen & Instrumen (Berbasis Kualitas Pemahaman)</th></tr></thead>
            <tbody>
                <tr>
                    <td><span class="rpp-badge blue" style="width: 100%; box-sizing: border-box;">Asesmen Awal</span><br><br><small>(Diagnostic Assessment)</small></td>
                    <td>Mengecek asumsi awal dan pengetahuan prasyarat terkait ${topic} menggunakan Kuis Interaktif atau Pertanyaan Pemantik.</td>
                </tr>
                <tr>
                    <td><span class="rpp-badge green" style="width: 100%; box-sizing: border-box;">Asesmen Proses</span><br><br><small>(Formatif - Assessment for Learning)</small></td>
                    <td>Observasi kemampuan penalaran kritis selama proses <em>'Mengaplikasi'</em>. Penilaian umpan balik sesama teman dan jurnal ketangguhan mental saat menghadapi kesulitan.</td>
                </tr>
                <tr>
                    <td><span class="rpp-badge orange" style="width: 100%; box-sizing: border-box;">Asesmen Akhir</span><br><br><small>(Sumatif - Assessment of Learning)</small></td>
                    <td>Evaluasi tidak lagi menggunakan ujian hafalan pilihan ganda, melainkan menilai kedalaman gagasan lewat <strong>Portofolio, Hasil Proyek, atau Presentasi Argumentatif</strong> atas solusi dari problematika ${topic}.</td>
                </tr>
            </tbody>
        </table>

        <div class="rpp-footer">
            <p><i class="fas fa-atom"></i> Dihasilkan oleh <strong>Neo Quantum Miracle Teaching — Deep Teaching Planner</strong> | Standar Pembelajaran Mendalam 2025</p>
        </div>
    </div>
    `;
}

// Function to download RPP as PDF using html2pdf
function downloadRPPAsPDF(customFilename) {
    const element = document.querySelector('.rpp-container');
    if (!element) return;

    // Show loading indicator on buttons
    const btns = document.querySelectorAll('.rpp-print-btn');
    btns.forEach(b => b.style.opacity = '0.5');

    // PDF Configuration
    const opt = {
        margin: [0.4, 0.4, 0.4, 0.4],
        filename: (customFilename || 'Draft_RPP_NeoQuantum') + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            letterRendering: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'], before: '.rpp-section-title' }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // Restore buttons
        btns.forEach(b => b.style.opacity = '1');
    });
}


function calculateAssessment() {
    let score = 0;
    for (let i = 0; i < 10; i++) {
        if (document.getElementById(`check-${i}`).checked) score++;
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

function processOrder() {
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const email = document.getElementById('orderEmail').value;
    const payment = document.getElementById('orderPayment').value;
    const resultDiv = document.getElementById('toolResult');

    if (!name || !phone || !email) {
        resultDiv.innerHTML = `<div style="color: #ef4444; padding: 1rem; background: #fee2e2; border-radius: 10px; border: 1px solid #f87171;"><i class="fas fa-exclamation-circle"></i> Harap lengkapi semua data (Nama, Nomor Telepon, dan Email).</div>`;
        return;
    }

    resultDiv.innerHTML = `<div style="color: #64748b; padding: 1rem; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; text-align: center;"><i class="fas fa-spinner fa-spin"></i> Sistem sedang memproses dan menghubungi WhatsApp & Email Anda...</div>`;

    fetch(`${API_URL}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, payment })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            let msgWA = data.whatsapp === 'success' ? 'Terkirim via WhatsApp' : (data.whatsapp === 'skipped_no_token' ? 'Disimulasikan (API Fonnte belum dipasang)' : 'Gagal mengirim WA');
            let msgEmail = data.email === 'success' ? 'Terkirim via Email' : (data.email === 'skipped_no_credentials' ? 'Disimulasikan (API Email belum disetting)' : 'Gagal mengirim Email');

            resultDiv.innerHTML = `
                <div style="padding: 1.8rem; background: #ecfdf5; border-radius: 10px; border: 1px solid #a7f3d0; color: #065f46; line-height: 1.6;">
                    <h3 style="margin-top: 0; color: #047857; margin-bottom: 1rem;"><i class="fas fa-check-circle"></i> Pesan Otomatis Terkirim!</h3>
                    <p style="margin-bottom: 0.5rem;">Terima Kasih, <strong>${name}</strong>. Pesan sambutan dan instruksi pemesanan telah dikirimkan secara otomatis ke WhatsApp Anda.</p>
                    <p style="margin-bottom: 1rem;">Sesuai pilihan metode pembayaran Anda (<strong>${payment}</strong>) silakan melakukan pembayaran senilai <strong>Rp 95.900</strong>.</p>
                    <div style="background: rgba(255,255,255,0.7); padding: 1rem; border-radius: 8px; border-left: 4px solid #34d399;">
                        <p style="font-size: 0.9rem; margin: 0; color: #065f46; margin-bottom:0.5rem;"><i class="fas fa-paper-plane" style="margin-right:0.5rem"></i><strong>Log Pengiriman Server Sentral:</strong></p>
                        <ul style="font-size:0.85rem; margin:0; padding-left:1.5rem;">
                            <li><strong>WhatsApp (${phone}):</strong> ${msgWA}</li>
                            <li><strong>Email (${email}):</strong> ${msgEmail}</li>
                        </ul>
                    </div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `<div style="color: #ef4444; padding: 1rem; background: #fee2e2; border-radius: 10px; border: 1px solid #f87171;"><i class="fas fa-times-circle"></i> Terjadi kesalahan: ${data.error || 'Gagal mengirim instruksi.'}</div>`;
        }
    })
    .catch(err => {
        resultDiv.innerHTML = `<div style="color: #ef4444; padding: 1rem; background: #fee2e2; border-radius: 10px; border: 1px solid #f87171;"><i class="fas fa-wifi"></i> Gagal terhubung ke Server. Pastikan server berjalan.</div>`;
    });
}

// Gallery Database & Logic
let galleryData = JSON.parse(localStorage.getItem('neoGalleryData')) || [
    {
        id: 1,
        type: 'image',
        category: 'Pelatihan Guru',
        title: 'Quantum Teacher Training',
        desc: 'Sesi mendalam tentang integrasi AI dalam kurikulum modern.',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
        large: true
    },
    {
        id: 2,
        type: 'image',
        category: 'STEM Project',
        title: 'Eksperimen Energi Terbarukan',
        src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        type: 'image',
        category: 'Teknologi VR',
        title: 'Immersive Field Trip',
        src: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000&auto=format&fit=crop'
    }
];

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    galleryData.forEach(item => {
        const div = document.createElement('div');
        div.className = `gallery-item ${item.large ? 'large' : ''} ${item.type === 'video' ? 'video-card' : ''}`;
        
        if (item.type === 'video') {
            div.onclick = () => alert('Video kegiatan segera hadir!');
            div.innerHTML = `
                <div class="video-placeholder">
                    <i class="fas fa-play-circle"></i>
                    <span>Lihat Video Kegiatan</span>
                </div>
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <span class="gallery-category">Video</span>
                        <h4>${item.title}</h4>
                    </div>
                </div>
            `;
        } else {
            div.innerHTML = `
                <img src="${item.src}" alt="${item.title}">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <span class="gallery-category">${item.category}</span>
                        <h4>${item.title}</h4>
                        ${item.desc ? `<p>${item.desc}</p>` : ''}
                    </div>
                </div>
            `;
        }
        grid.appendChild(div);
    });
}

function openGalleryManager() {
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('galleryPasswordInput').value = '';
    document.getElementById('passwordModal').classList.add('active');
    setTimeout(() => {
        document.getElementById('galleryPasswordInput').focus();
    }, 100);
}

function closePasswordModal() {
    document.getElementById('passwordModal').classList.remove('active');
}

function verifyGalleryPassword() {
    const password = document.getElementById('galleryPasswordInput').value;
    if (password === "Rahasiaku123") {
        closePasswordModal();
        openGalleryManagerActual();
    } else {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('galleryPasswordInput').focus();
    }
}

function openGalleryManagerActual() {

    const modal = document.getElementById('chapterModal');
    const content = document.getElementById('chapterContent');
    const sidebar = document.getElementById('quickQuestions');
    
    modal.classList.add('active');
    sidebar.innerHTML = `
        <h4 style="color:var(--quantum-blue); margin-bottom:1rem;"><i class="fas fa-tools"></i> Menu Admin</h4>
        <button class="quick-ask-btn" onclick="exportGalleryCode()">
            <div class="quick-ask-num"><i class="fas fa-code"></i></div>
            <div class="quick-ask-text"><strong>Ekspor Kode </strong>(Untuk Simpan Permanen)</div>
        </button>
        <button class="quick-ask-btn" onclick="resetGallery()">
            <div class="quick-ask-num"><i class="fas fa-undo"></i></div>
            <div class="quick-ask-text">Reset ke Awal</div>
        </button>
    `;

    let galleryListHTML = galleryData.map((item, index) => `
        <div style="display:flex; align-items:center; gap:1rem; padding:1rem; background:#f8fafc; border-radius:10px; margin-bottom:1rem; border:1px solid #e2e8f0;">
            <img src="${item.src || ''}" style="width:60px; height:60px; object-fit:cover; border-radius:5px; background:#ddd;">
            <div style="flex:1;">
                <h4 style="margin:0; font-size:0.9rem;">${item.title}</h4>
                <span style="font-size:0.75rem; color:#64748b;">${item.category}</span>
            </div>
            <button onclick="removeGalleryItem(${index})" style="background:#fee2e2; color:#ef4444; border:none; padding:0.5rem; border-radius:5px; cursor:pointer;">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    content.innerHTML = `
        <h2 style="color:var(--quantum-blue); margin-bottom:1.5rem;"><i class="fas fa-images"></i> Kelola Galeri Kegiatan</h2>
        <div style="background:#f1f5f9; padding:1.5rem; border-radius:15px; margin-bottom:2rem;">
            <h4 style="margin-top:0; margin-bottom:1rem;">Tambah Foto/Video Baru</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
                <input type="text" id="newGalTitle" placeholder="Judul Foto" style="padding:0.8rem; border-radius:8px; border:1px solid #cbd5e1;">
                <input type="text" id="newGalCat" placeholder="Kategori (mis: STEM Project)" style="padding:0.8rem; border-radius:8px; border:1px solid #cbd5e1;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display:block; font-size:0.85rem; margin-bottom:0.5rem; color:#64748b;">URL Gambar atau Unggah File:</label>
                <div style="display:flex; gap:0.5rem;">
                    <input type="text" id="newGalSrc" placeholder="Alamat URL Gambar (https://...) atau klik Pilih File" style="flex:1; padding:0.8rem; border-radius:8px; border:1px solid #cbd5e1;">
                    <button onclick="document.getElementById('fileInput').click()" style="background:#f1f5f9; border:1px solid #cbd5e1; padding:0 1rem; border-radius:8px; cursor:pointer;" title="Pilih File dari PC">
                        <i class="fas fa-folder-open"></i> Pilih File
                    </button>
                    <input type="file" id="fileInput" accept="image/*" style="display:none;" onchange="handleFileSelect(event)">
                </div>
            </div>
            <div style="display:flex; gap:1rem;">
                <select id="newGalType" style="padding:0.8rem; border-radius:8px; border:1px solid #cbd5e1;">
                    <option value="image">Gambar</option>
                    <option value="video">Video</option>
                </select>
                <button onclick="addGalleryItem()" style="flex:1; background:var(--stem-orange); color:white; border:none; padding:0.8rem; border-radius:8px; font-weight:700; cursor:pointer;">
                    <i class="fas fa-plus"></i> Tambah ke Galeri
                </button>
            </div>
        </div>
        <h3>Daftar Item Saat Ini</h3>
        <div id="galleryAdminList">${galleryListHTML}</div>
    `;
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('newGalSrc').value = e.target.result;
        alert("File berhasil dimuat! Klik 'Tambah ke Galeri' untuk menyimpan.");
    };
    reader.readAsDataURL(file);
}

function addGalleryItem() {
    const title = document.getElementById('newGalTitle').value;
    const category = document.getElementById('newGalCat').value;
    const src = document.getElementById('newGalSrc').value;
    const type = document.getElementById('newGalType').value;

    if (!title || !src) {
        alert("Judul dan Foto wajib diisi!");
        return;
    }

    const newItem = {
        id: Date.now(),
        type: type,
        category: category || 'Kegiatan',
        title: title,
        src: src,
        large: false
    };

    galleryData.push(newItem);
    saveGallery();
    openGalleryManagerActual(); // Refresh UI without password prompt
    renderGallery(); // Update Page
}

function removeGalleryItem(index) {
    if (confirm("Hapus foto ini dari galeri?")) {
        galleryData.splice(index, 1);
        saveGallery();
        openGalleryManagerActual(); // Refresh UI without password prompt
        renderGallery();
    }
}

function saveGallery() {
    localStorage.setItem('neoGalleryData', JSON.stringify(galleryData));
}

function resetGallery() {
    if (confirm("Reset galeri ke pengaturan awal? Semua foto tambahan akan hilang.")) {
        localStorage.removeItem('neoGalleryData');
        location.reload();
    }
}

function exportGalleryCode() {
    const code = `const galleryData = ${JSON.stringify(galleryData, null, 4)};`;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Kode galleryData telah disalin! \n\nSilakan tempelkan kode ini di bagian atas script.js Anda untuk menyimpan perubahan secara permanen.");
}

// Initialize
window.onload = () => {
    renderChapters();
    renderGallery();
};
