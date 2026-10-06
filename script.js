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
                
                let sourceLabel, sourceIcon, sourceClass;
                if (data.source === 'gemini') {
                    sourceLabel = 'QuantumGuide AI (Gemini)';
                    sourceIcon = 'fa-sparkles';
                    sourceClass = 'ai-source-gemini';
                } else if (data.source === 'hybrid') {
                    sourceLabel = '📖 Buku + 🧠 AI (' + (data.model || 'Hybrid') + ')';
                    sourceIcon = 'fa-wand-magic-sparkles';
                    sourceClass = 'ai-source-hybrid';
                } else if (data.source === 'book') {
                    sourceLabel = data.model || 'Konten Buku';
                    sourceIcon = 'fa-book-open';
                    sourceClass = 'ai-source-book';
                } else {
                    sourceLabel = 'Knowledge Base';
                    sourceIcon = 'fa-book';
                    sourceClass = 'ai-source-local';
                }

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
            title = "STEM Project Generator Terintegrasi";
            content = `
                <div class="tool-form">
                    <div style="background: linear-gradient(135deg, rgba(237, 137, 54, 0.1), rgba(66, 153, 225, 0.1)); padding: 1rem 1.25rem; border-radius: 12px; border-left: 4px solid var(--stem-orange); margin-bottom: 1.5rem;">
                        <h4 style="margin: 0 0 0.4rem 0; color: #1e293b; font-size: 1rem;"><i class="fas fa-atom" style="color:var(--stem-orange)"></i> Project Generator STEM (PBL + PjBL + EDP)</h4>
                        <p style="margin:0; font-size:0.85rem; color:#64748b; line-height:1.5;">Rancang Modul STEM lengkap terintegrasi 4 Pilar STEM, Capaian Pembelajaran (CP), Narrative Hook, LKPD EDP, Rubrik Assesment Autentik, Diferensiasi, & Safety Notes.</p>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Mata Pelajaran:</label>
                            <input type="text" id="stemSubject" list="stemSubjectList" placeholder="Fisika / IPAS / Biologi / Informatika..." style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem;">
                            <datalist id="stemSubjectList">
                                <option value="IPAS (Sains & Sosial)">
                                <option value="Fisika Terapan">
                                <option value="Biologi & Lingkungan">
                                <option value="Kimia & Material">
                                <option value="Matematika & Pemodelan">
                                <option value="Informatika & Robotika">
                                <option value="Rekayasa & Teknologi">
                            </datalist>
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Jenjang / Target Kelas:</label>
                            <select id="stemGrade" style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem; background:white;">
                                <option value="SD Kelas 4 - 6">Sekolah Dasar (SD Kelas 4-6)</option>
                                <option value="SMP Kelas 7 - 9" selected>Sekolah Menengah Pertama (SMP Kelas 7-9)</option>
                                <option value="SMA / SMK Kelas 10 - 12">Sekolah Menengah Atas / Kejuruan (SMA/SMK)</option>
                            </select>
                        </div>
                    </div>

                    <div style="margin-bottom: 1rem;">
                        <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Topik / Materi Pembelajaran:</label>
                        <input type="text" id="stemTopic" placeholder="Contoh: Energi Terbarukan, Bioplastik Daur Ulang, Filter Air Bersih..." style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem;">
                    </div>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Capaian Pembelajaran (CP) / Target Kompetensi (Opsional):</label>
                        <textarea id="stemCP" rows="2" placeholder="Kosongkan untuk generate otomatis, atau tuliskan CP Kurikulum sekolah Anda..." style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.88rem; font-family:inherit; resize:vertical;"></textarea>
                    </div>

                    <button class="btn-generate" onclick="generateSTEM()" style="background: linear-gradient(135deg, var(--stem-orange), #f59e0b); padding: 0.9rem; font-size: 1rem;">
                        <i class="fas fa-magic"></i> Generate Modul STEM & Tampilkan Preview
                    </button>
                    <div id="toolResult"></div>
                </div>
            `;
            break;
        case 'planner':
            title = "Deep Teaching Modul Ajar Generator";
            content = `
                <div class="tool-form">
                    <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.1)); padding: 1rem 1.25rem; border-radius: 12px; border-left: 4px solid var(--quantum-blue); margin-bottom: 1.5rem;">
                        <h4 style="margin: 0 0 0.4rem 0; color: #1e293b; font-size: 1rem;"><i class="fas fa-feather-alt" style="color:var(--quantum-blue)"></i> Generator Modul Ajar Deep Teaching & Deep Learning</h4>
                        <p style="margin:0; font-size:0.85rem; color:#64748b; line-height:1.5;">Hasilkan Modul Ajar LENGKAP berstandar Kurikulum Merdeka yang merangkum: <strong>1. Informasi Umum</strong>, <strong>2. Komponen Inti & Sintaks</strong>, dan <strong>3. Komponen Lampiran (LKPD, Rubrik, Bacaan, Glosarium & Pustaka)</strong>.</p>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Nama Penyusun / Guru:</label>
                            <input type="text" id="planName" placeholder="Contoh: Sardin Damis, S.Pd." style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem;">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Nama Institusi / Sekolah:</label>
                            <input type="text" id="planSchool" placeholder="Contoh: SMP Quantum Miracle" style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem;">
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Mata Pelajaran:</label>
                            <input type="text" id="planSubject" placeholder="Contoh: Matematika, IPA, Bahasa Indonesia..." style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem;">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Jenjang, Kelas & Fase:</label>
                            <select id="planGrade" style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem; background:white;">
                                <option value="SD Kelas 4 - Fase B">Sekolah Dasar (SD Kelas 4 - Fase B)</option>
                                <option value="SMP Kelas 8 - Fase D" selected>Sekolah Menengah Pertama (SMP Kelas 8 - Fase D)</option>
                                <option value="SMA Kelas 11 - Fase F">Sekolah Menengah Atas (SMA Kelas 11 - Fase F)</option>
                                <option value="SMK Kelas 10 - Fase E">Sekolah Menengah Kejuruan (SMK Kelas 10 - Fase E)</option>
                            </select>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Topik / Materi Pembelajaran:</label>
                            <input type="text" id="planTopic" placeholder="Contoh: Persamaan Linear, Ekosistem, Menulis Puisi..." style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem;">
                        </div>
                        <div>
                            <label style="display:block; margin-bottom:0.4rem; font-weight:600; font-size:0.9rem;">Model Pembelajaran Utama:</label>
                            <select id="planModel" style="width:100%; padding:0.85rem; border:1px solid #cbd5e1; border-radius:10px; font-size:0.9rem; background:white;">
                                <option value="Deep Teaching & Deep Learning (Integrasi Socratic & Experiential)" selected>Deep Teaching & Deep Learning (Socratic & Experiential)</option>
                                <option value="Problem-Based Learning (PBL) Berbasis Deep Learning">Problem-Based Learning (PBL)</option>
                                <option value="Project-Based Learning (PjBL) Berbasis Deep Learning">Project-Based Learning (PjBL)</option>
                                <option value="Inquiry-Based Learning (Penemuan Konseptual)">Inquiry & Discovery Learning</option>
                            </select>
                        </div>
                    </div>

                    <div style="margin-bottom: 1.25rem;">
                        <label style="display:block; margin-bottom:0.6rem; font-weight:600; font-size:0.9rem;">Profil Pelajar / Dimensi Karakter (Pilih yang Dituju):</label>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; background:#f8fafc; padding:1rem; border-radius:10px; border:1px solid #e2e8f0;">
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Penalaran Kritis (Critical Thinking)" checked> Penalaran Kritis (Critical Thinking)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kreativitas (Creativity)" checked> Kreativitas (Creativity)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kolaborasi (Collaboration)" checked> Kolaborasi (Gotong Royong)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kemandirian (Self-Regulation)" checked> Kemandirian (Self-Regulation)</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Keimanan dan Ketakwaan kepada Tuhan YME"> Keimanan & Ketakwaan YME</label>
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem;"><input type="checkbox" class="plan-profil" value="Kebinekaan Global (Global Citizenship)"> Kebinekaan Global</label>
                        </div>
                    </div>

                    <button class="btn-generate" onclick="generatePlanner()" style="background: linear-gradient(135deg, var(--quantum-blue), #1d4ed8); padding: 0.9rem; font-size: 1rem;">
                        <i class="fas fa-feather-alt"></i> Buat Modul Ajar Deep Teaching
                    </button>
                    <div id="toolResult"></div>
                </div>
            `;
            break;
        case 'checklist':
            title = "Quantum Guru Self-Assessment";
            content = renderSelfAssessmentHTML();
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
let currentSTEMData = null;

function generateSTEM() {
    const subjectInput = document.getElementById('stemSubject');
    const topicInput = document.getElementById('stemTopic');
    const gradeInput = document.getElementById('stemGrade');
    const cpInput = document.getElementById('stemCP');

    const subject = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'IPAS / Sains Rekayasa';
    const topic = (topicInput && topicInput.value.trim()) ? topicInput.value.trim() : 'Energi Terbarukan & Teknologi Ramah Lingkungan';
    const grade = gradeInput ? gradeInput.value : 'SMP Kelas 7-9';
    const cp = cpInput ? cpInput.value.trim() : '';
    const resultDiv = document.getElementById('toolResult');

    resultDiv.innerHTML = `
        <div style="text-align:center; padding: 3rem 1rem; background: #f8fafc; border-radius: 12px; margin-top: 1.5rem; border: 1px solid #e2e8f0;">
            <i class="fas fa-atom fa-spin" style="font-size:2.5rem; color:var(--stem-orange);"></i>
            <h4 style="margin-top:1.2rem; color:#1e293b; font-size:1.1rem;">Merancang Modul STEM Terintegrasi (PBL + PjBL)...</h4>
            <p style="color:#64748b; font-size:0.88rem; max-width:480px; margin:0.5rem auto 0 auto;">Menyusun 4 Pilar STEM, Narrative Hook, LKPD EDP, Rubrik Autentik, Diferensiasi & Safety Notes...</p>
        </div>
    `;

    fetch(`${API_URL}/tools/stem`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, topic, grade, cp })
    })
    .then(res => res.json())
    .then(data => {
        currentSTEMData = data;
        renderSTEMPreview(data);
    })
    .catch(err => {
        console.error("STEM Generation Error:", err);
        resultDiv.innerHTML = `<div style="padding:1.5rem; background:#fef2f2; color:#991b1b; border-radius:10px; margin-top:1rem;">Terjadi kesalahan dalam memproses Modul STEM. Silakan coba lagi.</div>`;
    });
}

function switchSTEMTab(tabId) {
    const tabs = document.querySelectorAll('.stem-tab-btn');
    const panes = document.querySelectorAll('.stem-tab-pane');
    
    tabs.forEach(t => t.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));

    const activeTab = document.querySelector(`.stem-tab-btn[onclick*="${tabId}"]`);
    if (activeTab) activeTab.classList.add('active');

    if (tabId === 'tab-full') {
        panes.forEach(p => p.classList.add('active'));
    } else {
        const targetPane = document.getElementById(tabId);
        if (targetPane) targetPane.classList.add('active');
    }
}

function copySTEMToClipboard() {
    if (!currentSTEMData) return;
    const d = currentSTEMData;
    const text = `
=========================================
BLUEPRINT MODUL STEM TERINTEGRASI (PBL + PjBL)
=========================================
Mata Pelajaran : ${d.subject}
Topik Utama    : ${d.topic}
Jenjang / Kelas: ${d.grade}
Alokasi Waktu  : ${d.timeAllocation}
Model Utama    : ${d.modelIntegration}

Capaian Pembelajaran (CP):
${d.cp}

-----------------------------------------
1. INTEGRASI 4 PILAR STEM
-----------------------------------------
- Science     : ${d.pillars.science}
- Technology  : ${d.pillars.technology}
- Engineering : ${d.pillars.engineering}
- Mathematics : ${d.pillars.mathematics}

-----------------------------------------
2. NARRATIVE HOOK & TANTANGAN (PBL)
-----------------------------------------
Judul   : ${d.narrativeHook.title}
Skenario:
${d.narrativeHook.scenario}

Pertanyaan Pemantik:
${d.narrativeHook.drivingQuestions.map((q, i) => `${i+1}. ${q}`).join('\n')}

-----------------------------------------
3. ALUR PEMBELAJARAN (SINTAKS INTEGRASI)
-----------------------------------------
${d.syntaxFlow.map(s => `[Sesi ${s.session}] ${s.phase}\nAktivitas: ${s.activities}`).join('\n\n')}

-----------------------------------------
4. LKPD EDP (ENGINEERING DESIGN PROCESS)
-----------------------------------------
${d.lkpdEdp.steps.map(step => `
[${step.code}] ${step.title}
${step.prompts.map(p => `- ${p}`).join('\n')}
`).join('\n')}

-----------------------------------------
5. RUBRIK ASSESSMENT AUTENTIK
-----------------------------------------
${d.assessments.rubric.map(r => `
Aspek: ${r.criteria} (Bobot ${r.weight})
- Level 1 (Perlu Bimbingan): ${r.levels['1']}
- Level 2 (Cukup): ${r.levels['2']}
- Level 3 (Baik): ${r.levels['3']}
- Level 4 (Sangat Baik): ${r.levels['4']}
`).join('\n')}

-----------------------------------------
6. DIFERENSIASI & SAFETY NOTES (K3)
-----------------------------------------
Diferensiasi Konten : ${d.differentiation.content}
Diferensiasi Proses : ${d.differentiation.process}
Diferensiasi Produk : ${d.differentiation.product}

Catatan Keselamatan Kerja (K3):
${d.safetyNotes.map(n => `- ${n}`).join('\n')}

Dihasilkan oleh Neo Quantum Miracle Teaching — STEM Project Generator.
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
        alert("✅ Seluruh Modul STEM berhasil disalin ke Clipboard!");
    });
}

function printSTEMModule() {
    const activeTabs = Array.from(document.querySelectorAll('.stem-tab-pane.active')).map(p => p.id);
    switchSTEMTab('tab-full');
    
    setTimeout(() => {
        window.print();
        if (activeTabs.length > 0 && activeTabs[0] !== 'tab-full') {
            switchSTEMTab(activeTabs[0]);
        }
    }, 250);
}

function downloadRPPAsPDF(customFilename) {
    const activeTabs = Array.from(document.querySelectorAll('.stem-tab-pane.active')).map(p => p.id);
    switchSTEMTab('tab-full');

    const element = document.querySelector('.rpp-container');
    if (!element) return;

    const btns = document.querySelectorAll('.stem-action-btn, .rpp-print-btn');
    btns.forEach(b => b.style.opacity = '0.5');

    const opt = {
        margin: [0.3, 0.3, 0.3, 0.3],
        filename: (customFilename || 'Draft_Modul_STEM') + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            letterRendering: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy'],
            avoid: ['.lkpd-card', '.stem-pillar-card', '.diff-card', '.safety-box', '.hook-card', 'tr', '.rpp-header', '.rpp-section-title']
        }
    };

    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save().then(() => {
            btns.forEach(b => b.style.opacity = '1');
            if (activeTabs.length > 0 && activeTabs[0] !== 'tab-full') {
                switchSTEMTab(activeTabs[0]);
            }
        }).catch(err => {
            console.error("PDF Download Error:", err);
            btns.forEach(b => b.style.opacity = '1');
            printSTEMModule();
        });
    } else {
        btns.forEach(b => b.style.opacity = '1');
        printSTEMModule();
    }
}

function renderSTEMPreview(data) {
    const resultDiv = document.getElementById('toolResult');
    
    resultDiv.innerHTML = `
        <!-- Action & Navigation Bar -->
        <div class="stem-preview-bar">
            <div class="stem-tabs-nav">
                <button class="stem-tab-btn active" onclick="switchSTEMTab('tab-blueprint')"><i class="fas fa-layer-group"></i> Blueprint STEM</button>
                <button class="stem-tab-btn" onclick="switchSTEMTab('tab-hook')"><i class="fas fa-book-open"></i> Narrative Hook</button>
                <button class="stem-tab-btn" onclick="switchSTEMTab('tab-lkpd')"><i class="fas fa-pen-nib"></i> LKPD EDP</button>
                <button class="stem-tab-btn" onclick="switchSTEMTab('tab-rubric')"><i class="fas fa-clipboard-check"></i> Rubrik Autentik</button>
                <button class="stem-tab-btn" onclick="switchSTEMTab('tab-diff')"><i class="fas fa-shield-alt"></i> Diferensiasi & K3</button>
                <button class="stem-tab-btn" onclick="switchSTEMTab('tab-full')"><i class="fas fa-file-alt"></i> Tampilan Utuh</button>
            </div>
            <div class="stem-actions-group">
                <button onclick="printSTEMModule()" class="stem-action-btn btn-print">
                    <i class="fas fa-print"></i> Cetak Dokumen
                </button>
                <button onclick="downloadRPPAsPDF('Modul_STEM_${data.topic.replace(/\s+/g, '_')}')" class="stem-action-btn btn-pdf">
                    <i class="fas fa-file-pdf"></i> Unduh PDF
                </button>
                <button onclick="copySTEMToClipboard()" class="stem-action-btn btn-copy">
                    <i class="fas fa-copy"></i> Salin Teks
                </button>
            </div>
        </div>

        <div class="rpp-container" style="margin-top:0; border-top-left-radius:0; border-top-right-radius:0;">
            <div class="rpp-watermark">STEM MODUL</div>

            <!-- Tab 1: Blueprint Modul & 4 Pilar STEM -->
            <div id="tab-blueprint" class="stem-tab-pane active">
                <div class="rpp-header" style="background: linear-gradient(135deg, var(--stem-orange) 0%, #d97706 100%);">
                    <div class="rpp-logo-area">
                        <i class="fas fa-atom rpp-logo-icon"></i>
                    </div>
                    <div class="rpp-title-area">
                        <h2>BLUEPRINT MODUL PROYEK STEM</h2>
                        <p>Topik: <strong>${data.topic}</strong> | Jenjang: <strong>${data.grade}</strong> | Mapel: <strong>${data.subject}</strong></p>
                        <p><i class="fas fa-clock"></i> ${data.timeAllocation} | Model: <strong>${data.modelIntegration}</strong></p>
                    </div>
                </div>

                <div class="rpp-section-title">CAPAIAN PEMBELAJARAN (CP) & FOKUS KOMPETENSI</div>
                <div style="padding:1.2rem; background:#f8fafc; border-bottom:1px solid #e2e8f0; font-size:0.92rem; line-height:1.6; color:#334155;">
                    <i class="fas fa-bullseye" style="color:var(--stem-orange); margin-right:0.5rem;"></i> ${data.cp}
                </div>

                <div class="rpp-section-title">INTEGRASI 4 PILAR STEM (SCIENCE, TECHNOLOGY, ENGINEERING, MATHEMATICS)</div>
                <div class="stem-pillars-grid" style="padding: 1rem 1.25rem;">
                    <div class="stem-pillar-card science">
                        <h4><i class="fas fa-flask"></i> 1. Science (Sains)</h4>
                        <p>${data.pillars.science}</p>
                    </div>
                    <div class="stem-pillar-card technology">
                        <h4><i class="fas fa-laptop-code"></i> 2. Technology (Teknologi)</h4>
                        <p>${data.pillars.technology}</p>
                    </div>
                    <div class="stem-pillar-card engineering">
                        <h4><i class="fas fa-cogs"></i> 3. Engineering (Rekayasa)</h4>
                        <p>${data.pillars.engineering}</p>
                    </div>
                    <div class="stem-pillar-card mathematics">
                        <h4><i class="fas fa-calculator"></i> 4. Mathematics (Matematika)</h4>
                        <p>${data.pillars.mathematics}</p>
                    </div>
                </div>

                <div class="rpp-section-title">REKOMENDASI ALAT & MATERIAL PROYEK</div>
                <div style="padding:1.2rem; background:white;">
                    <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
                        ${data.materials.map(m => `<span class="rpp-badge orange" style="font-size:0.8rem;"><i class="fas fa-check-circle"></i> ${m}</span>`).join('')}
                    </div>
                </div>
            </div>

            <!-- Tab 2: Narrative Hook & Sintaks PBL-PjBL -->
            <div id="tab-hook" class="stem-tab-pane">
                <div class="rpp-section-title">NARRATIVE HOOK & TANTANGAN KONTEKSTUAL (PBL STAGE)</div>
                <div style="padding: 1.25rem;">
                    <div class="hook-card">
                        <h3><i class="fas fa-fire"></i> ${data.narrativeHook.title}</h3>
                        <p>${data.narrativeHook.scenario}</p>
                        
                        <div class="driving-q-box">
                            <h4><i class="fas fa-question-circle"></i> Pertanyaan Pemantik (Driving Questions):</h4>
                            <ul>
                                ${data.narrativeHook.drivingQuestions.map(q => `<li>${q}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="rpp-section-title">SINTAKS PEMBELAJARAN INTEGRASI PBL + PjBL + STEM EDP</div>
                <table class="rpp-table">
                    <thead>
                        <tr style="background:#0f172a; color:white;">
                            <th width="12%" style="color:white;">Sesi</th>
                            <th width="28%" style="color:white;">Tahap PBL & EDP</th>
                            <th style="color:white;">Aktivitas Utama Pembelajaran & Proyek</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.syntaxFlow.map(s => `
                            <tr>
                                <td style="text-align:center;"><span class="rpp-badge blue">Sesi ${s.session}</span></td>
                                <td>
                                    <div style="font-weight:700; color:#1e293b; font-size:0.85rem;">${s.pblPhase}</div>
                                    <span class="rpp-badge orange" style="font-size:0.75rem; margin-top:0.3rem;">${s.edpStage}</span>
                                </td>
                                <td style="font-size:0.88rem; line-height:1.6;">${s.activities}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Tab 3: LKPD EDP (Lembar Kerja Peserta Didik) -->
            <div id="tab-lkpd" class="stem-tab-pane">
                <div class="rpp-header" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); margin-bottom:1.5rem;">
                    <div class="rpp-logo-area" style="background:rgba(255,255,255,0.1);">
                        <i class="fas fa-pen-fancy rpp-logo-icon" style="color:#fbbf24;"></i>
                    </div>
                    <div class="rpp-title-area">
                        <h2 style="color:#fbbf24;">${data.lkpdEdp.title}</h2>
                        <p>${data.lkpdEdp.projectTitle} | Kelompok: _______________ | Kelas: ${data.grade}</p>
                    </div>
                </div>

                <div style="padding: 0 0.5rem;">
                    ${data.lkpdEdp.steps.map(step => `
                        <div class="lkpd-card">
                            <div class="lkpd-step-header">
                                <span class="lkpd-step-badge">${step.code}</span>
                                <h4 class="lkpd-step-title">${step.title}</h4>
                            </div>
                            <div style="padding-left:0.5rem;">
                                ${step.prompts.map(p => `
                                    <div style="margin-bottom:0.8rem;">
                                        <div style="font-weight:600; font-size:0.88rem; color:#334155;"><i class="fas fa-caret-right" style="color:var(--stem-orange)"></i> ${p}</div>
                                        <div class="lkpd-box-field">[ Ruang Catatan Siswa / Sketsa Desain / Tabel Pengujian ]</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Tab 4: Rubrik Assessment Autentik -->
            <div id="tab-rubric" class="stem-tab-pane">
                <div class="rpp-section-title">STRATEGI ASESMEN PEMBELAJARAN</div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; padding:1.25rem; background:#f8fafc; border-bottom:1px solid #e2e8f0;">
                    <div style="background:white; padding:1rem; border-radius:10px; border-left:4px solid var(--stem-orange); box-shadow:0 2px 5px rgba(0,0,0,0.03);">
                        <h4 style="margin:0 0 0.4rem 0; font-size:0.9rem; color:#1e293b;"><i class="fas fa-clipboard-list" style="color:var(--stem-orange)"></i> Asesmen Formatif (Proses)</h4>
                        <p style="margin:0; font-size:0.85rem; color:#475569; line-height:1.5;">${data.assessments.formative}</p>
                    </div>
                    <div style="background:white; padding:1rem; border-radius:10px; border-left:4px solid var(--quantum-blue); box-shadow:0 2px 5px rgba(0,0,0,0.03);">
                        <h4 style="margin:0 0 0.4rem 0; font-size:0.9rem; color:#1e293b;"><i class="fas fa-award" style="color:var(--quantum-blue)"></i> Asesmen Sumatif (Produk & Exhibition)</h4>
                        <p style="margin:0; font-size:0.85rem; color:#475569; line-height:1.5;">${data.assessments.summative}</p>
                    </div>
                </div>

                <div class="rpp-section-title">RUBRIK ASSESSMENT AUTENTIK PROYEK STEM (SKALA 1 - 4)</div>
                <div style="padding:1rem;">
                    <table class="rpp-table rubric-table" style="border:1px solid #e2e8f0;">
                        <thead>
                            <tr>
                                <th width="20%">Kriteria & Bobot</th>
                                <th width="20%">Perlu Bimbingan (1)</th>
                                <th width="20%">Cukup (2)</th>
                                <th width="20%">Baik (3)</th>
                                <th width="20%">Sangat Baik (4)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.assessments.rubric.map(r => `
                                <tr>
                                    <td>
                                        <div style="font-weight:700; color:#1e293b; font-size:0.88rem;">${r.criteria}</div>
                                        <span class="rpp-badge purple" style="font-size:0.75rem; margin-top:0.4rem;">Bobot: ${r.weight}</span>
                                    </td>
                                    <td><span class="rubric-score-badge" style="background:#fee2e2; color:#991b1b;">Skor 1</span><br>${r.levels['1']}</td>
                                    <td><span class="rubric-score-badge" style="background:#fef3c7; color:#92400e;">Skor 2</span><br>${r.levels['2']}</td>
                                    <td><span class="rubric-score-badge" style="background:#dbeafe; color:#1e40af;">Skor 3</span><br>${r.levels['3']}</td>
                                    <td><span class="rubric-score-badge" style="background:#dcfce7; color:#166534;">Skor 4</span><br>${r.levels['4']}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Tab 5: Diferensiasi & Safety Notes -->
            <div id="tab-diff" class="stem-tab-pane">
                <div class="rpp-section-title">PANDUAN DIFERENSIASI PEMBELAJARAN</div>
                <div class="diff-grid" style="padding: 1.25rem 1.25rem 0 1.25rem;">
                    <div class="diff-card">
                        <h4><i class="fas fa-book-reader" style="color:var(--quantum-blue);"></i> Diferensiasi Konten</h4>
                        <p>${data.differentiation.content}</p>
                    </div>
                    <div class="diff-card" style="border-top-color:var(--stem-orange);">
                        <h4><i class="fas fa-tasks" style="color:var(--stem-orange);"></i> Diferensiasi Proses</h4>
                        <p>${data.differentiation.process}</p>
                    </div>
                    <div class="diff-card" style="border-top-color:#10b981;">
                        <h4><i class="fas fa-box-open" style="color:#10b981;"></i> Diferensiasi Produk</h4>
                        <p>${data.differentiation.product}</p>
                    </div>
                </div>

                <div class="rpp-section-title">CATATAN KESELAMATAN KERJA (SAFETY NOTES / K3)</div>
                <div style="padding: 0 1.25rem 1.25rem 1.25rem;">
                    <div class="safety-box">
                        <h4><i class="fas fa-exclamation-triangle"></i> Panduan K3 Praktikum & Rekayasa Lab:</h4>
                        <ul>
                            ${data.safetyNotes.map(sn => `<li>${sn}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="rpp-footer" style="background:#0f172a;">
                <p><i class="fas fa-atom" style="color:var(--stem-orange);"></i> Dihasilkan oleh <strong>Neo Quantum Miracle Teaching — STEM Project Generator</strong></p>
            </div>
        </div>
    `;
}


function generatePlanner() {
    const name = document.getElementById('planName')?.value || 'Nama Guru / Penyusun';
    const school = document.getElementById('planSchool')?.value || 'Nama Instansi / Sekolah';
    const subject = document.getElementById('planSubject')?.value || 'Mata Pelajaran';
    const topic = document.getElementById('planTopic')?.value || 'Topik Pembelajaran';
    const grade = document.getElementById('planGrade')?.value || 'SMA';
    const model = document.getElementById('planModel')?.value || 'Problem-Based Learning (PBL)';

    const checkboxes = document.querySelectorAll('.plan-profil:checked');
    const profilList = [];
    checkboxes.forEach(cb => profilList.push(cb.value));

    const resultDiv = document.getElementById('toolResult');
    resultDiv.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #475569;">
            <i class="fas fa-brain fa-spin fa-3x" style="color: #6366f1; margin-bottom: 1rem;"></i>
            <h3 style="color: #1e293b; margin-bottom: 0.5rem;">Memproses Modul Ajar Deep Teaching...</h3>
            <p style="font-size: 0.95rem; color: #64748b; max-width: 500px; margin: 0 auto;">
                Sistem AI sedang merumuskan Informasi Umum, Komponen Inti, LKPD Deep Learning, Rubrik Asesmen Autentik, hingga Glosarium secara komprehensif.
            </p>
        </div>
    `;

    fetch(`${API_URL}/tools/planner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            teacherName: name,
            schoolName: school,
            subject: subject,
            grade: grade,
            topic: topic,
            model: model,
            profil: profilList
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Gagal merespons dari server");
        return res.json();
    })
    .then(data => {
        renderModulAjarPreview(data);
    })
    .catch(err => {
        console.warn("API Error, using client fallback generator:", err);
        const fallbackData = createModulAjarFallbackData({ name, school, subject, grade, topic, model, profilList });
        renderModulAjarPreview(fallbackData);
    });
}

function createModulAjarFallbackData({ name, school, subject, grade, topic, model, profilList }) {
    const profilBadgeHTML = (profilList && profilList.length > 0)
        ? profilList.map(p => `<span class="rpp-badge blue" style="margin-right:4px; display:inline-block;">${p}</span>`).join(' ')
        : `<span class="rpp-badge blue">Bernalar Kritis</span> <span class="rpp-badge orange">Kreatif</span> <span class="rpp-badge green">Gotong Royong</span>`;

    return {
        identitas: {
            penyusun: name || 'Tim Pengembang Kurikulum',
            sekolah: school || 'Sekolah Penggerak Deep Teaching',
            tahun: new Date().getFullYear().toString(),
            jenjangFase: grade === 'SD' ? 'SD / Fase A-C' : (grade === 'SMP' ? 'SMP / Fase D' : 'SMA / Fase E-F'),
            kelas: grade === 'SD' ? 'Kelas 4' : (grade === 'SMP' ? 'Kelas 8' : 'Kelas 10'),
            alokasiWaktu: '3 x 45 Menit (1 Pertemuan)',
            mataPelajaran: subject,
            topik: topic
        },
        kompetensiAwal: `Peserta didik telah memiliki pemahaman mendasar mengenai konsep dasar ${subject} serta memiliki rasa ingin tahu tinggi terhadap penerapan ${topic} dalam kehidupan sehari-hari.`,
        profilPelajarBadgeHTML: profilBadgeHTML,
        saranaPrasarana: [
            'Proyektor / Smart TV & Laptop',
            'Alat & bahan eksperimen/praktikum kontekstual',
            'Lembar Kerja Peserta Didik (LKPD Deep Learning)',
            'Akses internet dan platform media interaktif digital'
        ],
        targetPesertaDidik: 'Peserta Didik Reguler / Tipikal (Heterogen) dengan pendampingan diferensiasi bagi siswa yang memerlukan perancangan remedial.',
        modelPembelajaran: model || 'Problem-Based Learning (PBL) berbasis Deep Teaching',

        tujuanPembelajaran: [
            `Menganalisis dan mengidentifikasi prinsip utama ${topic} secara mendalam melalui penyelidikan fenomena riil.`,
            `Merancang dan mengaplikasikan solusi praktis atas permasalahan kontekstual ${topic} dengan pendekatan kolaboratif.`,
            `Refleksi metakognitif mengenai manfaat pemahaman ${topic} dalam kehidupan sehari-hari dan tanggung jawab sosial.`
        ],
        pemahamanBermakna: `Pemahaman mendalam tentang ${topic} membantu peserta didik menyadari bahwa konsep-konsep ${subject} bukan sekadar teori hafalan, melainkan alat analisis kritis untuk memecahkan masalah nyata dan membuat keputusan bijak dalam kehidupan.`,
        pertanyaanPemantik: [
            `Mengapa konsep ${topic} sangat krusial dalam dinamika kehidupan modern saat ini?`,
            `Apa dampaknya jika kita tidak menerapkan prinsip ${topic} secara cerdas dan berkesadaran?`,
            `Bagaimana kamu dapat memanfaatkan pemahaman ${topic} untuk membantu komunitas atau lingkungan sekitarmu?`
        ],

        kegiatanPembelajaran: {
            pendahuluan: [
                'Guru membuka pelajaran dengan salam hangat, doa bersama, dan melakukan pengondisian kelas berkesadaran (Mindful Check-in).',
                `Guru menyampaikan Apersepsi & Mindful Hook: menampilkan tayangan fenomena mengejutkan terkait ${topic} untuk memantik rasa ingin tahu.`,
                'Guru menjelaskan tujuan pembelajaran, alur kegiatan 3M (Memahami-Mengaplikasi-Merefleksi), dan teknik asesmen yang akan dilakukan.'
            ],
            inti: {
                memahami: [
                    `Siswa membentuk kelompok heterogen dan mengamati studi kasus / fenomena nyata tentang ${topic}.`,
                    'Siswa melakukan penelusuran literasi multi-sumber (buku, media digital, eksperimen mini) untuk mendalami konsep inti.',
                    'Guru memfasilitasi Dialog Socratic untuk menggali penalaran kritis dan meluruskan miskonsepsi.'
                ],
                mengaplikasi: [
                    `Kelompok merancang karya / desain solusi / lembar investigasi EDP atas permasalahan ${topic}.`,
                    'Siswa menguji coba rancangan solusi, mengumpulkan data penunjang, dan mendokumentasikan hasil temuan.',
                    'Setiap kelompok menyajikan hasil aplikasi proyek/solusi dalam pameran karya singkat (Gallery Walk) untuk saling memberi umpan balik.'
                ],
                merefleksi: [
                    'Siswa menyusun jurnal refleksi pribadi: apa yang sudah dipahami, apa kendala yang dihadapi, dan strategi perbaikan.',
                    'Diskusi reflektif kelas mengenai nilai moral dan tanggung jawab yang dipelajari dari proses pemecahan masalah.'
                ]
            },
            penutup: [
                'Guru dan siswa bersama-sama menyimpulkan poin-poin kunci pembelajaran.',
                'Guru memberikan umpan balik apresiatif dan konstruktif terhadap kinerja individual maupun kelompok.',
                'Menyampaikan rencana tindak lanjut (tugas pengayaan / persiapan pertemuan berikutnya) dan ditutup dengan doa.'
            ]
        },

        rencanaAsesmen: {
            diagnostik: 'Kuis singkat prasyarat dan pemetaan awal minat/gaya belajar siswa sebelum memulai kegiatan.',
            formatif: 'Observasi keaktifan diskusi, penilaian antar teman (peer-assessment), lembar kerja 3M, dan unjuk kerja proyek.',
            sumatif: 'Evaluasi berbasis produk autentik / laporan solusi / presentasi argumentatif di akhir modul.'
        },

        pengayaanRemedial: {
            pengayaan: `Bagi peserta didik yang telah mencapai ketuntasan cepat: Diberikan tantangan menganalisis studi kasus tingkat lanjut atau menjadi tutor sebaya dalam riset ${topic}.`,
            remedial: `Bagi peserta didik yang memerlukan bimbingan tambahan: Pendampingan diferensiasi terfokus oleh guru dengan bantuan skema visual dan tutor sebaya.`
        },

        lkpd: {
            judul: `LKPD Deep Learning: Eksplorasi & Solusi Kontekstual ${topic}`,
            petunjuk: [
                'Bacalah setiap instruksi dengan cermat bersama anggota kelompokmu.',
                `Diskusi dan jawablah pertanyaan pemantik terkait fenomena ${topic}.`,
                'Gunakan tabel alur kerja untuk mendokumentasikan data dan hasil rancangan solusi kelompok.'
            ],
            tugasKontekstual: `Lakukan analisis terhadap masalah nyata di lingkungan sekitar yang berkaitan dengan ${topic}. Rumuskan rancangan ide kreatif solusi yang efisien, hemat biaya, dan dapat diterapkan!`,
            tabelKerja: [
                { langkah: '1. Identifikasi Masalah', deskripsi: `Jelaskan apa masalah utama terkait ${topic} yang kalian temukan di lingkungan sekitar.` },
                { langkah: '2. Pengumpulan Data', deskripsi: 'Tuliskan fakta, data pendukung, atau teori prasyarat yang relevan.' },
                { langkah: '3. Rancangan Solusi', deskripsi: 'Gambarkan atau jabarkan skema solusi/karya yang akan dibuat.' },
                { langkah: '4. Evaluasi & Refleksi', deskripsi: 'Apa kelebihan dan kelemahan dari solusi yang kelompok kalian tawarkan?' }
            ],
            pertanyaanReflektif: [
                'Apa hal baru dan berharga yang kamu pelajari dari pengerjaan LKPD ini?',
                'Bagaimana kamu mengatasi perbedaan pendapat di dalam kelompokmu saat merancang solusi?'
            ]
        },

        rubrikAsesmen: [
            { kriteria: 'Penalaran Kritis & Kedalaman Konsep', skala1: 'Menunjukkan pemahaman parsial/banyak miskonsepsi.', skala2: 'Memahami konsep dasar namun belum mampu menghubungkan variabel.', skala3: 'Memahami konsep secara utuh dan mampu menjelaskan alasan penalaran.', skala4: 'Menganalisis konsep secara mendalam, kritis, dan menemukan pola baru.' },
            { kriteria: 'Kreativitas & Desain Solusi', skala1: 'Solusi meniru penuh tanpa variasi.', skala2: 'Solusi standar dengan sedikit modifikasi.', skala3: 'Solusi relatif baru dan aplikatif untuk pemecahan masalah.', skala4: 'Solusi sangat inovatif, orisinal, bernilai tambah tinggi dan hemat daya.' },
            { kriteria: 'Kolaborasi & Gotong Royong', skala1: 'Pasif dan bergantung pada anggota lain.', skala2: 'Terkadang berpartisipasi jika diminta.', skala3: 'Aktif bekerjasama dan menghargai pendapat teman.', skala4: 'Inisiatif tinggi, memfasilitasi diskusi, dan menolong teman yang kesulitan.' },
            { kriteria: 'Komunikasi & Presentasi', skala1: 'Penyampaian membingungkan dan tidak berkesinambungan.', skala2: 'Penyampaian cukup jelas namun kurang percaya diri.', skala3: 'Penyampaian sistematis, komunikatif, dan responsif.', skala4: 'Penyampaian sangat persuasif, runtut, didukung argumen ilmiah yang kuat.' }
        ],

        bahanBacaan: {
            guru: `Referensi pedagogis Deep Teaching dan Kurikulum Merdeka: Panduan pengembangan indikator berpikir tingkat tinggi (HOTS) pada mata pelajaran ${subject} materi ${topic}.`,
            siswa: `Rangkuman materi bergambar, infografis konsep inti ${topic}, serta tautan artikel sains digital/video edukasi penunjang.`
        },

        glosarium: [
            { istilah: 'Deep Teaching', arti: 'Pendekatan pembelajaran berkesadaran yang berfokus pada kedalaman makna dan aplikasi nyata, bukan luas hafalan.' },
            { istilah: 'Apersepsi', arti: 'Pengamatan atau penghayatan tentang segala sesuatu yang menjadi dasar untuk menerima ide-ide baru.' },
            { istilah: 'Mindful Hook', arti: 'Stimulus diawal pembelajaran untuk mengalihkan perhatian siswa agar fokus dan tergerak secara mental.' },
            { istilah: 'Diferensiasi', arti: 'Penyesuaian strategi pembelajaran sesuai tingkat kesiapan, minat, dan profil belajar peserta didik.' }
        ],

        daftarPustaka: [
            'Kemendikbudristek. (2024). Panduan Pembelajaran dan Asesmen Kurikulum Merdeka. Jakarta.',
            `Tim Penulis Utama. (2025). Buku Guru dan Siswa ${subject}: Pembelajaran Mendalam. Jakarta: Pusat Kurikulum dan Perbukuan.`,
            'Neo Quantum Miracle Teaching. (2025). Modul Pelatihan Guru Modern Deep Teaching & Quantum Learning. Bandung.'
        ]
    };
}

function normalizeModulAjarData(raw) {
    if (!raw) raw = {};
    const info = raw.informasiUmum || {};
    const idt = raw.identitas || info.identitas || {};
    const inti = raw.komponenInti || {};
    const lamp = raw.komponenLampiran || {};

    const penyusun = idt.penyusun || idt.teacherName || raw.teacherName || raw.name || 'Tim Guru Deep Teaching';
    const sekolah = idt.sekolah || idt.institusi || raw.schoolName || raw.school || 'Sekolah Penggerak Neo Quantum';
    const tahun = idt.tahun || new Date().getFullYear().toString();
    const jenjangFase = idt.jenjangFase || idt.kelasFase || idt.jenjang || (raw.grade === 'SD' ? 'SD / Fase A-C' : (raw.grade === 'SMP' ? 'SMP / Fase D' : 'SMA / Fase E-F'));
    const kelas = idt.kelas || (raw.grade === 'SD' ? 'Kelas 4' : (raw.grade === 'SMP' ? 'Kelas 8' : 'Kelas 10'));
    const alokasiWaktu = idt.alokasiWaktu || '3 x 45 Menit (1 Pertemuan)';
    const mataPelajaran = idt.mataPelajaran || idt.topikMateri || raw.subject || 'Mata Pelajaran';
    const topik = idt.topik || idt.topikMateri || raw.topic || 'Topik Pembelajaran Kontekstual';

    const kompetensiAwal = raw.kompetensiAwal || info.kompetensiAwal || `Peserta didik telah memiliki pemahaman mendasar mengenai konsep prasyarat ${mataPelajaran} serta memiliki rasa ingin tahu tinggi terhadap penerapan ${topik} dalam kehidupan sehari-hari.`;

    let profil = raw.profilPelajar || info.profilPelajar || raw.profil || ['Bernalar Kritis', 'Kreatif', 'Gotong Royong', 'Mandiri'];
    if (typeof profil === 'string') profil = [profil];

    let sarana = raw.saranaPrasarana || info.saranaPrasarana || [
        'Proyektor / Smart TV & Laptop',
        'Alat & Bahan Eksperimen / Praktikum Kontekstual',
        'Lembar Kerja Peserta Didik (LKPD Deep Learning)',
        'Akses Internet dan Media Pembelajaran Digital Interaktif'
    ];
    if (typeof sarana === 'string') {
        sarana = sarana.split(/,|\n/).map(s => s.trim()).filter(Boolean);
    }

    const targetPesertaDidik = raw.targetPesertaDidik || info.targetPesertaDidik || 'Peserta Didik Reguler / Tipikal (Heterogen, 30 Siswa) dengan pendampingan Scaffolding bagi siswa yang memerlukan bimbingan ekstra dan Pengayaan bagi Fast Learners.';

    const modelPembelajaran = raw.modelPembelajaran || info.modelPembelajaran || raw.model || 'Problem-Based Learning (PBL) berbasis Deep Teaching';

    // KOMPONEN INTI
    let tp = raw.tujuanPembelajaran || inti.tujuanPembelajaran || [
        `Menganalisis dan mengidentifikasi prinsip utama ${topik} secara mendalam melalui penyelidikan fenomena riil.`,
        `Merancang dan mengaplikasikan solusi praktis atas permasalahan kontekstual ${topik} dengan pendekatan kolaboratif.`,
        `Refleksi metakognitif mengenai manfaat pemahaman ${topik} dalam kehidupan sehari-hari dan tanggung jawab sosial.`
    ];
    if (typeof tp === 'string') tp = [tp];

    const pemahamanBermakna = raw.pemahamanBermakna || inti.pemahamanBermakna || `Pemahaman mendalam tentang ${topik} membantu peserta didik menyadari bahwa konsep ${mataPelajaran} bukan sekadar hafalan teori, melainkan instrumen logis untuk memecahkan masalah nyata dan mengambil keputusan bijak dalam kehidupan.`;

    let pemantik = raw.pertanyaanPemantik || inti.pertanyaanPemantik || [
        `Mengapa konsep ${topik} sangat krusial dalam dinamika kehidupan modern saat ini?`,
        `Apa dampaknya jika kita tidak menerapkan prinsip ${topik} secara cerdas dan berkesadaran?`,
        `Bagaimana kamu dapat memanfaatkan pemahaman ${topik} ini untuk membantu komunitas atau lingkungan sekitarmu?`
    ];
    if (typeof pemantik === 'string') pemantik = [pemantik];

    const keg = raw.kegiatanPembelajaran || inti.kegiatanPembelajaran || {};
    let pendahuluan = keg.pendahuluan || [
        'Guru membuka pelajaran dengan salam hangat, doa bersama, dan melakukan pengondisian kelas berkesadaran (Mindful Check-in).',
        `Guru menyampaikan Apersepsi & Mindful Hook: menampilkan tayangan fenomena mengejutkan terkait ${topik} untuk memantik rasa ingin tahu.`,
        'Guru menjelaskan tujuan pembelajaran, alur kegiatan 3M (Memahami-Mengaplikasi-Merefleksi), dan teknik asesmen yang akan dilakukan.'
    ];
    if (typeof pendahuluan === 'string') pendahuluan = [pendahuluan];

    let memahami = (keg.inti && (keg.inti.memahami || (Array.isArray(keg.inti) ? keg.inti.slice(0, 2) : null))) || [
        `Siswa membentuk kelompok heterogen dan mengamati studi kasus / fenomena nyata tentang ${topik}.`,
        'Siswa melakukan penelusuran literasi multi-sumber (buku, media digital, eksperimen mini) untuk mendalami konsep inti.',
        'Guru memfasilitasi Dialog Socratic untuk menggali penalaran kritis dan meluruskan miskonsepsi.'
    ];
    if (typeof memahami === 'string') memahami = [memahami];

    let mengaplikasi = (keg.inti && (keg.inti.mengaplikasi || (Array.isArray(keg.inti) ? keg.inti.slice(2, 4) : null))) || [
        `Kelompok merancang karya / desain solusi / lembar investigasi EDP atas permasalahan ${topik}.`,
        'Siswa menguji coba rancangan solusi, mengumpulkan data penunjang, dan mendokumentasikan hasil temuan.',
        'Setiap kelompok menyajikan hasil aplikasi proyek/solusi dalam pameran karya singkat (Gallery Walk) untuk saling memberi umpan balik.'
    ];
    if (typeof mengaplikasi === 'string') mengaplikasi = [mengaplikasi];

    let merefleksi = (keg.inti && keg.inti.merefleksi) || [
        'Siswa menyusun jurnal refleksi pribadi: apa yang sudah dipahami, apa kendala yang dihadapi, dan strategi perbaikan.',
        'Diskusi reflektif kelas mengenai nilai moral dan tanggung jawab yang dipelajari dari proses pemecahan masalah.'
    ];
    if (typeof merefleksi === 'string') merefleksi = [merefleksi];

    let penutup = keg.penutup || [
        'Guru dan siswa bersama-sama menyimpulkan poin-poin kunci pembelajaran.',
        'Guru memberikan umpan balik apresiatif dan konstruktif terhadap kinerja individual maupun kelompok.',
        'Menyampaikan rencana tindak lanjut (tugas pengayaan / persiapan pertemuan berikutnya) dan ditutup dengan doa.'
    ];
    if (typeof penutup === 'string') penutup = [penutup];

    const asesmen = raw.rencanaAsesmen || inti.rencanaAsesmen || {};
    const diagnostik = asesmen.diagnostik || 'Kuis singkat prasyarat dan pemetaan awal minat/gaya belajar siswa sebelum memulai kegiatan.';
    const formatif = asesmen.formatif || 'Observasi keaktifan diskusi, penilaian antar teman (peer-assessment), lembar kerja 3M, dan unjuk kerja proyek.';
    const sumatif = asesmen.sumatif || 'Evaluasi berbasis produk autentik / laporan solusi / presentasi argumentatif di akhir modul.';

    const pengayaanRemedial = raw.pengayaanRemedial || inti.pengayaanRemedial || {};
    const pengayaan = pengayaanRemedial.pengayaan || `Bagi peserta didik yang telah mencapai ketuntasan cepat: Diberikan tantangan menganalisis studi kasus tingkat lanjut atau menjadi tutor sebaya dalam riset ${topik}.`;
    const remedial = pengayaanRemedial.remedial || `Bagi peserta didik yang memerlukan bimbingan tambahan: Pendampingan diferensiasi terfokus oleh guru dengan bantuan skema visual dan tutor sebaya.`;

    // KOMPONEN LAMPIRAN
    const lkpdRaw = raw.lkpd || lamp.lkpd || {};
    const lkpd = {
        judul: lkpdRaw.judul || lkpdRaw.title || `LKPD Deep Learning: Eksplorasi & Solusi Kontekstual ${topik}`,
        tugasKontekstual: lkpdRaw.tugasKontekstual || lkpdRaw.instructions || `Lakukan analisis terhadap masalah nyata di lingkungan sekitar yang berkaitan dengan ${topik}. Rumuskan rancangan ide kreatif solusi yang efisien, hemat biaya, dan dapat diterapkan!`,
        petunjuk: lkpdRaw.petunjuk || [
            'Bacalah setiap instruksi dengan cermat bersama anggota kelompokmu.',
            `Diskusikan dan jawablah pertanyaan pemantik terkait fenomena ${topik}.`,
            'Gunakan tabel alur kerja untuk mendokumentasikan data dan hasil rancangan solusi kelompok.'
        ],
        tabelKerja: lkpdRaw.tabelKerja || (lkpdRaw.tasks ? lkpdRaw.tasks.map(t => ({ langkah: `${t.step}: ${t.title}`, deskripsi: t.activity })) : [
            { langkah: '1. Identifikasi Masalah', deskripsi: `Jelaskan apa masalah utama terkait ${topik} yang kalian temukan di lingkungan sekitar.` },
            { langkah: '2. Pengumpulan Data', deskripsi: 'Tuliskan fakta, data pendukung, atau teori prasyarat yang relevan.' },
            { langkah: '3. Rancangan Solusi', deskripsi: 'Gambarkan atau jabarkan skema solusi/karya yang akan dibuat.' },
            { langkah: '4. Evaluasi & Refleksi', deskripsi: 'Apa kelebihan dan kelemahan dari solusi yang kelompok kalian tawarkan?' }
        ]),
        pertanyaanReflektif: lkpdRaw.pertanyaanReflektif || [
            'Apa hal baru dan berharga yang kamu pelajari dari pengerjaan LKPD ini?',
            'Bagaimana kamu mengatasi perbedaan pendapat di dalam kelompokmu saat merancang solusi?'
        ]
    };

    const rubrikRaw = raw.rubrikAsesmen || lamp.instrumenRubrik?.rubric || [];
    let rubrikAsesmen = [];
    if (Array.isArray(rubrikRaw) && rubrikRaw.length > 0) {
        rubrikAsesmen = rubrikRaw.map(r => ({
            kriteria: r.kriteria || r.aspect || 'Penalaran Kritis',
            skala1: r.skala1 || (r.levels ? r.levels[1] : 'Perlu Bimbingan'),
            skala2: r.skala2 || (r.levels ? r.levels[2] : 'Cukup'),
            skala3: r.skala3 || (r.levels ? r.levels[3] : 'Baik'),
            skala4: r.skala4 || (r.levels ? r.levels[4] : 'Sangat Baik')
        }));
    } else {
        rubrikAsesmen = [
            { kriteria: 'Penalaran Kritis & Kedalaman Konsep', skala1: 'Menunjukkan pemahaman parsial/banyak miskonsepsi.', skala2: 'Memahami konsep dasar namun belum mampu menghubungkan variabel.', skala3: 'Memahami konsep secara utuh dan mampu menjelaskan alasan penalaran.', skala4: 'Menganalisis konsep secara mendalam, kritis, dan menemukan pola baru.' },
            { kriteria: 'Kreativitas & Desain Solusi', skala1: 'Solusi meniru penuh tanpa variasi.', skala2: 'Solusi standar dengan sedikit modifikasi.', skala3: 'Solusi relatif baru dan aplikatif untuk pemecahan masalah.', skala4: 'Solusi sangat inovatif, orisinal, bernilai tambah tinggi dan hemat daya.' },
            { kriteria: 'Kolaborasi & Gotong Royong', skala1: 'Pasif dan bergantung pada anggota lain.', skala2: 'Terkadang berpartisipasi jika diminta.', skala3: 'Aktif bekerjasama dan menghargai pendapat teman.', skala4: 'Inisiatif tinggi, memfasilitasi diskusi, dan menolong teman yang kesulitan.' },
            { kriteria: 'Komunikasi & Presentasi', skala1: 'Penyampaian membingungkan dan tidak berkesinambungan.', skala2: 'Penyampaian cukup jelas namun kurang percaya diri.', skala3: 'Penyampaian sistematis, komunikatif, dan responsif.', skala4: 'Penyampaian sangat persuasif, runtut, didukung argumen ilmiah yang kuat.' }
        ];
    }

    const bacaanRaw = raw.bahanBacaan || lamp.bahanBacaan || {};
    const bahanBacaan = {
        guru: bacaanRaw.guru || bacaanRaw.untukGuru || `Buku Panduan Guru Kurikulum Merdeka ${mataPelajaran}, Buku Rujukan 'Neo Quantum Miracle Teaching' karya Sardin Damis (2026), Artikel Deep Teaching & Socratic Method.`,
        siswa: bacaanRaw.siswa || bacaanRaw.untukSiswa || `Buku Teks Utama Peserta Didik ${mataPelajaran}, Modul Ringkasan Bergambar ${topik}, Infografis Visual, serta Artikel Populer Edukasi.`
    };

    const gloRaw = raw.glosarium || lamp.glosarium || [];
    let glosarium = [];
    if (Array.isArray(gloRaw) && gloRaw.length > 0) {
        glosarium = gloRaw.map(g => ({
            istilah: g.istilah || g.term || 'Deep Teaching',
            arti: g.arti || g.definition || 'Pendekatan mengajar berkesadaran yang berfokus pada kedalaman makna.'
        }));
    } else {
        glosarium = [
            { istilah: 'Deep Teaching', arti: 'Pendekatan mengajar berbasis hati dan pemahaman mendalam yang mengintegrasikan empati, storytelling, dan pemikiran kritis.' },
            { istilah: 'Deep Learning', arti: 'Prosedur belajar bermakna di mana siswa tidak sekadar menghafal, melainkan memahami korelasi dan mengaplikasikan ilmu.' },
            { istilah: 'Socratic Questioning', arti: 'Teknik bertanya provokatif untuk memancing siswa berpikir kritis dan menggali alasan mendasar di balik suatu konsep.' },
            { istilah: 'Metakognisi', arti: 'Kesadaran dan pemahaman seseorang tentang proses berpikir dan cara belajarnya sendiri.' }
        ];
    }

    let pustaka = raw.daftarPustaka || lamp.daftarPustaka || [
        "Damis, Sardin. (2026). Neo Quantum Miracle Teaching: Transformasi Pembelajaran Masa Depan. Jakarta: Quantum Press.",
        "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2024). Panduan Pembelajaran dan Asesmen Kurikulum Merdeka. Jakarta: Kemendikbudristek.",
        "Dweck, Carol S. (2017). Mindset: Changing The Way You Think To Fulfil Your Potential. London: Robinson."
    ];
    if (typeof pustaka === 'string') pustaka = [pustaka];

    return {
        identitas: { penyusun, sekolah, tahun, jenjangFase, kelas, alokasiWaktu, mataPelajaran, topik },
        kompetensiAwal,
        profilPelajar: profil,
        saranaPrasarana: sarana,
        targetPesertaDidik,
        modelPembelajaran,
        tujuanPembelajaran: tp,
        pemahamanBermakna,
        pertanyaanPemantik: pemantik,
        kegiatanPembelajaran: { pendahuluan, inti: { memahami, mengaplikasi, merefleksi }, penutup },
        rencanaAsesmen: { diagnostik, formatif, sumatif },
        pengayaanRemedial: { pengayaan, remedial },
        lkpd,
        rubrikAsesmen,
        bahanBacaan,
        glosarium,
        daftarPustaka: pustaka
    };
}

function renderModulAjarPreview(rawData) {
    const data = normalizeModulAjarData(rawData);
    const resultDiv = document.getElementById('toolResult');
    const idt = data.identitas || {};

    const profilBadges = (data.profilPelajar || []).map(p => `<span class="rpp-badge blue" style="margin-right:4px; display:inline-block;">${p}</span>`).join(' ');

    const saranaList = (data.saranaPrasarana || []).map(s => `<li>${s}</li>`).join('');
    const tpList = (data.tujuanPembelajaran || []).map(tp => `<li>${tp}</li>`).join('');
    const pemantikList = (data.pertanyaanPemantik || []).map(p => `<li>${p}</li>`).join('');

    const pendahuluanList = (data.kegiatanPembelajaran?.pendahuluan || []).map(p => `<li>${p}</li>`).join('');
    const memahamiList = (data.kegiatanPembelajaran?.inti?.memahami || []).map(m => `<li>${m}</li>`).join('');
    const mengaplikasiList = (data.kegiatanPembelajaran?.inti?.mengaplikasi || []).map(m => `<li>${m}</li>`).join('');
    const merefleksiList = (data.kegiatanPembelajaran?.inti?.merefleksi || []).map(m => `<li>${m}</li>`).join('');
    const penutupList = (data.kegiatanPembelajaran?.penutup || []).map(p => `<li>${p}</li>`).join('');

    const lkpdPetunjuk = (data.lkpd?.petunjuk || []).map(pt => `<li>${pt}</li>`).join('');
    const lkpdTabelRows = (data.lkpd?.tabelKerja || []).map(row => `
        <tr>
            <td style="font-weight:600; background:#f8fafc;" width="30%">${row.langkah}</td>
            <td>${row.deskripsi}</td>
        </tr>
    `).join('');
    const lkpdRefleksi = (data.lkpd?.pertanyaanReflektif || []).map(q => `<li>${q}</li>`).join('');

    const rubrikRows = (data.rubrikAsesmen || []).map(r => `
        <tr>
            <td style="font-weight:600; background:#f8fafc;" width="20%">${r.kriteria}</td>
            <td style="font-size:0.85rem;">${r.skala1}</td>
            <td style="font-size:0.85rem;">${r.skala2}</td>
            <td style="font-size:0.85rem;">${r.skala3}</td>
            <td style="font-size:0.85rem; background:#ecfdf5; color:#065f46; font-weight:500;">${r.skala4}</td>
        </tr>
    `).join('');

    const glosariumRows = (data.glosarium || []).map(g => `
        <tr>
            <td style="font-weight:600; color:#1e293b;" width="25%">${g.istilah}</td>
            <td>${g.arti}</td>
        </tr>
    `).join('');

    const pustakaList = (data.daftarPustaka || []).map(p => `<li>${p}</li>`).join('');

    resultDiv.innerHTML = `
        <div class="planner-wrapper" style="margin-top:1.5rem;">

            <!-- Header Action Controls -->
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; background:#0f172a; padding:1rem 1.25rem; border-radius:12px; margin-bottom:1rem; color:white;">
                <div>
                    <h3 style="margin:0; font-size:1.1rem; color:#f8fafc;"><i class="fas fa-book-open" style="color:var(--stem-orange); margin-right:0.5rem;"></i> Modul Ajar Deep Teaching Ready</h3>
                    <p style="margin:0; font-size:0.8rem; color:#94a3b8;">${idt.mataPelajaran} - ${idt.topik} (${idt.jenjangFase})</p>
                </div>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                    <button id="btnToggleEditPlanner" onclick="togglePlannerEditMode()" class="rpp-print-btn" style="background:#059669; border:none;">
                        <i class="fas fa-edit"></i> Edit Data Modul Ajar
                    </button>
                    <button onclick="copyModulAjarToClipboard()" class="rpp-print-btn" style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);">
                        <i class="fas fa-copy"></i> Salin Teks
                    </button>
                    <button onclick="window.print()" class="rpp-print-btn">
                        <i class="fas fa-print"></i> Cetak A4
                    </button>
                    <button onclick="downloadRPPAsPDF('Modul_Ajar_${(idt.topik || 'DeepTeaching').replace(/\s+/g, '_')}')" class="rpp-print-btn" style="background:#4f46e5; border:none;">
                        <i class="fas fa-file-pdf"></i> Download PDF
                    </button>
                </div>
            </div>

            <!-- Edit Notice Banner -->
            <div id="plannerEditNotice" style="display:none; background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; padding:0.65rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:0.88rem; align-items:center; gap:0.6rem;">
                <i class="fas fa-pen-square" style="font-size:1.2rem; color:#059669;"></i>
                <span><strong>Mode Edit Aktif!</strong> Anda dapat mengeklik langsung setiap isi teks atau tabel di bawah ini untuk mengedit / melengkapi data secara bebas. Seluruh isi yang telah disesuaikan akan langsung dapat dicetak / diunduh sebagai PDF.</span>
            </div>

            <!-- Tab Navigation Header -->
            <div class="planner-tabs" style="display:flex; gap:0.5rem; border-bottom:2px solid #e2e8f0; margin-bottom:1.25rem; overflow-x:auto; padding-bottom:4px;">
                <button class="planner-tab-btn active" onclick="switchPlannerTab('tab-info', this)">
                    <i class="fas fa-info-circle"></i> 1. Informasi Umum
                </button>
                <button class="planner-tab-btn" onclick="switchPlannerTab('tab-inti', this)">
                    <i class="fas fa-bullseye"></i> 2. Komponen Inti
                </button>
                <button class="planner-tab-btn" onclick="switchPlannerTab('tab-asesmen', this)">
                    <i class="fas fa-tasks"></i> 3. Rencana Asesmen
                </button>
                <button class="planner-tab-btn" onclick="switchPlannerTab('tab-lampiran', this)">
                    <i class="fas fa-file-alt"></i> 4. LKPD & Rubrik
                </button>
                <button class="planner-tab-btn" onclick="switchPlannerTab('tab-pustaka', this)">
                    <i class="fas fa-bookmark"></i> 5. Glosarium & Pustaka
                </button>
                <button class="planner-tab-btn" onclick="switchPlannerTab('tab-full-planner', this)" style="background:#f1f5f9; color:#475569; font-weight:600;">
                    <i class="fas fa-eye"></i> Tampilan Utuh (Cetak)
                </button>
            </div>

            <!-- TAB 1: INFORMASI UMUM -->
            <div id="tab-info" class="planner-tab-content active">
                <div class="rpp-section-title">1. INFORMASI UMUM</div>
                <table class="rpp-table">
                    <tr><td class="rpp-label" width="25%">Nama Penyusun</td><td>${idt.penyusun}</td></tr>
                    <tr><td class="rpp-label">Institusi / Sekolah</td><td>${idt.sekolah}</td></tr>
                    <tr><td class="rpp-label">Tahun Penyusunan</td><td>${idt.tahun}</td></tr>
                    <tr><td class="rpp-label">Jenjang / Fase / Kelas</td><td>${idt.jenjangFase} (${idt.kelas})</td></tr>
                    <tr><td class="rpp-label">Alokasi Waktu</td><td>${idt.alokasiWaktu}</td></tr>
                    <tr><td class="rpp-label">Mata Pelajaran & Topik</td><td><strong>${idt.mataPelajaran}</strong> — ${idt.topik}</td></tr>
                    <tr><td class="rpp-label">Kompetensi Awal (Prasyarat)</td><td>${data.kompetensiAwal}</td></tr>
                    <tr><td class="rpp-label">Profil Pelajar / Nilai Karakter</td><td>${profilBadges}</td></tr>
                    <tr><td class="rpp-label">Sarana dan Prasarana</td><td><ul style="margin:0; padding-left:1.2rem;">${saranaList}</ul></td></tr>
                    <tr><td class="rpp-label">Target Peserta Didik</td><td>${data.targetPesertaDidik}</td></tr>
                    <tr><td class="rpp-label">Model Pembelajaran</td><td><span class="rpp-badge orange">${data.modelPembelajaran}</span></td></tr>
                </table>
            </div>

            <!-- TAB 2: KOMPONEN INTI -->
            <div id="tab-inti" class="planner-tab-content" style="display:none;">
                <div class="rpp-section-title">2. KOMPONEN INTI</div>
                <table class="rpp-table">
                    <tr><td class="rpp-label" width="25%">Tujuan Pembelajaran (TP)</td><td><ol style="margin:0; padding-left:1.2rem;">${tpList}</ol></td></tr>
                    <tr><td class="rpp-label">Pemahaman Bermakna</td><td>${data.pemahamanBermakna}</td></tr>
                    <tr><td class="rpp-label">Pertanyaan Pemantik (Mindful Hook)</td><td><ol style="margin:0; padding-left:1.2rem;">${pemantikList}</ol></td></tr>
                </table>

                <div class="rpp-section-title" style="margin-top:1.5rem;">KEGIATAN PEMBELAJARAN (ALUR 3M DEEP TEACHING)</div>
                <table class="rpp-table">
                    <thead>
                        <tr><th width="20%">Tahapan</th><th>Aktivitas Pembelajaran Integratif</th></tr>
                    </thead>
                    <tbody>
                        <tr class="rpp-phase-row">
                            <td><span class="rpp-phase-badge opening">PENDAHULUAN</span><br><br><small><strong>Berkesadaran & Mindful Hook</strong></small></td>
                            <td><ul style="margin:0; padding-left:1.2rem;">${pendahuluanList}</ul></td>
                        </tr>
                        <tr>
                            <td><span class="rpp-phase-badge main">INTI</span><br><br><small><strong>Memahami (Konstruksi)</strong></small></td>
                            <td><ul style="margin:0; padding-left:1.2rem;">${memahamiList}</ul></td>
                        </tr>
                        <tr>
                            <td><span class="rpp-phase-badge main" style="background:#e0e7ff; color:#3730a3;">INTI</span><br><br><small><strong>Mengaplikasi (Aksi Nyata)</strong></small></td>
                            <td><ul style="margin:0; padding-left:1.2rem;">${mengaplikasiList}</ul></td>
                        </tr>
                        <tr>
                            <td><span class="rpp-phase-badge main" style="background:#f3e8ff; color:#6b21a8;">INTI</span><br><br><small><strong>Merefleksi (Metakognisi)</strong></small></td>
                            <td><ul style="margin:0; padding-left:1.2rem;">${merefleksiList}</ul></td>
                        </tr>
                        <tr class="rpp-phase-row">
                            <td><span class="rpp-phase-badge closing">PENUTUP</span><br><br><small><strong>Umpan Balik & Penguatan</strong></small></td>
                            <td><ul style="margin:0; padding-left:1.2rem;">${penutupList}</ul></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- TAB 3: RENCANA ASESMEN -->
            <div id="tab-asesmen" class="planner-tab-content" style="display:none;">
                <div class="rpp-section-title">3. RENCANA ASESMEN & STRATEGI DIFERENSIASI</div>
                <table class="rpp-table">
                    <thead>
                        <tr><th width="25%">Jenis Asesmen</th><th>Deskripsi & Instrumen Penilaian</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="rpp-badge blue">Asesmen Diagnostik</span><br><small>(Awal Pembelajaran)</small></td>
                            <td>${data.rencanaAsesmen.diagnostik}</td>
                        </tr>
                        <tr>
                            <td><span class="rpp-badge green">Asesmen Formatif</span><br><small>(Proses Pembelajaran)</small></td>
                            <td>${data.rencanaAsesmen.formatif}</td>
                        </tr>
                        <tr>
                            <td><span class="rpp-badge orange">Asesmen Sumatif</span><br><small>(Akhir Pembelajaran/Proyek)</small></td>
                            <td>${data.rencanaAsesmen.sumatif}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="rpp-section-title" style="margin-top:1.5rem;">PENGAYAAN DAN REMEDIAL</div>
                <table class="rpp-table">
                    <tr>
                        <td class="rpp-label" width="25%">Strategi Pengayaan (Tuntas Cepat)</td>
                        <td>${data.pengayaanRemedial.pengayaan}</td>
                    </tr>
                    <tr>
                        <td class="rpp-label">Strategi Remedial (Bimbingan)</td>
                        <td>${data.pengayaanRemedial.remedial}</td>
                    </tr>
                </table>
            </div>

            <!-- TAB 4: LAMPIRAN (LKPD & RUBRIK) -->
            <div id="tab-lampiran" class="planner-tab-content" style="display:none;">
                <div class="rpp-section-title">4. LAMPIRAN: LEMBAR KERJA PESERTA DIDIK (LKPD DEEP LEARNING)</div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem; margin-bottom:1.5rem;">
                    <h4 style="margin-top:0; color:#1e293b;"><i class="fas fa-file-signature" style="color:var(--stem-blue);"></i> ${data.lkpd.judul}</h4>
                    <p><strong>Petunjuk Pengerjaan:</strong></p>
                    <ol style="padding-left:1.2rem; margin-bottom:1rem;">${lkpdPetunjuk}</ol>
                    <p><strong>Tugas Kontekstual:</strong></p>
                    <div style="background:white; border-left:4px solid var(--stem-orange); padding:0.75rem 1rem; border-radius:4px; margin-bottom:1rem; font-style:italic;">
                        "${data.lkpd.tugasKontekstual}"
                    </div>

                    <p><strong>Tabel Alur Kerja & Investigasi Kelompok:</strong></p>
                    <table class="rpp-table" style="background:white; margin-bottom:1rem;">
                        ${lkpdTabelRows}
                    </table>

                    <p><strong>Pertanyaan Reflektif:</strong></p>
                    <ol style="padding-left:1.2rem; margin:0;">${lkpdRefleksi}</ol>
                </div>

                <div class="rpp-section-title">INSTRUMEN & RUBRIK ASESMEN AUTENTIK (SKALA 1 - 4)</div>
                <table class="rpp-table" style="margin-bottom:1.5rem;">
                    <thead>
                        <tr>
                            <th>Kriteria Penilaian</th>
                            <th width="18%">Perlu Bimbingan (1)</th>
                            <th width="18%">Cukup (2)</th>
                            <th width="18%">Baik (3)</th>
                            <th width="22%">Sangat Baik (4)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rubrikRows}
                    </tbody>
                </table>

                <div class="rpp-section-title">BAHAN BACAAN GURU & PESERTA DIDIK</div>
                <table class="rpp-table">
                    <tr><td class="rpp-label" width="25%">Bahan Bacaan Guru</td><td>${data.bahanBacaan.guru}</td></tr>
                    <tr><td class="rpp-label">Bahan Bacaan Siswa</td><td>${data.bahanBacaan.siswa}</td></tr>
                </table>
            </div>

            <!-- TAB 5: GLOSARIUM & PUSTAKA -->
            <div id="tab-pustaka" class="planner-tab-content" style="display:none;">
                <div class="rpp-section-title">GLOSARIUM (DAFTAR ISTILAH)</div>
                <table class="rpp-table" style="margin-bottom:1.5rem;">
                    <thead>
                        <tr><th>Istilah / Kata Kunci</th><th>Definisi Konseptual</th></tr>
                    </thead>
                    <tbody>
                        ${glosariumRows}
                    </tbody>
                </table>

                <div class="rpp-section-title">DAFTAR PUSTAKA & RUJUKAN</div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
                    <ul style="margin:0; padding-left:1.2rem;">${pustakaList}</ul>
                </div>
            </div>

            <!-- TAB 6: TAMPILAN UTUH (FOR PRINT & PDF) -->
            <div id="tab-full-planner" class="planner-tab-content" style="display:none;">
                <div id="printableModulAjar" class="rpp-container">
                    <div class="rpp-watermark">MODUL AJAR</div>

                    <!-- Header -->
                    <div class="rpp-header">
                        <div class="rpp-logo-area">
                            <i class="fas fa-atom rpp-logo-icon"></i>
                        </div>
                        <div class="rpp-title-area">
                            <h2>MODUL AJAR DEEP TEACHING</h2>
                            <p>Kurikulum Merdeka — <strong>Standar Pembelajaran Mendalam 2025</strong></p>
                            <p>${idt.sekolah}</p>
                        </div>
                    </div>

                    <!-- 1. INFORMASI UMUM -->
                    <div class="rpp-section-title">1. INFORMASI UMUM</div>
                    <table class="rpp-table">
                        <tr><td class="rpp-label" width="25%">Nama Penyusun</td><td>${idt.penyusun}</td></tr>
                        <tr><td class="rpp-label">Institusi / Sekolah</td><td>${idt.sekolah}</td></tr>
                        <tr><td class="rpp-label">Tahun Penyusunan</td><td>${idt.tahun}</td></tr>
                        <tr><td class="rpp-label">Jenjang / Fase / Kelas</td><td>${idt.jenjangFase} (${idt.kelas})</td></tr>
                        <tr><td class="rpp-label">Alokasi Waktu</td><td>${idt.alokasiWaktu}</td></tr>
                        <tr><td class="rpp-label">Mata Pelajaran & Topik</td><td><strong>${idt.mataPelajaran}</strong> — ${idt.topik}</td></tr>
                        <tr><td class="rpp-label">Kompetensi Awal (Prasyarat)</td><td>${data.kompetensiAwal}</td></tr>
                        <tr><td class="rpp-label">Profil Pelajar / Nilai Karakter</td><td>${profilBadges}</td></tr>
                        <tr><td class="rpp-label">Sarana dan Prasarana</td><td><ul style="margin:0; padding-left:1.2rem;">${saranaList}</ul></td></tr>
                        <tr><td class="rpp-label">Target Peserta Didik</td><td>${data.targetPesertaDidik}</td></tr>
                        <tr><td class="rpp-label">Model Pembelajaran</td><td><strong>${data.modelPembelajaran}</strong></td></tr>
                    </table>

                    <!-- 2. KOMPONEN INTI -->
                    <div class="rpp-section-title">2. KOMPONEN INTI</div>
                    <table class="rpp-table">
                        <tr><td class="rpp-label" width="25%">Tujuan Pembelajaran (TP)</td><td><ol style="margin:0; padding-left:1.2rem;">${tpList}</ol></td></tr>
                        <tr><td class="rpp-label">Pemahaman Bermakna</td><td>${data.pemahamanBermakna}</td></tr>
                        <tr><td class="rpp-label">Pertanyaan Pemantik</td><td><ol style="margin:0; padding-left:1.2rem;">${pemantikList}</ol></td></tr>
                    </table>

                    <div class="rpp-section-title">KEGIATAN PEMBELAJARAN (LANGKAH-LANGKAH 3M)</div>
                    <table class="rpp-table">
                        <thead>
                            <tr><th width="20%">Tahapan</th><th>Aktivitas Pembelajaran Integratif</th></tr>
                        </thead>
                        <tbody>
                            <tr class="rpp-phase-row">
                                <td><span class="rpp-phase-badge opening">PENDAHULUAN</span><br><br><small><strong>Berkesadaran</strong></small></td>
                                <td><ul style="margin:0; padding-left:1.2rem;">${pendahuluanList}</ul></td>
                            </tr>
                            <tr>
                                <td><span class="rpp-phase-badge main">INTI</span><br><br><small><strong>1. Memahami</strong></small></td>
                                <td><ul style="margin:0; padding-left:1.2rem;">${memahamiList}</ul></td>
                            </tr>
                            <tr>
                                <td><span class="rpp-phase-badge main">INTI</span><br><br><small><strong>2. Mengaplikasi</strong></small></td>
                                <td><ul style="margin:0; padding-left:1.2rem;">${mengaplikasiList}</ul></td>
                            </tr>
                            <tr>
                                <td><span class="rpp-phase-badge main">INTI</span><br><br><small><strong>3. Merefleksi</strong></small></td>
                                <td><ul style="margin:0; padding-left:1.2rem;">${merefleksiList}</ul></td>
                            </tr>
                            <tr class="rpp-phase-row">
                                <td><span class="rpp-phase-badge closing">PENUTUP</span><br><br><small><strong>Penguatan</strong></small></td>
                                <td><ul style="margin:0; padding-left:1.2rem;">${penutupList}</ul></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="rpp-section-title">RENCANA ASESMEN</div>
                    <table class="rpp-table">
                        <thead>
                            <tr><th width="25%">Jenis Asesmen</th><th>Deskripsi & Instrumen Penilaian</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="rpp-badge blue">Asesmen Diagnostik</span></td>
                                <td>${data.rencanaAsesmen.diagnostik}</td>
                            </tr>
                            <tr>
                                <td><span class="rpp-badge green">Asesmen Formatif</span></td>
                                <td>${data.rencanaAsesmen.formatif}</td>
                            </tr>
                            <tr>
                                <td><span class="rpp-badge orange">Asesmen Sumatif</span></td>
                                <td>${data.rencanaAsesmen.sumatif}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="rpp-section-title">PENGAYAAN DAN REMEDIAL</div>
                    <table class="rpp-table">
                        <tr><td class="rpp-label" width="25%">Strategi Pengayaan</td><td>${data.pengayaanRemedial.pengayaan}</td></tr>
                        <tr><td class="rpp-label">Strategi Remedial</td><td>${data.pengayaanRemedial.remedial}</td></tr>
                    </table>

                    <!-- 3. KOMPONEN LAMPIRAN -->
                    <div class="rpp-section-title">3. KOMPONEN LAMPIRAN</div>
                    
                    <!-- LKPD -->
                    <div style="margin-bottom:1rem; page-break-inside:avoid;">
                        <h4 style="margin-bottom:0.5rem; color:#1e293b;">A. Lembar Kerja Peserta Didik (LKPD Deep Learning)</h4>
                        <p style="margin:0 0 0.5rem 0;"><strong>Tugas Kontekstual:</strong> ${data.lkpd.tugasKontekstual}</p>
                        <table class="rpp-table">
                            ${lkpdTabelRows}
                        </table>
                    </div>

                    <!-- RUBRIK -->
                    <div style="margin-bottom:1rem; page-break-inside:avoid;">
                        <h4 style="margin-bottom:0.5rem; color:#1e293b;">B. Instrumen & Rubrik Asesmen Autentik</h4>
                        <table class="rpp-table">
                            <thead>
                                <tr>
                                    <th>Kriteria</th>
                                    <th width="18%">Skala 1</th>
                                    <th width="18%">Skala 2</th>
                                    <th width="18%">Skala 3</th>
                                    <th width="22%">Skala 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rubrikRows}
                            </tbody>
                        </table>
                    </div>

                    <!-- BACAAN, GLOSARIUM, PUSTAKA -->
                    <div style="page-break-inside:avoid;">
                        <h4 style="margin-bottom:0.5rem; color:#1e293b;">C. Bahan Bacaan, Glosarium & Daftar Pustaka</h4>
                        <table class="rpp-table" style="margin-bottom:0.75rem;">
                            <tr><td class="rpp-label" width="25%">Bahan Bacaan Guru</td><td>${data.bahanBacaan.guru}</td></tr>
                            <tr><td class="rpp-label">Bahan Bacaan Siswa</td><td>${data.bahanBacaan.siswa}</td></tr>
                        </table>

                        <table class="rpp-table" style="margin-bottom:0.75rem;">
                            <thead><tr><th width="25%">Istilah Glosarium</th><th>Definisi</th></tr></thead>
                            <tbody>${glosariumRows}</tbody>
                        </table>

                        <p style="margin-bottom:0.3rem;"><strong>Daftar Pustaka:</strong></p>
                        <ul style="margin:0; padding-left:1.2rem;">${pustakaList}</ul>
                    </div>

                    <div class="rpp-footer">
                        <p><i class="fas fa-atom"></i> Dihasilkan oleh <strong>Neo Quantum Miracle Teaching — Deep Teaching Planner</strong> | Standar Modul Ajar 2025</p>
                    </div>
                </div>
            </div>

        </div>
    `;

    window.currentModulAjarData = data;
    window.isPlannerEditActive = false;
}

function togglePlannerEditMode() {
    window.isPlannerEditActive = !window.isPlannerEditActive;
    const btn = document.getElementById('btnToggleEditPlanner');
    const notice = document.getElementById('plannerEditNotice');
    const editableElements = document.querySelectorAll('.rpp-table td:not(.rpp-label), .planner-tab-content p, .planner-tab-content li');

    if (window.isPlannerEditActive) {
        if (btn) {
            btn.style.background = '#dc2626';
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Selesai Edit (Simpan Tampilan)';
        }
        if (notice) notice.style.display = 'flex';

        editableElements.forEach(el => {
            el.setAttribute('contenteditable', 'true');
            el.classList.add('planner-editing');
        });
    } else {
        if (btn) {
            btn.style.background = '#059669';
            btn.innerHTML = '<i class="fas fa-edit"></i> Edit Data Modul Ajar';
        }
        if (notice) notice.style.display = 'none';

        editableElements.forEach(el => {
            el.removeAttribute('contenteditable');
            el.classList.remove('planner-editing');
        });
    }
}

function switchPlannerTab(tabId, btnEl) {
    const wrapper = btnEl.closest('.planner-wrapper');
    if (!wrapper) return;

    wrapper.querySelectorAll('.planner-tab-btn').forEach(btn => btn.classList.remove('active'));
    wrapper.querySelectorAll('.planner-tab-content').forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    btnEl.classList.add('active');
    const target = wrapper.querySelector('#' + tabId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }
}

function copyModulAjarToClipboard() {
    const printable = document.getElementById('printableModulAjar') || document.querySelector('.planner-tab-content.active');
    if (!printable) return;

    const textContent = printable.innerText;
    navigator.clipboard.writeText(textContent).then(() => {
        alert("Modul Ajar berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error("Gagal menyalin: ", err);
    });
}

function downloadRPPAsPDF(customFilename) {
    let element = document.getElementById('printableModulAjar') || document.querySelector('.rpp-container');
    if (!element) return;

    const fullTab = document.getElementById('tab-full-planner');
    const wasHidden = fullTab && fullTab.style.display === 'none';
    if (wasHidden) {
        fullTab.style.display = 'block';
    }

    const btns = document.querySelectorAll('.rpp-print-btn');
    btns.forEach(b => b.style.opacity = '0.5');

    const opt = {
        margin: [0.4, 0.4, 0.4, 0.4],
        filename: (customFilename || 'Modul_Ajar_NeoQuantum') + '.pdf',
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

    html2pdf().set(opt).from(element).save().then(() => {
        btns.forEach(b => b.style.opacity = '1');
        if (wasHidden) {
            fullTab.style.display = 'none';
        }
    }).catch(err => {
        console.error("PDF generation error:", err);
        btns.forEach(b => b.style.opacity = '1');
        if (wasHidden) {
            fullTab.style.display = 'none';
        }
    });
}


const selfAssessmentBank = [
    // Dimensi 1: Kesadaran & Emosional
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya secara rutin membuka kelas dengan Mindful Check-in (menyapa emosi & kesiapan mental murid)." },
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya mengenal minat, gaya belajar, dan keunikan latar belakang sebagian besar peserta didik saya." },
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya membangun rasa aman psikologis sehingga murid tidak takut salah saat mengemukakan pendapat." },
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya merespons pertanyaan sulit atau gangguan di kelas dengan ketenangan (Mindful Response)." },
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya percaya bahwa setiap peserta didik memiliki keunikan dan potensi jenius yang perlu dikembangkan." },
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya menyampaikan apresiasi yang tulus (Feedback from the Heart) atas setiap usaha dan proses belajar siswa." },
    { cat: "Kesadaran & Emosional", badge: "blue", text: "Saya selalu menjaga energi positif dan antusiasme tinggi saat memasuki ruang kelas." },

    // Dimensi 2: Pedagogi Deep Teaching & Socratic
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya melontarkan pertanyaan provokatif (Socratic Questioning) yang memicu pemikiran kritis HOTS." },
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya mengaitkan setiap topik materi dengan fenomena riil atau studi kasus dalam kehidupan sehari-hari." },
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya menggunakan naskah apersepsi mengejutkan (Mindful Hook) untuk memantik rasa ingin tahu diawal pembelajaran." },
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya memberikan kesempatan murid untuk menemukan konsep sendiri (Discovery Learning) daripada mendikte." },
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya merancang alur kegiatan 3M (Memahami, Mengaplikasi, Merefleksi) secara seimbang di Modul Ajar." },
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya mendorong peserta didik untuk mempertanyakan alasan 'mengapa' dan 'bagaimana' di balik suatu teori." },
    { cat: "Pedagogi Deep Teaching", badge: "orange", text: "Saya memfasilitasi diskusi kolaboratif di mana murid saling berargumen secara santun berbasis data." },

    // Dimensi 3: Teknologi & Inovasi
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya secara aktif memanfaatkan tools AI (seperti Generator Modul Ajar) untuk memperkaya persiapan mengajar." },
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya memanfaatkan media interaktif digital (visual, simulasi, atau aplikasi) untuk memperjelas konsep abstrak." },
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya mendorong murid menggunakan teknologi secara bijak untuk riset dan pembuatan karya ilmiah." },
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya secara rutin mencoba metode atau strategi pengajaran baru yang belum pernah saya gunakan sebelumnya." },
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya menemukan cara-cara kreatif memfasilitasi praktikum/eksperimen saat sarana fisik terbatas." },
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya mengikuti perkembangan tools pendidikan digital terkini untuk meningkatkan efisiensi guru." },
    { cat: "Teknologi & Inovasi", badge: "purple", text: "Saya mendokumentasikan karya dan praktik baik pembelajaran kelas saya secara digital." },

    // Dimensi 4: Pembelajaran Berdiferensiasi
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya memetakan kesiapan awal dan minat belajar murid sebelum merancang alur pembelajaran." },
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya menyediakan beragam opsi tugas/produk (Diferensiasi Produk) sesuai bakat murid." },
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya memberikan bimbingan bertahap (Scaffolding) bagi siswa yang mengalami kesulitan belajar." },
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya merancang materi tantangan pengayaan khusus bagi murid yang tuntas belajar lebih cepat." },
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya menyusun kelompok belajar yang heterogen untuk melatih gotong royong dan empati antar-murid." },
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya menyesuaikan kecepatan penyampaian materi berdasarkan respon dan pemahaman siswa di kelas." },
    { cat: "Diferensiasi Pembelajaran", badge: "green", text: "Saya memastikan semua peserta didik memperoleh kesempatan yang sama untuk tampil dan berpendapat." },

    // Dimensi 5: Asesmen Autentik & Refleksi
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya secara konsisten melakukan refleksi diri (Self-Reflection) seusai menyelesaikan sesi mengajar." },
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya menggunakan asesmen formatif (observasi, kuis interaktif, peer-assessment) selama proses belajar." },
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya menilai pemahaman murid melalui produk autentik/portofolio/presentasi, bukan sekadar hafalan PG." },
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya memberikan rubrik penilaian yang transparan dan dapat dipahami siswa sejak awal proyek." },
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya menganggap umpan balik atau kritik dari murid dan rekan sejawat sebagai peluang tumbuh (Growth Mindset)." },
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya menyisihkan waktu khusus untuk kegiatan refleksi metakognisi murid di penutup pembelajaran." },
    { cat: "Asesmen & Refleksi", badge: "red", text: "Saya berkomitmen meningkatkan kompetensi profesional diri melalui literasi dan pelatihan mandiri." }
];

function getSampledAssessmentQuestions() {
    const categories = [
        "Kesadaran & Emosional",
        "Pedagogi Deep Teaching",
        "Teknologi & Inovasi",
        "Diferensiasi Pembelajaran",
        "Asesmen & Refleksi"
    ];

    let sampled = [];
    categories.forEach(cat => {
        const catQuestions = selfAssessmentBank.filter(q => q.cat === cat);
        const shuffled = [...catQuestions].sort(() => 0.5 - Math.random());
        sampled.push(...shuffled.slice(0, 2));
    });

    sampled.sort(() => 0.5 - Math.random());
    window.currentAssessmentQuestions = sampled;
    return sampled;
}

function renderSelfAssessmentHTML() {
    const questions = getSampledAssessmentQuestions();
    return `
        <div class="tool-form">
            <p style="font-size:0.92rem; color:#334155; margin-bottom:1.25rem; font-weight:500; line-height:1.5;">
                Ukur kesiapan dan kualitas praktik pembelajaran Anda dengan memberi tanda centang pada indikator pernyataan yang sesuai berikut ini:
            </p>

            <div id="checklistForm" style="margin: 1rem 0;">
                ${questions.map((q, i) => `
                    <div class="checklist-item" style="display:flex; align-items:flex-start; gap:0.75rem; padding:0.85rem 1rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:0.6rem; transition:all 0.2s ease;">
                        <input type="checkbox" id="check-${i}" style="margin-top:0.2rem; width:18px; height:18px; cursor:pointer;">
                        <label for="check-${i}" style="cursor:pointer; font-size:0.9rem; color:#1e293b; line-height:1.5; flex:1;">
                            ${q.text}
                        </label>
                    </div>
                `).join('')}
            </div>

            <button class="btn-generate" onclick="calculateAssessment()" style="background: linear-gradient(135deg, var(--quantum-blue), #1d4ed8); margin-top:0.75rem; padding:0.85rem; font-size:0.95rem;">
                <i class="fas fa-poll"></i> Analisis & Lihat Hasil Evaluasi Diri
            </button>
            <div id="toolResult" style="margin-top:1.5rem;"></div>
        </div>
    `;
}

function refreshSelfAssessmentForm() {
    const formContainer = document.querySelector('.modal-main #chapterContent .tool-form');
    if (formContainer) {
        formContainer.parentElement.innerHTML = renderSelfAssessmentHTML();
    } else {
        openTool('checklist');
    }
}

function calculateAssessment() {
    const questions = window.currentAssessmentQuestions || [];
    let score = 0;

    questions.forEach((q, i) => {
        const checkbox = document.getElementById(`check-${i}`);
        if (checkbox && checkbox.checked) {
            score++;
        }
    });

    const totalQuestions = questions.length || 10;
    const percentage = Math.round((score / totalQuestions) * 100);

    let levelTitle = "";
    let levelBadgeClass = "";
    let levelDesc = "";
    let levelIcon = "";

    if (score >= 9) {
        levelTitle = "Quantum Master Teacher (Master Pendidik)";
        levelBadgeClass = "score-high";
        levelIcon = "fa-crown";
        levelDesc = "Luar biasa! Anda telah menerapkan prinsip Deep Teaching, empati kesadaran, serta asesmen autentik secara konsisten dan menyeluruh di setiap sesi mengajar.";
    } else if (score >= 7) {
        levelTitle = "Quantum Innovator (Pendidik Cerdas & Berkesadaran)";
        levelBadgeClass = "score-high";
        levelIcon = "fa-rocket";
        levelDesc = "Sangat Baik! Anda memiliki fondasi pedagogi modern yang kuat dan antusiasme tinggi terhadap inovasi pembelajaran mendalam.";
    } else if (score >= 5) {
        levelTitle = "Quantum Practitioner (Pendidik Berkembang)";
        levelBadgeClass = "score-med";
        levelIcon = "fa-seedling";
        levelDesc = "Baik! Anda sudah mulai mengintegrasikan nilai-nilai Quantum & Deep Learning, dan berpotensi besar terus berkembang mencapai keunggulan mengajar.";
    } else {
        levelTitle = "Quantum Explorer (Perintis Transformasi)";
        levelBadgeClass = "score-low";
        levelIcon = "fa-compass";
        levelDesc = "Langkah awal yang bagus! Teruslah mengeksplorasi strategi Deep Teaching dan Socratic Questioning untuk meningkatkan kualitas interaksi di kelas.";
    }

    const resultDiv = document.getElementById('toolResult');
    resultDiv.innerHTML = `
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:1.5rem; box-shadow:0 10px 25px rgba(0,0,0,0.05); margin-top:1.5rem;">
            
            <div style="text-align:center; padding-bottom:1.25rem; border-bottom:1px solid #f1f5f9;">
                <div style="display:inline-flex; align-items:center; justify-content:center; width:64px; height:64px; background:#e0e7ff; color:#4f46e5; border-radius:50%; font-size:1.8rem; margin-bottom:0.75rem;">
                    <i class="fas ${levelIcon}"></i>
                </div>
                <h3 style="margin:0 0 0.4rem 0; color:#1e293b; font-size:1.25rem;">${levelTitle}</h3>
                <div class="score-badge ${levelBadgeClass}" style="display:inline-block; font-size:1.1rem; padding:0.4rem 1.2rem; border-radius:20px; font-weight:700;">
                    Skor Kesiapan: ${score} / ${totalQuestions} (${percentage}%)
                </div>
                <p style="margin:0.75rem 0 0 0; font-size:0.88rem; color:#475569; line-height:1.5; max-width:550px; margin-left:auto; margin-right:auto;">
                    ${levelDesc}
                </p>
            </div>

            <div style="margin-top:1.25rem; background:#f8fafc; border-left:4px solid var(--quantum-blue); padding:1rem; border-radius:8px;">
                <h5 style="margin:0 0 0.4rem 0; color:#0f172a; font-size:0.9rem;"><i class="fas fa-lightbulb" style="color:var(--quantum-blue);"></i> Rekomendasi Tindak Lanjut Quantum Teacher:</h5>
                <ul style="margin:0; padding-left:1.2rem; font-size:0.85rem; color:#475569; line-height:1.6;">
                    <li>Manfaatkan <strong>Deep Teaching Planner</strong> untuk merancang alur 3M (Memahami-Mengaplikasi-Merefleksi) secara terstruktur.</li>
                    <li>Gunakan <strong>STEM Project Generator</strong> untuk merancang studi kasus berbasis rekayasa konteks riil.</li>
                    <li>Lakukan evaluasi diri secara berkala untuk memantau perkembangan efektivitas mengajar Anda secara berkelanjutan.</li>
                </ul>
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

// Valid Commercial License Codes (Pre-registered & Active)
const validLicenses = [
    'NQMT-GURU-2026',
    'NQMT-2026-NEO',
    'SARDIN-QMT-9BAB',
    'NQMT-8899-7766',
    'NQMT-PREMIUM-2026',
    'NQMT-7821-K9A4',
    'NQMT-3194-M8L2',
    'NQMT-9042-B7R5',
    'NQMT-5183-X4W9',
    'NQMT-6472-H3P1',
    'NQMT-1935-D8Y6',
    'NQMT-8247-Z2V4',
    'NQMT-4061-F9T3',
    'NQMT-7519-E5S8',
    'NQMT-9384-C1U7',
    'NQMT-2648-L6Q3',
    'NQMT-5810-R4M9',
    'NQMT-3792-P8B1',
    'NQMT-8406-K2X7',
    'NQMT-6159-V9N4',
    'NQMT-1428-A3T5',
    'NQMT-7093-W6E2',
    'NQMT-4931-J8S9',
    'NQMT-8562-G7C1',
    'NQMT-3274-Y4R8'
];

function openDownloadFlow() {
    const isActivated = localStorage.getItem('neoBookLicenseActivated') === 'true';
    if (isActivated) {
        openDownloadModal();
    } else {
        openLicenseModal();
    }
}

function openLicenseModal() {
    const modal = document.getElementById('licenseModal');
    if (modal) modal.style.display = 'flex';
}

function closeLicenseModal() {
    const modal = document.getElementById('licenseModal');
    if (modal) modal.style.display = 'none';
}

function openDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) modal.style.display = 'flex';
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) modal.style.display = 'none';
}

function verifyLicenseCode() {
    const input = document.getElementById('licenseCodeInput');
    const msgDiv = document.getElementById('licenseStatusMsg');
    if (!input || !msgDiv) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
        msgDiv.style.display = 'block';
        msgDiv.style.color = '#ef4444';
        msgDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> Silakan masukkan Kode Lisensi terlebih dahulu.';
        return;
    }

    const isPatternValid = /^NQMT-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code);
    const dynamicKeys = JSON.parse(localStorage.getItem('neoGeneratedLicenses') || '[]');

    if (validLicenses.includes(code) || isPatternValid || dynamicKeys.includes(code)) {
        localStorage.setItem('neoBookLicenseActivated', 'true');
        localStorage.setItem('neoBookLicenseCode', code);

        msgDiv.style.display = 'block';
        msgDiv.style.color = '#059669';
        msgDiv.style.fontWeight = '600';
        msgDiv.innerHTML = '<i class="fas fa-check-circle"></i> Kode Lisensi Valid! Membuka akses unduh 9 bab...';

        setTimeout(() => {
            closeLicenseModal();
            openDownloadModal();
        }, 600);
    } else {
        msgDiv.style.display = 'block';
        msgDiv.style.color = '#ef4444';
        msgDiv.style.fontWeight = '500';
        msgDiv.innerHTML = '<i class="fas fa-times-circle"></i> Kode Lisensi tidak valid atau belum terdaftar. Silakan minta kode lisensi via WhatsApp di bawah.';
    }
}

function requestLicenseViaWA() {
    const orderPhoneInput = document.getElementById('orderPhone');
    const orderPhone = orderPhoneInput ? orderPhoneInput.value.trim() : '';
    let waNumber = "6281354581418"; // Target WA number for order/license desk (Sardin Damis)
    
    let text = "Halo Bpk. Sardin Damis, saya bermaksud meminta/membeli Kode Lisensi untuk mengunduh 9 Bab Buku Neo Quantum Miracle Teaching pada aplikasi.";
    if (orderPhone) {
        text += `\n\nNomor WhatsApp Pemesanan Saya: ${orderPhone}`;
    }
    
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
}

function openAdminGenerator() {
    const pass = prompt("Masukkan Kata Sandi Admin Penulis (Sardin Damis):");
    if (pass === "admin" || pass === "quantum2026" || pass === "sardin") {
        const teacherName = prompt("Masukkan Nama Guru / Pemesan (opsional):") || "Bpk/Ibu Guru";
        const randomPart1 = Math.random().toString(36).substring(2, 6).toUpperCase();
        const randomPart2 = Math.random().toString(36).substring(2, 6).toUpperCase();
        const newCode = `NQMT-${randomPart1}-${randomPart2}`;
        
        let dynamicKeys = JSON.parse(localStorage.getItem('neoGeneratedLicenses') || '[]');
        dynamicKeys.push(newCode);
        localStorage.setItem('neoGeneratedLicenses', JSON.stringify(dynamicKeys));

        const waText = `Halo ${teacherName}, terima kasih telah memesan Buku Neo Quantum Miracle Teaching.\n\nBerikut adalah KODE LISENSI RESMI Anda untuk mengunduh 9 Bab Buku:\n👉 ${newCode}\n\nSilakan masukkan kode di atas pada tombol 'Unduh 9 Bab' di aplikasi web. Selamat membaca!`;

        // Copy message to clipboard
        navigator.clipboard.writeText(waText).then(() => {
            alert(`🔑 KODE LISENSI BARU BERHASIL DIGENERATE!\n\nKODE: ${newCode}\n\n✅ Pesan balasan WhatsApp berikut telah otomatis DISALIN ke clipboard Anda:\n\n"${waText}"\n\nAnda dapat langsung me-paste (Ctrl+V) pesan ini ke WhatsApp guru pemesan.`);
        }).catch(() => {
            alert(`🔑 KODE LISENSI BARU BERHASIL DIGENERATE!\n\nKODE: ${newCode}\n\nPESAN WA BALASAN:\n${waText}`);
        });

        const input = document.getElementById('licenseCodeInput');
        if (input) input.value = newCode;
    } else if (pass !== null) {
        alert("Kata sandi admin salah!");
    }
}

function downloadSelectedChapterPDF() {
    const select = document.getElementById('chapterSelect');
    if (!select) return;
    const chapterId = parseInt(select.value, 10);
    const ch = bookContent.chapters.find(c => c.id === chapterId);
    if (!ch) return;

    // Create temporary container for PDF export
    const printContainer = document.createElement('div');
    printContainer.style.padding = '30px';
    printContainer.style.background = '#ffffff';
    printContainer.style.color = '#1e293b';
    printContainer.style.fontFamily = 'Inter, sans-serif';
    printContainer.innerHTML = `
        <div style="border-bottom: 2px solid #4f46e5; padding-bottom: 15px; margin-bottom: 20px;">
            <div style="font-size: 12px; color: #6366f1; font-weight: bold; text-transform: uppercase;">Neo Quantum Miracle Teaching — Sardin Damis</div>
            <h1 style="font-size: 22px; color: #0f172a; margin: 5px 0;">BAB ${ch.id}: ${ch.title}</h1>
            <p style="font-size: 14px; color: #64748b;">${ch.desc}</p>
        </div>
        <div style="line-height: 1.7; font-size: 14px; color: #334155;">
            ${ch.content}
        </div>
        <div style="margin-top: 30px; padding: 15px; background: #f8fafc; border-left: 4px solid #f59e0b; border-radius: 6px; font-size: 13px;">
            <strong>Topik Utama:</strong> ${ch.topics.join(', ')}
        </div>
    `;

    document.body.appendChild(printContainer);

    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `Bab_${ch.id}_${ch.title.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(printContainer).save().then(() => {
        document.body.removeChild(printContainer);
    });
}

// Initialize
window.onload = () => {
    renderChapters();
    renderGallery();
};
