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

// ===== MAIN CHAT ENDPOINT =====
app.post('/api/chat', async (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    // STEP 1: Crosscheck di semua BAB buku dulu
    const bookMatch = searchBookChapters(query);

    if (bookMatch) {
        console.log(`[Chat] Ditemukan di Bab ${bookMatch.bab}: "${bookMatch.title}" (book match)`);
        const bookAnswer = `**📖 BAB ${bookMatch.bab}: ${bookMatch.title}**\n\n${bookMatch.content}\n\n${bookMatch.detail}\n\n**📚 Rujukan Literatur:**\n${bookMatch.literatur}`;
        return res.json({
            answer: bookAnswer,
            source: 'book',
            model: `Bab ${bookMatch.bab} - ${bookMatch.title}`
        });
    }

    // STEP 2: Tidak ditemukan di buku → gunakan Gemini AI
    console.log(`[Chat] Tidak ditemukan di buku, mengarahkan ke Gemini AI...`);
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        console.log("[Chat] GEMINI_API_KEY tidak ditemukan");
        return res.json({
            answer: "Maaf, pertanyaan ini belum dibahas secara spesifik dalam buku **Neo Quantum Miracle Teaching**. Silakan coba tanyakan tentang topik seperti **Deep Teaching**, **STEM**, **VR**, **AI untuk Guru**, atau **Differentiated Instruction**! 📚",
            source: 'default',
            model: 'Knowledge Base'
        });
    }

    try {
        const systemInstruction = `Kamu adalah "QuantumGuide AI", asisten cerdas dan hangat yang ahli dalam buku "Neo Quantum Miracle Teaching" karya Sardin Damis.

ATURAN PENTING:
1. Jawablah pertanyaan dengan bijak dan informatif, hubungkan jika memungkinkan dengan semangat pendidikan abad 21.
2. Gunakan bahasa Indonesia yang hangat, profesional, dan mudah dipahami oleh guru dan pendidik.
3. Format jawaban dengan paragraf yang jelas. Gunakan **bold** untuk poin penting dan emoji yang relevan secukupnya.
4. Jangan pernah menyebut bahwa kamu adalah AI model dari Google atau Gemini. Kamu adalah "QuantumGuide AI".
5. Di akhir jawaban, hubungkan relevansi jawaban dengan buku Neo Quantum Miracle Teaching jika memungkinkan.

KONTEKS BUKU (untuk referensi):
${bookChapters.map(ch => `BAB ${ch.bab}: ${ch.title}\n${ch.content}\n${ch.detail}\nLiteratur: ${ch.literatur}`).join('\n\n')}`;

        const geminiResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                system_instruction: {
                    parts: [{ text: systemInstruction }]
                },
                contents: [{
                    parts: [{ text: query }]
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

        const aiText = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (aiText) {
            return res.json({
                answer: aiText,
                source: 'gemini',
                model: 'Gemini 2.5 Flash'
            });
        } else {
            console.error("[Gemini] Respons tidak valid:", JSON.stringify(geminiResponse.data));
        }
    } catch (error) {
        console.error("[Gemini] API Error:", error.response?.data || error.message);
    }

    // STEP 3: Gemini juga gagal → fallback default
    return res.json({
        answer: "Maaf, saat ini saya sedang mengalami gangguan teknis. 🔧 Silakan coba lagi dalam beberapa saat, atau tanyakan tentang topik utama buku seperti **Deep Teaching**, **Deep Learning**, **STEM**, **VR/AR**, **AI untuk Guru**, atau **Differentiated Instruction**! 📚",
        source: 'default',
        model: 'Knowledge Base'
    });
});

app.post('/api/tools/stem', (req, res) => {
    const { subject, topic } = req.body;
    const t = topic || "Topik Umum";
    const s = subject || "Mata Pelajaran";
    
    res.json({
        topic: t,
        subject: s,
        pillars: {
            science: `Menganalisis fenomena ilmiah di balik ${t} dan bagaimana prinsip-prinsip sains mendasarinya dalam konteks ${s}.`,
            technology: `Mengeksplorasi penggunaan alat digital, perangkat lunak simulasi, atau sistem kontrol otomatis untuk mendukung proyek ${t}.`,
            engineering: `Merancang, menguji, dan menyempurnakan prototipe atau model fisik sebagai solusi atas tantangan dalam ${t}.`,
            mathematics: `Menerapkan perhitungan presisi, analisis data statistik, dan pemodelan matematis untuk mengoptimalkan desain ${t}.`
        },
        objectives: [
            `Siswa mampu menjelaskan keterkaitan antara konsep ${s} dengan aplikasi nyata ${t}.`,
            `Siswa dapat merancang solusi kreatif menggunakan pendekatan Engineering Design Process (EDP).`,
            `Siswa menunjukkan kolaborasi dan pemikiran kritis dalam memecahkan masalah kompleks.`
        ],
        meetings: [
            { session: 1, activity: "Identifikasi Masalah & Brainstorming ide solusi kreatif." },
            { session: 2, activity: "Riset Literatur & Perancangan Desain Awal (Sketsa)." },
            { session: 3, activity: "Pembuatan Prototipe menggunakan bahan yang tersedia." },
            { session: 4, activity: "Pengujian, Evaluasi, dan Presentasi Hasil Proyek." }
        ],
        assessments: {
            formative: "Observasi aktivitas diskusi, jurnal refleksi harian, dan kemajuan desain.",
            summative: "Uji coba prototipe, laporan teknis, dan presentasi akhir proyek.",
            rubric: [
                { criteria: "Kreativitas Solusi", weight: "30%", desc: "Sejauh mana ide proyek unik dan efektif." },
                { criteria: "Akurasi Sains", weight: "30%", desc: "Ketepatan penerapan prinsip ilmiah dalam model." },
                { criteria: "Kerja Sama Tim", weight: "20%", desc: "Keterlibatan aktif setiap anggota kelompok." },
                { criteria: "Kualitas Prototipe", weight: "20%", desc: "Kekuatan dan fungsionalitas hasil karya." }
            ]
        },
        materials: [
            "Perangkat digital (Laptop/Tablet) untuk riset",
            "Bahan daur ulang atau kit komponen (sesuai kebutuhan proyek)",
            "Alat ukur (penggaris, timbangan digital, sensor)",
            "Aplikasi pendukung (Canva/Google Docs untuk laporan)"
        ]
    });
});


app.post('/api/tools/planner', (req, res) => {
    const { topic, grade } = req.body;
    res.json({
        topic: topic || "Materi",
        grade: grade || "SD/SMP/SMA",
        hook: `Bayangkan jika Anda berada dalam situasi di mana ${topic} adalah satu-satunya kunci untuk menyelamatkan misi...`,
        questions: [
            `Mengapa menurut kalian ${topic} ini penting dalam kehidupan kita?`,
            `Apa yang terjadi jika konsep ini tidak ditemukan oleh manusia?`,
            `Bagaimana ${topic} bisa membantu orang lain di sekitar kita?`
        ]
    });
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
