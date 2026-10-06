require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Knowledge Base (Moved from frontend)
const responses = {
    "mindset": {
        book: "Mindset Guru Quantum adalah pola pikir yang memadukan kearifan lokal dengan inovasi global. Ini melibatkan Growth Mindset, di mana tantangan dilihat sebagai peluang, bukan beban.",
        lit: "Prinsip 'Everything Speaks' dari Bobbi DePorter menekankan bahwa lingkungan belajar harus mendukung mindset positif secara keseluruhan."
    },
    "quantum teaching": {
        book: "Menjadi guru quantum berarti menjadi obor yang menerangi jalan bagi orang lain melalui adaptasi teknologi dan empati.",
        lit: "Strategi percepatan belajar (accelerated learning) dari Bobbi DePorter yang mengintegrasikan emosi, fisik, dan kognitif untuk optimalisasi memori."
    },
    "deep teaching": {
        book: "Pendekatan yang menekankan pada pemahaman mendalam dan koneksi emosional. Ini bukan sekadar transfer materi, tapi transformasi jiwa.",
        lit: "Kontras dengan 'Surface Teaching' (Marton & Säljö), Deep Teaching berfokus pada makna intrinsik dan relasi konsep dengan realitas siswa."
    },
    "surface": {
        book: "Surface learning (belajar di permukaan) cenderung berfokus pada hafalan jangka pendek untuk ujian.",
        lit: "Penelitian Marton & Säljö (1976) menunjukkan bahwa surface approach dipicu oleh tuntutan eksternal dan beban materi yang terlalu padat."
    },
    "stem": {
        book: "Integrasi masalah nyata dalam 4 pilar (S-T-E-M). Murid diajak membuat prototipe solusi sehari-hari.",
        lit: "Praktek terbaik global menekankan pada Interdisciplinary Curriculum dan Authentic Project-Based Learning (PBL) untuk membangun skill abad-21."
    },
    "diferensiasi": {
        book: "Strategi memberikan pilihan materi, metode belajar, dan cara menunjukkan pemahaman (Produk) sesuai gaya belajar murid.",
        lit: "Framework Carol Ann Tomlinson (2001) menekankan modifikasi 4 elemen: Konten, Proses, Produk, dan Learning Environment."
    },
    "tomlinson": {
        book: "Strategi pembelajaran berdiferensiasi dibahas mendalam di Bab 8 untuk inklusivitas kelas.",
        lit: "Carol Ann Tomlinson adalah pelopor Differentiated Instruction yang fokus pada kesiapan (readiness), minat, dan profil belajar siswa."
    },
    "ai": {
        book: "AI membantu efisiensi administrasi (RPP, evaluasi) agar guru punya waktu untuk pendampingan emosional.",
        lit: "Literatur modern menyarankan 'Human-in-the-loop', di mana AI sebagai kopilot namun keputusan pedagogis tetap di tangan guru."
    },
    "prompt": {
        book: "Seni perintah ke AI. Di Bab 7 dijelaskan cara membuat prompt RPP 1 lembar yang efektif.",
        lit: "Prompt Engineering adalah skill esensial dalam literasi digital untuk mengekstraksi hasil AI yang paling relevan dengan konteks."
    },
    "vr": {
        book: "Virtual Field Trips memungkinkan murid mengunjungi tempat yang mustahil dikunjungi (Luar Angkasa/Mars) dari dalam kelas.",
        lit: "Immersive Learning terbukti meningkatkan retensi memori jangka panjang hingga 75% dibandingkan metode tradisional."
    },
    "storytelling": {
        book: "Manusia belajar melalui cerita. Guru yang pandai bercerita jauh lebih efektif menyampaikan konsep sulit.",
        lit: "Neuroscience menunjukkan bahwa narasi memicu pelepasan oksitosin dan dopamin yang meningkatkan fokus dan keterikatan siswa."
    },
    "rpp": {
        book: "Gunakan AI untuk draft awal RPP, lalu sesuaikan dengan konteks murid Anda menggunakan prinsip Differentiated Instruction.",
        lit: "Prinsip 'Everything is on Purpose' (Quantum Teaching) menuntut setiap langkah RPP memiliki tujuan pedagogis yang jelas."
    },
    "metakognisi": {
        book: "Mengajarkan murid untuk 'berpikir tentang cara mereka berpikir' (Bab 3).",
        lit: "Metakognisi adalah kunci kemandirian belajar (Self-Regulated Learning) yang didukung oleh literatur psikologi kognitif modern."
    },
    "bloom": {
        book: "Penerapan Taksonomi Bloom dalam evaluasi berdiferensiasi dijelaskan di Bab 8.",
        lit: "Revisi Taksonomi Bloom menempatkan 'Creating' sebagai tingkat kognitif tertinggi, sejalan dengan proyek STEM dan Design Thinking."
    }
};

// Structured book chapters for search (comprehensive)
const bookChapters = [
    {
        bab: 1,
        title: "Membangun Mindset Guru Quantum",
        keywords: ["mindset", "guru quantum", "growth mindset", "fixed mindset", "carol dweck", "refleksi diri", "lifelong learning", "adaptasi", "zona nyaman", "pola pikir", "inovator", "fasilitator", "motivator"],
        content: "Mindset Guru Quantum adalah pola pikir yang memadukan kearifan lokal dengan inovasi global. Seperti partikel quantum yang bisa berada di banyak tempat sekaligus, guru quantum juga harus bisa 'berada' di banyak peran: sebagai fasilitator, motivator, inovator, dan bahkan entertainer dalam kelas.",
        detail: "Ciri-ciri guru quantum: selalu haus pengetahuan baru, melihat tantangan sebagai peluang, tidak takut mencoba metode baru, memperlakukan setiap murid sebagai individu unik, mampu beradaptasi dengan teknologi. Penelitian Carol Dweck tentang Growth Mindset menunjukkan bahwa orang dengan growth mindset lebih berhasil dalam hidup.",
        literatur: "Penelitian dari Stanford University oleh Carol Dweck menunjukkan bahwa growth mindset mendorong ketahanan, adaptasi, dan keberhasilan jangka panjang."
    },
    {
        bab: 2,
        title: "Deep Teaching - Mengajar dari Hati ke Hati",
        keywords: ["deep teaching", "empati", "storytelling", "socratic questioning", "bercerita", "koneksi emosional", "dari hati", "mengajar", "surface teaching", "jigsaw"],
        content: "Deep Teaching adalah pendekatan yang menekankan pemahaman mendalam dan koneksi emosional. Ini bukan sekadar transfer materi, tapi transformasi jiwa.",
        detail: "Kunci utama: Empati (memahami perspektif murid sebelum mengajar), Storytelling (seni bercerita yang efektif menyampaikan konsep sulit), Socratic Questioning (teknik bertanya yang memicu pemikiran kritis — hindari pertanyaan Ya/Tidak, gunakan 'Mengapa' dan 'Bagaimana').",
        literatur: "Kontras dengan 'Surface Teaching' (Marton & Säljö). Neuroscience menunjukkan bahwa narasi/storytelling memicu pelepasan oksitosin dan dopamin yang meningkatkan fokus dan keterikatan siswa."
    },
    {
        bab: 3,
        title: "Deep Learning - Membuat Siswa Belajar Lebih Dalam",
        keywords: ["deep learning", "belajar mendalam", "surface learning", "metakognisi", "problem based learning", "pbl", "inquiry", "hafalan", "pemahaman", "berpikir", "konstruksi", "mandiri"],
        content: "Deep Learning adalah proses di mana murid aktif mengkonstruksi pemahaman mereka sendiri. Surface Learning berfokus pada hafalan jangka pendek untuk ujian, sedangkan Deep Learning berfokus pada pemahaman untuk aplikasi nyata.",
        detail: "Metakognisi: mengajarkan murid untuk 'berpikir tentang cara mereka berpikir' — ini membantu mereka menjadi pembelajar mandiri seumur hidup. Strategi PBL & Inquiry: berikan masalah nyata yang menantang, biarkan mereka berkolaborasi dan mencari solusi sendiri dengan bimbingan guru.",
        literatur: "Penelitian Marton & Säljö (1976) menunjukkan bahwa surface approach dipicu oleh tuntutan eksternal dan beban materi terlalu padat. Metakognisi adalah kunci kemandirian belajar (Self-Regulated Learning)."
    },
    {
        bab: 4,
        title: "STEM Education - Mempersiapkan Generasi Masa Depan",
        keywords: ["stem", "science", "technology", "engineering", "mathematics", "design thinking", "prototipe", "proyek", "interdisiplin", "hands-on", "real problems"],
        content: "STEM bukan sekadar mata pelajaran, tapi sebuah pendekatan untuk memecahkan masalah menggunakan integrasi berbagai disiplin ilmu.",
        detail: "Design Thinking dalam STEM: Empathy → Define → Ideate → Prototype → Test. STEM untuk Non-Sains: bisa diterapkan di Bahasa Indonesia atau IPS melalui analisis data sosial, pembuatan media digital, atau perencanaan proyek komunitas.",
        literatur: "Praktek terbaik global menekankan Interdisciplinary Curriculum dan Authentic Project-Based Learning (PBL) untuk membangun skill abad-21."
    },
    {
        bab: 5,
        title: "Teknologi dalam Pembelajaran Modern",
        keywords: ["teknologi", "lms", "google classroom", "moodle", "canva", "genially", "gamifikasi", "quizizz", "kahoot", "aplikasi", "digital", "kolaborasi", "interaktif"],
        content: "Teknologi adalah alat (tools), bukan pengganti guru. Kuncinya adalah bagaimana teknologi meningkatkan interaksi, bukan menjauhkannya.",
        detail: "LMS: Google Classroom & Moodle untuk manajemen materi yang rapi. Visual & Interaktif: Canva & Genially meningkatkan retensi informasi hingga 65%. Gamifikasi: Quizizz & Kahoot meningkatkan dopamin dan motivasi intrinsik siswa.",
        literatur: "Literatur menunjukkan bahwa visual yang menarik meningkatkan retensi informasi hingga 65% dibandingkan teks biasa."
    },
    {
        bab: 6,
        title: "Virtual Reality (VR) & Augmented Reality (AR)",
        keywords: ["vr", "ar", "virtual reality", "augmented reality", "immersive", "field trip", "cardboard", "headset", "3d", "simulasi", "luar angkasa", "mars"],
        content: "VR membawa murid ke tempat yang tidak bisa mereka kunjungi (seperti luar angkasa atau dalam sel tubuh), sementara AR menambahkan lapisan informasi ke dunia nyata.",
        detail: "Virtual Field Trips: mengunjungi Museum Louvre atau Mars tanpa meninggalkan kelas. Low-Cost VR: Google Cardboard atau headset terjangkau dengan smartphone. Banyak aplikasi gratis tersedia di store.",
        literatur: "Immersive Learning terbukti meningkatkan retensi memori jangka panjang hingga 75% dibandingkan metode tradisional."
    },
    {
        bab: 7,
        title: "Artificial Intelligence (AI) untuk Efisiensi Guru",
        keywords: ["ai", "artificial intelligence", "chatgpt", "prompt", "prompt engineering", "rpp", "gamma", "canva magic", "efisiensi", "otomatis", "asisten", "kopilot"],
        content: "AI bukan musuh, tapi asisten pribadi yang sangat cerdas. Guru bisa menghemat waktu administrasi hingga 30-50% menggunakan AI.",
        detail: "Prompt Engineering: seni memberikan perintah ke AI. Contoh: 'Buatlah RPP 1 lembar untuk topik Fotosintesis kelas 5 dengan aktivitas STEM.' Gamma & Canva Magic untuk membuat slide dan modul ajar otomatis.",
        literatur: "Literatur modern menyarankan 'Human-in-the-loop', di mana AI sebagai kopilot namun keputusan pedagogis tetap di tangan guru."
    },
    {
        bab: 8,
        title: "Differentiated Instruction (DI)",
        keywords: ["diferensiasi", "differentiated", "tomlinson", "bloom", "taksonomi", "gaya belajar", "learning styles", "inklusif", "personalized", "konten", "proses", "produk"],
        content: "Setiap anak adalah bintang yang bersinar dengan caranya sendiri. DI memastikan tidak ada anak yang tertinggal karena gaya belajarnya berbeda.",
        detail: "Diferensiasi Konten, Proses, & Produk: berikan pilihan materi, metode belajar, dan cara mereka menunjukkan pemahaman (video, tulisan, atau proyek). Framework Carol Ann Tomlinson (2001): modifikasi 4 elemen.",
        literatur: "Carol Ann Tomlinson adalah pelopor Differentiated Instruction dengan fokus pada kesiapan (readiness), minat, dan profil belajar siswa. Revisi Taksonomi Bloom menempatkan 'Creating' sebagai tingkat kognitif tertinggi."
    },
    {
        bab: 9,
        title: "Menjadi Agen Perubahan",
        keywords: ["agen perubahan", "komunitas", "leadership", "networking", "inspirasi", "praktik baik", "budaya inovasi", "sustainability", "kolaborasi guru", "rekan sejawat"],
        content: "Anda sudah memiliki alatnya. Sekarang saatnya bergerak. Menjadi guru quantum berarti menjadi obor yang menerangi jalan bagi orang lain.",
        detail: "Membangun Komunitas Belajar: jangan bergerak sendiri. Ajak rekan sejawat, berbagi praktik baik, dan ciptakan budaya inovasi di sekolah Anda.",
        literatur: "Community of Practice (Wenger) menekankan bahwa pertumbuhan profesional terjadi dalam konteks sosial dan kolaboratif."
    }
];

// Search book chapters for relevant content
function searchBookChapters(query) {
    const q = query.toLowerCase();
    const words = q.split(/\s+/).filter(w => w.length > 2);
    let bestMatch = null;
    let bestScore = 0;

    for (const chapter of bookChapters) {
        let score = 0;

        // Check keyword matches (highest weight)
        for (const keyword of chapter.keywords) {
            if (q.includes(keyword)) {
                score += 10;
            }
        }

        // Check individual words against keywords
        for (const word of words) {
            for (const keyword of chapter.keywords) {
                if (keyword.includes(word) || word.includes(keyword)) {
                    score += 3;
                }
            }
        }

        // Check title match
        if (chapter.title.toLowerCase().includes(q) || q.includes(chapter.title.toLowerCase())) {
            score += 15;
        }

        // Check word matches in title
        for (const word of words) {
            if (chapter.title.toLowerCase().includes(word)) {
                score += 2;
            }
        }

        // Check content & detail text
        for (const word of words) {
            if (chapter.content.toLowerCase().includes(word)) score += 1;
            if (chapter.detail.toLowerCase().includes(word)) score += 1;
        }

        if (score > bestScore) {
            bestScore = score;
            bestMatch = chapter;
        }
    }

    // Minimum score threshold to consider it a match
    return bestScore >= 5 ? bestMatch : null;
}

// Helper: Call Gemini API
async function callGemini(systemInstruction, userPrompt) {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) return null;

    const geminiResponse = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
            system_instruction: {
                parts: [{ text: systemInstruction }]
            },
            contents: [{
                parts: [{ text: userPrompt }]
            }],
            generationConfig: {
                temperature: 0.7,
                topP: 0.9,
                topK: 40,
                maxOutputTokens: 1024
            }
        },
        {
            headers: { 'Content-Type': 'application/json' },
            timeout: 30000
        }
    );

    return geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

// Book context for Gemini
const allBookContext = bookChapters.map(ch => 
    `BAB ${ch.bab}: ${ch.title}\n${ch.content}\n${ch.detail}\nLiteratur: ${ch.literatur}`
).join('\n\n');

// ===== MAIN CHAT ENDPOINT =====
app.post('/api/chat', async (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
        return res.json({
            answer: "Maaf, QuantumGuide AI belum dikonfigurasi. Silakan hubungi administrator. 🔧",
            source: 'default',
            model: 'Offline'
        });
    }

    // Cari bab yang paling relevan (untuk konteks tambahan)
    const bookMatch = searchBookChapters(query);

    // Bangun system instruction
    let systemInstruction = `Kamu adalah "QuantumGuide AI", asisten cerdas dan hangat yang merupakan AI pendamping buku "Neo Quantum Miracle Teaching" karya Sardin Damis, S.Kom., C.Ht., CT.NNLP., CI (BNSP-RI).

ATURAN UTAMA:
1. JAWAB PERTANYAAN DENGAN TEPAT SASARAN sesuai apa yang ditanyakan pengguna. Jangan hanya menjelaskan definisi umum — berikan contoh konkret, langkah praktis, atau penerapan nyata jika diminta.
2. Gunakan konten buku sebagai DASAR jawaban. Jika topik dibahas di buku, awali dengan "📖 **Menurut Buku (Bab X):**" lalu berikan jawaban dari buku.
3. Setelah menjawab dari buku, PERKUAT jawabannya dengan "🧠 **Penguatan QuantumGuide AI:**" — tambahkan contoh praktis, elaborasi mendalam, atau wawasan pendidikan modern yang relevan.
4. Jika pertanyaan TIDAK dibahas di buku, jawab dengan pengetahuanmu sendiri secara informatif, lalu hubungkan ke topik relevan di buku jika memungkinkan.
5. Gunakan bahasa Indonesia yang hangat, profesional, dan mudah dipahami guru/pendidik.
6. Gunakan **bold** untuk poin penting, daftar bernomor/bullet untuk langkah-langkah, dan emoji secukupnya.
7. JANGAN pernah menyebut Google, Gemini, atau bahwa kamu AI model tertentu. Kamu adalah "QuantumGuide AI".`;

    // Jika ada bab yang relevan, fokuskan ke bab tersebut
    if (bookMatch) {
        console.log(`[Chat] Relevan dengan Bab ${bookMatch.bab}: "${bookMatch.title}"`);
        systemInstruction += `

KONTEKS PRIORITAS — BAB ${bookMatch.bab}: ${bookMatch.title}
${bookMatch.content}
${bookMatch.detail}
Referensi Literatur: ${bookMatch.literatur}`;
    }

    // Selalu sertakan konteks semua bab
    systemInstruction += `

SELURUH KONTEN BUKU (9 BAB):
${allBookContext}`;

    try {
        const aiText = await callGemini(systemInstruction, query);

        if (aiText) {
            const source = bookMatch ? 'hybrid' : 'gemini';
            const model = bookMatch ? `Bab ${bookMatch.bab} + Gemini AI` : 'Gemini 2.5 Flash';
            return res.json({ answer: aiText, source, model });
        }
    } catch (error) {
        console.error("[Gemini] API Error:", error.response?.data || error.message);
    }

    // Gemini gagal → fallback
    return res.json({
        answer: "Maaf, saat ini saya sedang mengalami gangguan teknis. 🔧 Silakan coba lagi dalam beberapa saat, atau tanyakan tentang topik utama buku seperti **Deep Teaching**, **Deep Learning**, **STEM**, **VR/AR**, **AI untuk Guru**, atau **Differentiated Instruction**! 📚",
        source: 'default',
        model: 'Knowledge Base'
    });
});

// Helper: Generate STEM Blueprint Data
function generateSTEMModuleData({ subject, topic, grade, cp }) {
    const t = topic || "Energi Terbarukan & Teknologi Ramah Lingkungan";
    const s = subject || "IPAS / Sains Rekayasa";
    const g = grade || "SMP Kelas 8";
    const c = cp || `Peserta didik mampu menerapkan prinsip ilmiah ${s} dan pemikiran rekayasa (Engineering Design Process) untuk merancang solusi kontekstual atas permasalahan ${t} di lingkungan masyarakat.`;

    return {
        topic: t,
        subject: s,
        grade: g,
        cp: c,
        timeAllocation: "3 Pertemuan (6 x 40 menit)",
        modelIntegration: "Integrasi Problem-Based Learning (PBL) & Project-Based Learning (PjBL) Berbasis STEM EDP",
        pillars: {
            science: `Memahami dan menganalisis hukum-hukum sains dasar, prinsip fisika/biologi/kimia, serta teori transformasi energi yang melandasi fenomena ${t} dalam mata pelajaran ${s}.`,
            technology: `Memanfaatkan alat instrumen ukur digital (multimeter/sensor), perangkat lunak simulasi sirkuit/desain 3D, aplikasi data spreadsheet, serta alat bantu digital pendukung analisis proyek ${t}.`,
            engineering: `Menerapkan tahapan Engineering Design Process (EDP): merancang blueprint sketsa teknis, merakit prototipe rekayasa, melakukan pengujian mekanis, serta melakukan perbaikan (iterasi desain) pada model ${t}.`,
            mathematics: `Mengaplikasikan perhitungan numerik presisi, rumus matematis terapan, analisis rasio/skala, penyajian grafik variabel data hasil uji coba, serta kalkulasi estimasi anggaran biaya pembuatan ${t}.`
        },
        narrativeHook: {
            title: `Studi Kasus Kontekstual: Tantangan Solusi Inovatif ${t} di Komunitas Lokal`,
            scenario: `Di lingkungan sekitar kita, masyarakat dan komunitas sekolah menghadapi permasalahan nyata terkait efisiensi dan keberlanjutan ${t}. Kurangnya teknologi ramah lingkungan yang hemat biaya menyebabkan dampak negatif pada kehidupan sehari-hari. Kelompok kalian ditantang untuk bertindak sebagai Tim Insinyur Muda yang bertugas merancang, membangun, dan mempublikasikan prototipe rekayasa berbahan terjangkau sebagai solusi atas masalah ${t} tersebut.`,
            drivingQuestions: [
                `Bagaimana kita dapat menerapkan konsep sains ${s} untuk merancang solusi teknologi yang mengatasi masalah ${t}?`,
                `Desain rekayasa seperti apa yang paling efisien dan kokoh setelah diuji secara berulang menggunakan EDP?`,
                `Bagaimana data matematika dan analisis statistik dapat membuktikan bahwa prototipe karya kalian layak dan bermanfaat?`
            ]
        },
        syntaxFlow: [
            {
                session: 1,
                phase: "Fase 1: Orientasi Masalah (PBL) & Ask (EDP)",
                pblPhase: "Orientasi Siswa pada Masalah Kontekstual",
                edpStage: "Ask (Identifikasi Masalah & Kriteria)",
                activities: `Siswa mengamati tayangan krisis/masalah kontekstual ${t}, mengidentifikasi batasan proyek (waktu, alat, bahan), dan merumuskan kriteria keberhasilan prototipe.`
            },
            {
                session: 2,
                phase: "Fase 2: Mengorganisasi Kelompok & Imagine (EDP)",
                pblPhase: "Mengorganisasi Belajar Kelompok",
                edpStage: "Imagine (Eksplorasi Ide Solusi)",
                activities: `Siswa melakukan studi literatur/riset sains tentang ${s}, mengeksplorasi minimal 3 gagasan ide solusi rekayasa, dan memilih 1 rancangan terbaik secara kolaboratif.`
            },
            {
                session: 3,
                phase: "Fase 3: Membimbing Penyelidikan & Plan (EDP)",
                pblPhase: "Membimbing Penyelidikan Kelompok",
                edpStage: "Plan (Rancangan Sketsa & Blueprint)",
                activities: `Siswa menggambar sketsa blueprint teknis prototipe ${t}, menghitung dimensi ukuran matematika, menyusun daftar alat/bahan daur ulang, serta membagi peran tim.`
            },
            {
                session: 4,
                phase: "Fase 4: Mengembangkan Prototipe & Create (EDP)",
                pblPhase: "Pengembangan & Fabrikasi Karya (PjBL)",
                edpStage: "Create (Pembuatan & Perakitan)",
                activities: `Siswa merakit prototipe fisik ${t} sesuai sketsa dengan menerapkan prosedur keselamatan kerja (K3), mencatat alur perakitan, dan mengatasi kendala fisik.`
            },
            {
                session: 5,
                phase: "Fase 5: Pengujian Data & Test/Improve (EDP)",
                pblPhase: "Pengujian, Analisis Data & Perbaikan",
                edpStage: "Test & Improve (Uji Coba & Iterasi)",
                activities: `Siswa menguji performa prototipe ${t} dengan variabel pengukur (multimeter/sensor), mencatat data uji pada tabel matematika, dan melakukan perbaikan desain (revisi V2).`
            },
            {
                session: 6,
                phase: "Fase 6: Evaluasi & Share (EDP)",
                pblPhase: "Pameran Karya (Exhibition) & Refleksi",
                edpStage: "Share (Presentasi & Publikasi)",
                activities: `Siswa mempresentasikan prototipe ${t} di depan kelas/STEM Exhibition, menjawab pertanyaan pemantik, serta melakukan refleksi autentik atas seluruh alur proyek.`
            }
        ],
        lkpdEdp: {
            title: `LEMBAR KERJA PESERTA DIDIK (LKPD) - ENGINEERING DESIGN PROCESS (EDP)`,
            projectTitle: `Proyek Rekayasa STEM: ${t}`,
            steps: [
                {
                    code: "TAHAP 1",
                    title: "ASK (Tanyakan & Identifikasi Masalah)",
                    prompts: [
                        "Apa masalah utama yang sedang terjadi terkait topik ini?",
                        "Apa kriteria keberhasilan prototipe yang harus dicapai kelompokmu?",
                        "Apa batasan alat, bahan, anggaran biaya, dan alokasi waktu yang tersedia?"
                    ]
                },
                {
                    code: "TAHAP 2",
                    title: "IMAGINE (Bayangkan & Eksplorasi Solusi)",
                    prompts: [
                        "Tuliskan 3 alternatif rancangan solusi hasil diskusi kelompok:",
                        "Solusi mana yang paling berpeluang sukses dan efisien?",
                        "Sebutkan alasan scientific / ilmiah di balik pemilihan solusi tersebut!"
                    ]
                },
                {
                    code: "TAHAP 3",
                    title: "PLAN (Rencanakan & Buat Blueprint Sketsa)",
                    prompts: [
                        "Gambarlah sketsa blueprint prototipe (Lengkapi dengan dimensi ukuran & nama komponen):",
                        "Rincian Alat & Bahan yang dibutuhkan beserta taksirannya:",
                        "Jadwal kerja dan pembagian tugas masing-masing anggota kelompok:"
                    ]
                },
                {
                    code: "TAHAP 4",
                    title: "CREATE (Buat & Fabrikasi Prototipe)",
                    prompts: [
                        "Tuliskan langkah-langkah nyata proses perakitan prototipe:",
                        "Kendala teknis apa yang ditemukan saat merakit komponen?",
                        "Bagaimana cara kelompok mengatasi kendala teknis tersebut?"
                    ]
                },
                {
                    code: "TAHAP 5",
                    title: "TEST & IMPROVE (Uji Coba & Perbaikan Desain)",
                    prompts: [
                        "Catat data hasil uji coba pada tabel pengukuran (Pengujian 1, 2, dan 3):",
                        "Apakah prototipe sudah memenuhi kriteria kinerjanya? Jelaskan bukti angkanya!",
                        "Apa perbaikan atau revisi desain yang dilakukan untuk menyempurnakan prototipe?"
                    ]
                },
                {
                    code: "TAHAP 6",
                    title: "SHARE (Bagikan & Refleksi Karya)",
                    prompts: [
                        "Rangkum 3 poin utama yang akan disampaikan saat presentasi pameran STEM:",
                        "Apa pelajaran sains, teknologi, rekayasa, dan matematika paling berharga yang kalian dapatkan?",
                        "Inovasi lanjutan apa yang bisa ditambahkan jika proyek ini dikembangkan lebih jauh?"
                    ]
                }
            ]
        },
        assessments: {
            formative: "Observasi keaktifan diskusi kelompok, keterlibatan riset, jurnal harian LKPD EDP, dan progres perakitan.",
            summative: "Uji performa prototipe fisik, keakuratan laporan data matematika/sains, dan pameran presentasi karya (STEM Exhibition).",
            rubric: [
                {
                    criteria: "1. Penalaran Kritis & Problem Solving (PBL)",
                    weight: "25%",
                    levels: {
                        1: "Kurang mampu mengidentifikasi masalah kontekstual; ide solusi tidak terstruktur.",
                        2: "Mengidentifikasi masalah secara terbatas; solusi kurang relevan dengan kriteria.",
                        3: "Mampu merumuskan masalah kontekstual dengan jelas dan merancang solusi rasional.",
                        4: "Sangat analitis dalam membedah krisis kontekstual dan menghasilkan solusi inovatif."
                    }
                },
                {
                    criteria: "2. Desain Rekayasa & Kualitas Prototipe (PjBL / EDP)",
                    weight: "30%",
                    levels: {
                        1: "Prototipe tidak dapat berfungsi; sketsa blueprint tidak dibuat dengan jelas.",
                        2: "Prototipe berfungsi sebagian; perakitan kurang kokoh dan kurang rapi.",
                        3: "Prototipe berfungsi baik, kokoh, dan sesuai dengan sketsa perencanaan awal.",
                        4: "Prototipe sangat presisi, fungsionalitas optimal, estetik, dan memiliki tingkat efisiensi tinggi."
                    }
                },
                {
                    criteria: "3. Integrasi Sains & Kalkulasi Matematika",
                    weight: "25%",
                    levels: {
                        1: "Belum mampu menjelaskan prinsip sains dasar dan perhitungan matematika proyek.",
                        2: "Penjelasan sains terbatas; terdapat kesalahan dalam pengolahan data matematika.",
                        3: "Menerapkan hukum sains dengan benar dan kalkulasi data matematika akurat.",
                        4: "Sangat mahir mengintegrasikan konsep sains terapan dan pemodelan data matematika presisi."
                    }
                },
                {
                    criteria: "4. Kolaborasi Tim & Presentasi Autentik",
                    weight: "20%",
                    levels: {
                        1: "Kerja sama tim tidak terlihat; penyampaian presentasi pasif dan tidak siap.",
                        2: "Sebagian anggota mendominasi; penyampaian presentasi kurang runtut.",
                        3: "Semua anggota berpartisipasi aktif; presentasi disampaikan secara komunikatif dan jelas.",
                        4: "Kolaborasi kelompok sangat solid; presentasi persuasif, interaktif, dan mempertahankan argumen dengan tepat."
                    }
                }
            ]
        },
        differentiation: {
            content: "Menyediakan artikel rujukan bertingkat, video animasi simulasi sirkuit/mekanisme 3D, infografis visual, serta modul pengayaan konsep sains lanjutan bagi siswa bereksplorasi tinggi.",
            process: "Memberikan panduan bertahap (scaffolding checklist) bagi siswa yang butuh bantuan ekstra, serta tantangan tambahan pengoptimalan efisiensi bagi kelompok fast learners.",
            product: "Siswa diberi kebebasan memilih bentuk penyampaian produk akhir: prototipe fisik nyata, maket simulasi 3D, video dokumenter alur perakitan, atau poster infografis digital."
        },
        safetyNotes: [
            "🚨 Penggunaan Alat Tajam & Pemotong: Selalu berhati-hati saat menggunakan cutter, gunting, atau tang potong. Gunakan alas potong khusus.",
            "⚡ Keselamatan Arus Listrik & Komponen Pemanas: Batasi sumber arus listrik maksimal DC 12V. Penggunaan solder / lem tembak wajib dalam pengawasan guru.",
            "👓 Perlindungan Diri (K3): Gunakan kacamata pelindung (goggles) dan sarung tangan saat memotong atau membengkokkan material keras.",
            "🧹 Protokol Kebersihan & Tanggap Darurat: Bersihkan area kerja setelah eksperimen, pilah sisa material daur ulang, dan pahami letak kotak P3K kelas/laboratorium."
        ],
        materials: [
            "Perangkat Komputer / Tablet untuk riset & pencatatan data spreadsheet",
            "Bahan Daur Ulang & Material Konstruksi (Stik es krim, kardus bekas, botol plastik, pipa PVC mini)",
            "Komponen Elektronika / Mekanis Sederhana (Dinamo DC mini, lampu LED, kabel, sakelar, solar sel mini)",
            "Alat Ukur Presisi (Penggaris, multimeter digital, timbangan digital, stopwatch)",
            "Alat Perekat & Pemotong (Lem tembak, cutter safety, gunting, isolasi listrik)",
            "Aplikasi Dokumentasi (Canva, Google Slides, atau video editor ponsel untuk presentasi)"
        ]
    };
}

app.post('/api/tools/stem', async (req, res) => {
    const { subject, topic, grade, cp } = req.body;
    
    // Attempt Gemini call if API key exists
    try {
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        if (GEMINI_API_KEY) {
            const systemPrompt = `Kamu adalah Pakar Kurikulum STEM & Quantum Teaching. Buatkan JSON modul proyek STEM terintegrasi PBL (Problem-Based Learning) & PjBL (Project-Based Learning) dengan 4 Pilar STEM, Capaian Pembelajaran (CP), Narrative Hook, LKPD EDP (Engineering Design Process), Rubrik Assessment Autentik (skala 1-4), Differentiation Notes, dan Safety Notes. Keluaran WAJIB berupa objek JSON valid sesuai bidang berikut:
            topic, subject, grade, cp, timeAllocation, modelIntegration, pillars { science, technology, engineering, mathematics }, narrativeHook { title, scenario, drivingQuestions [] }, syntaxFlow [ { session, phase, pblPhase, edpStage, activities } ], lkpdEdp { title, projectTitle, steps [ { code, title, prompts [] } ] }, assessments { formative, summative, rubric [ { criteria, weight, levels { 1, 2, 3, 4 } } ] }, differentiation { content, process, product }, safetyNotes [], materials []. JANGAN menyertakan markdown backticks di luar JSON.`;

            const userPrompt = `Mata Pelajaran: ${subject || 'IPAS/Sains'}\nTopik/Materi: ${topic || 'Energi Terbarukan'}\nJenjang: ${grade || 'SMP'}\nCapaian Pembelajaran (CP): ${cp || 'Peserta didik memahami konsep sains dan merancang prototipe rekayasa.'}`;

            const geminiRaw = await callGemini(systemPrompt, userPrompt);
            if (geminiRaw) {
                const cleanJsonStr = geminiRaw.replace(/```json/gi, '').replace(/```/g, '').trim();
                const parsed = JSON.parse(cleanJsonStr);
                return res.json(parsed);
            }
        }
    } catch (err) {
        console.log("[STEM Generator] Gemini fallback to local generator:", err.message);
    }

    // Fallback local generator
    const data = generateSTEMModuleData({ subject, topic, grade, cp });
    res.json(data);
});


// Helper: Generate Modul Ajar Deep Teaching Data
function generateModulAjarData({ name, school, subject, topic, grade, phase, time, model, profil, cp }) {
    const n = name || "Tim Guru Quantum";
    const sch = school || "Sekolah Neo Quantum";
    const s = subject || "Matematika / IPA / Bahasa Indonesia";
    const t = topic || "Pemecahan Masalah Kontekstual & Penalaran Kritis";
    const g = grade || "Kelas VIII (SMP)";
    const ph = phase || "Fase D";
    const tm = time || "2 Pertemuan (4 x 40 menit)";
    const m = model || "Deep Teaching & Deep Learning (Integrasi Socratic Questioning & Experiential Learning)";
    const pr = (profil && profil.length > 0) ? profil : ["Penalaran Kritis (Critical Thinking)", "Kreativitas (Creativity)", "Kolaborasi (Collaboration)", "Kemandirian (Self-Regulation)"];
    const targetCP = cp || `Peserta didik mampu menganalisis konsep ${s} secara mendalam dan merancang solusi kreatif atas fenomena ${t} dalam kehidupan sehari-hari.`;

    return {
        informasiUmum: {
            identitas: {
                penyusun: n,
                institusi: sch,
                tahun: "2026",
                jenjang: g,
                kelasFase: `${g} - ${ph}`,
                alokasiWaktu: tm,
                mataPelajaran: s,
                topikMateri: t
            },
            kompetensiAwal: `Peserta didik telah memiliki pengetahuan dasar mengenai konsep ${s} awal dan memiliki keterampilan observasi mendalam sebelum mempelajari ${t}.`,
            profilPelajar: pr,
            saranaPrasarana: "Laptop, Projector, Media Interaktif VR/AR, Lembar Kerja LKPD, Alat Peraga Konseptual, Buku Teks, dan Jaringan Internet.",
            targetPesertaDidik: "Peserta Didik Reguler / Tipikal (30 Siswa) dengan pendampingan Scaffolding bagi siswa kesulitan belajar dan Pengayaan Tantangan bagi Fast Learners.",
            modelPembelajaran: m
        },
        komponenInti: {
            tujuanPembelajaran: [
                `Melalui investigasi dan observasi mendalam, peserta didik mampu menganalisis konsep ${t} pada mata pelajaran ${s} dengan akurasi min. 85%.`,
                `Melalui diskusi Socratic Questioning, peserta didik mampu menyampaikan gagasan kritis dan korelasi materi ${t} dengan kehidupan sehari-hari.`,
                `Melalui proyek kolaboratif kelompok, peserta didik mampu mempresentasikan solusi bermakna atas studi kasus ${t}.`
            ],
            pemahamanBermakna: `Pemahaman mendalam mengenai ${t} membantu peserta didik menyadari bahwa konsep ${s} bukan sekadar hafalan teori, melainkan instrumen logis untuk memecahkan masalah nyata dan mengambil keputusan bijak dalam kehidupan sehari-hari.`,
            pertanyaanPemantik: [
                `Bayangkan jika konsep ${t} belum pernah ditemukan oleh manusia, bagaimana dampak langsungnya terhadap kehidupan kalian hari ini?`,
                `Mengapa fenomena ${t} ini bisa terjadi dan apa prinsip sains/logika paling mendasar di balik proses tersebut?`,
                `Bagaimana kalian dapat memanfaatkan pengetahuan tentang ${t} ini untuk membantu memecahkan masalah di sekitar lingkungan sekolah atau rumah?`
            ],
            kegiatanPembelajaran: {
                pendahuluan: [
                    "Pengondisian kelas ramah & kondusif (Mindful Greeting & Quantum Presence) untuk membangun rasa aman belajar.",
                    `Apersepsi & Mindful Hook: Guru menyampaikan narasi studi kasus kontekstual terkait ${t} yang menggugah emosi dan empati siswa.`,
                    "Penyampaian Tujuan Pembelajaran, Gambaran Alur Pembelajaran Mendalam, dan Kesepakatan Kelas."
                ],
                inti: [
                    `Eksplorasi Konsep (Deep Understanding): Siswa mengamati tayangan/media interaktif mengenai ${t} dan mengidentifikasi fenomena kunci.`,
                    "Diskusi Socratic Questioning: Guru melontarkan pertanyaan provokatif yang memicu pemikiran tingkat tinggi (HOTS).",
                    "Investigasi Kelompok (Experiential Learning): Siswa bekerja dalam kelompok heterogen membedah LKPD dan melakukan pengumpulan data.",
                    "Elaborasi & Pembuatan Karya: Kelompok merumuskan simpulan ilmiah dan merancang media presentasi kreatif."
                ],
                penutup: [
                    "Refleksi Metakognisi: Siswa menyampaikan 3 hal baru yang dipahami, 2 hal yang paling menarik, dan 1 pertanyaan tersisa.",
                    "Umpan Balik Guru (Feedback From the Heart) serta apresiasi tinggi atas kolaborasi dan keberanian siswa bertanya.",
                    "Informasi penugasan mandiri terstruktur dan arahan persiapan pertemuan pembelajaran berikutnya."
                ]
            },
            rencanaAsesmen: {
                diagnostik: "Asesmen Diagnostik Non-Kognitif (Gaya Belajar & Minat) dan Diagnostik Kognitif Awal (3 soal pemetaan pemahaman prasyarat).",
                formatif: "Observasi sikap karakter (Profil Pelajar), jurnal observasi diskusi kelompok, lembar ceklist LKPD, serta umpan balik lisan bertahap.",
                sumatif: "Uji Pemahaman Konsep (Tes Tertulis HOTS) dan Evaluasi Produk / Presentasi Karya di akhir modul."
            },
            pengayaanRemedial: {
                pengayaan: `Pemberian materi tantangan pengayaan tingkat lanjut mengenai aplikasi ${t} di industri modern atau peran sebagai tutor sebaya bagi rekan kelompok.`,
                remedial: `Bimbingan khusus secara bertahap (Scaffolding) pada indikator kompetensi yang belum tuntas, diikuti uji pemahaman ulang terfokus.`
            }
        },
        komponenLampiran: {
            lkpd: {
                title: `LEMBAR KERJA PESERTA DIDIK (LKPD) - DEEP LEARNING EXPERIENCE`,
                projectTitle: `Topik: ${t}`,
                instructions: "Bacalah setiap instruksi dengan cermat, kerjakan secara kolaboratif bersama kelompokmu, dan catat hasil analisismu pada kolom yang tersedia.",
                tasks: [
                    { step: "Aktivitas 1", title: "Orientasi & Identifikasi Masalah", activity: `Amati fenomena ${t} yang disajikan. Tuliskan 3 pertanyaan kritis dari hasil pengamatan kelompokmu!` },
                    { step: "Aktivitas 2", title: "Investigasi & Data Collection", activity: "Lakukan pengumpulan data eksperimen/literatur. Catatlah variabel temuan kelompok pada tabel berikut!" },
                    { step: "Aktivitas 3", title: "Analisis Mendalam & Pembuktian", activity: `Diskusikan korelasi antar-variabel data. Mengapa fenomena ${t} tersebut terjadi secara scientific?` },
                    { step: "Aktivitas 4", title: "Kesimpulan & Solusi Bermakna", activity: "Tuliskan kesimpulan utama kelompok dan rancanglah media presentasi karya yang komunikatif!" }
                ]
            },
            instrumenRubrik: {
                title: "INSTRUMEN & RUBRIK ASSESSMENT AUTENTIK MODUL AJAR",
                rubric: [
                    {
                        aspect: "1. Pemahaman Konsep & Penalaran Kritis",
                        weight: "35%",
                        levels: {
                            1: "Belum mampu menjelaskan konsep materi; argumen tidak didasari bukti.",
                            2: "Mampu menjelaskan konsep secara terbatas; argumen kurang lengkap.",
                            3: "Mampu menjelaskan konsep secara akurat dan memberikan argumen logis.",
                            4: "Sangat mahir menjelaskan konsep secara mendalam, kritis, dan mengorelasikan dengan fenomena nyata."
                        }
                    },
                    {
                        aspect: "2. Unjuk Kerja & Kualitas LKPD",
                        weight: "35%",
                        levels: {
                            1: "LKPD tidak diisi dengan lengkap; data eksperimen tidak akurat.",
                            2: "LKPD terisi sebagian; pengolahan data masih memerlukan banyak bimbingan.",
                            3: "LKPD terisi lengkap; pengolahan data tepat dan rapi.",
                            4: "LKPD terisi sangat sistematis; pengolahan data presisi dan disertai analisis komprehensif."
                        }
                    },
                    {
                        aspect: "3. Kolaborasi Tim & Presentasi Komunikatif",
                        weight: "30%",
                        levels: {
                            1: "Kurang terlibat dalam kelompok; penyampaian presentasi pasif.",
                            2: "Terlibat sebagian; penyampaian presentasi kurang runtut.",
                            3: "Berpartisipasi aktif dalam kelompok; presentasi komunikatif dan jelas.",
                            4: "Menunjukkan kepemimpinan positif; presentasi sangat persuasif, interaktif, dan merespons pertanyaan dengan tepat."
                        }
                    }
                ]
            },
            bahanBacaan: {
                untukGuru: `Buku Panduan Guru Kurikulum Merdeka ${s}, Buku Rujukan 'Neo Quantum Miracle Teaching' karya Sardin Damis (2026), Artikel Deep Teaching & Socratic Method.`,
                untukSiswa: `Buku Teks Utama Peserta Didik ${s}, Modul Ringkasan Bergambar ${t}, Infografis Visual, serta Artikel Populer Edukasi.`
            },
            glosarium: [
                { term: "Deep Teaching", definition: "Pendekatan mengajar berbasis hati dan pemahaman mendalam yang mengintegrasikan empati, storytelling, dan pemikiran kritis." },
                { term: "Deep Learning", definition: "Prosedur belajar bermakna di mana siswa tidak sekadar menghafal, melainkan memahami korelasi dan mengaplikasikan ilmu." },
                { term: "Socratic Questioning", definition: "Teknik bertanya provokatif untuk memancing siswa berpikir kritis dan menggali alasan mendasar di balik suatu konsep." },
                { term: "Metakognisi", definition: "Kesadaran dan pemahaman seseorang tentang proses berpikir dan cara belajarnya sendiri." }
            ],
            daftarPustaka: [
                "Damis, Sardin. (2026). Neo Quantum Miracle Teaching: Transformasi Pembelajaran Masa Depan. Jakarta: Quantum Press.",
                "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2024). Panduan Pembelajaran dan Asesmen Kurikulum Merdeka. Jakarta: Kemendikbudristek.",
                "Dweck, Carol S. (2017). Mindset: Changing The Way You Think To Fulfil Your Potential. London: Robinson."
            ]
        }
    };
}

app.post('/api/tools/planner', async (req, res) => {
    const { teacherName, schoolName, name, school, subject, topic, grade, phase, time, model, profil, cp } = req.body;
    const finalName = teacherName || name || "Tim Guru Quantum";
    const finalSchool = schoolName || school || "Sekolah Neo Quantum";
    
    // Attempt Gemini call if API key exists
    try {
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        if (GEMINI_API_KEY) {
            const systemPrompt = `Kamu adalah Pakar Kurikulum Merdeka & Deep Teaching. Buatkan JSON Modul Ajar Deep Teaching lengkap yang terdiri dari 3 bagian utama:
            1. informasiUmum { identitas { penyusun, institusi, tahun, jenjang, kelasFase, alokasiWaktu, mataPelajaran, topikMateri }, kompetensiAwal, profilPelajar [], saranaPrasarana, targetPesertaDidik, modelPembelajaran }
            2. komponenInti { tujuanPembelajaran [], pemahamanBermakna, pertanyaanPemantik [], kegiatanPembelajaran { pendahuluan [], inti [], penutup [] }, rencanaAsesmen { diagnostik, formatif, sumatif }, pengayaanRemedial { pengayaan, remedial } }
            3. komponenLampiran { lkpd { title, projectTitle, instructions, tasks [ { step, title, activity } ] }, instrumenRubrik { title, rubric [ { aspect, weight, levels { 1, 2, 3, 4 } } ] }, bahanBacaan { untukGuru, untukSiswa }, glosarium [ { term, definition } ], daftarPustaka [] }. JANGAN menyertakan markdown backticks di luar JSON.`;

            const userPrompt = `Nama Penyusun: ${finalName}\nSekolah: ${finalSchool}\nMata Pelajaran: ${subject || 'Matematika/IPA'}\nTopik: ${topic || 'Pemecahan Masalah'}\nKelas/Fase: ${grade || 'Kelas VIII'} ${phase || 'Fase D'}\nAlokasi Waktu: ${time || '2 Pertemuan'}\nModel: ${model || 'Deep Teaching'}\nProfil Pelajar: ${JSON.stringify(profil || [])}\nCP: ${cp || ''}`;

            const geminiRaw = await callGemini(systemPrompt, userPrompt);
            if (geminiRaw) {
                const cleanJsonStr = geminiRaw.replace(/```json/gi, '').replace(/```/g, '').trim();
                const parsed = JSON.parse(cleanJsonStr);
                return res.json(parsed);
            }
        }
    } catch (err) {
        console.log("[Modul Ajar Generator] Gemini fallback to local generator:", err.message);
    }

    // Fallback local generator
    const data = generateModulAjarData({ name: finalName, school: finalSchool, subject, topic, grade, phase, time, model, profil, cp });
    res.json(data);
});

app.post('/api/order', async (req, res) => {
    const { name, phone, email, payment } = req.body;
    
    if (!name || !phone || !email || !payment) {
        return res.status(400).json({ error: "Data tidak lengkap" });
    }

    const orderMessage = `*Terima kasih telah menghubungi admin Neo QMT.*\n\nHalo *${name}*! 👋\n\nSilahkan beri tahu apa yang bisa kami bantu atau lanjutkan pemesanan buku *Neo Quantum Miracle Teaching* Anda.\n\nDetail Pesanan:\n- Nama: ${name}\n- Email: ${email}\n- Metode: ${payment}\n\nSilakan melakukan pembayaran senilai:\n*Rp 95.900*\n\n_Pesan ini dikirim secara otomatis oleh Sistem Neo Quantum AI._`;

    let emailStatus = 'pending';
    let waStatus = 'pending';

    const FONNTE_TOKEN = process.env.FONNTE_TOKEN || "Piig8U6z7qGZvTiq1jaa";
    const SMTP_USER = process.env.SMTP_USER || "smicenter.motiva@gmail.com";
    const SMTP_PASS = process.env.SMTP_PASS || "uybk akue rilm stbg";

    // 1. Send Email via Nodemailer
    try {
        if (SMTP_USER && SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                port: parseInt(process.env.SMTP_PORT) || 465,
                secure: true,
                auth: {
                    user: SMTP_USER,
                    pass: SMTP_PASS
                }
            });

            await transporter.sendMail({
                from: `"Neo Quantum Miracle" <${SMTP_USER}>`,
                to: email,
                subject: "Instruksi Pembayaran Buku Neo Quantum Miracle Teaching",
                text: orderMessage.replace(/\*/g, ''),
                html: `
                    <div style="font-family:sans-serif; padding: 20px; color:#333; max-width:600px; margin:0 auto; border:1px solid #e2e8f0; border-radius:10px;">
                        <h2 style="color:#0ea5e9; text-align:center;">Verifikasi Pemesanan Buku</h2>
                        <p>Halo <strong>${name}</strong>,</p>
                        <p>Terima Kasih telah melakukan pemesanan buku fisik eksklusif <strong>Neo Quantum Miracle Teaching</strong>.</p>
                        <p>Sesuai pilihan metode pembayaran Anda (<strong>${payment}</strong>), silakan melakukan pembayaran senilai:</p>
                        <div style="background:#f1f5f9; padding: 20px; border-radius: 8px; font-size:28px; text-align:center; color:#0f172a; margin: 20px 0;">
                            <strong>Rp 95.900</strong>
                        </div>
                        <p style="margin-top:20px;">Sistem akan memverifikasi secara otomatis setelah pembayaran diterima.</p>
                        <hr style="border:0; border-top:1px solid #e2e8f0; margin:20px 0;">
                        <p style="font-size:12px; color:#94a3b8; text-align:center;">Pesan ini dikirim secara otomatis oleh Sistem Neo Quantum AI.</p>
                    </div>`
            });
            emailStatus = 'success';
        } else {
            console.log("[Email] Skipped: Kredensial tidak diatur di .env");
            emailStatus = 'skipped_no_credentials';
        }
    } catch (e) {
        console.error("Email Error:", e);
        emailStatus = 'failed';
    }

    // 2. Send WA via Fonnte API
    try {
        if (FONNTE_TOKEN) {
            await axios.post('https://api.fonnte.com/send', {
                target: phone,
                message: orderMessage,
                countryCode: '62' 
            }, {
                headers: {
                    'Authorization': FONNTE_TOKEN
                }
            });
            waStatus = 'success';
        } else {
            console.log("[WhatsApp] Skipped: FONNTE_TOKEN tidak diatur di .env");
            waStatus = 'skipped_no_token';
        }
    } catch (e) {
        console.error("WA API Error:", e.response ? e.response.data : e.message);
        waStatus = 'failed';
    }

    res.json({ success: true, email: emailStatus, whatsapp: waStatus });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server Neo Quantum QMT.AI berjalan di http://localhost:${PORT}`);
});
