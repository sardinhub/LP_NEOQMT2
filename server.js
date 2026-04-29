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

// Full book content for AI context
const bookChaptersContext = `
=== BUKU: NEO QUANTUM MIRACLE TEACHING ===
Penulis: Sardin Damis, S.Kom., C.Ht., CT.NNLP., CI (BNSP-RI)
Deskripsi: Transformasi Pembelajaran dengan Deep Teaching, Deep Learning, STEM, dan Teknologi Modern.

--- BAB 1: Membangun Mindset Guru Quantum ---
Mindset Guru Quantum adalah pola pikir yang memadukan kearifan lokal dengan inovasi global. Seperti partikel quantum yang bisa berada di banyak tempat sekaligus, guru quantum juga harus bisa "berada" di banyak peran: sebagai fasilitator, motivator, inovator, dan bahkan entertainer dalam kelas.
Ciri-ciri guru quantum: selalu haus pengetahuan baru, melihat tantangan sebagai peluang, tidak takut mencoba metode baru, memperlakukan setiap murid sebagai individu unik, mampu beradaptasi dengan teknologi. Penelitian Carol Dweck tentang Growth Mindset menunjukkan bahwa orang dengan growth mindset lebih berhasil. Langkah membangun: Refleksi Diri (10 menit/hari), Belajar Terus-Menerus, Jaringan Guru Inspiratif, Eksperimen metode baru setiap minggu.

--- BAB 2: Deep Teaching - Mengajar dari Hati ke Hati ---
Deep Teaching menekankan pemahaman mendalam dan koneksi emosional. Bukan sekadar transfer materi, tapi transformasi jiwa. Kunci utama: Empati (memahami perspektif murid), Storytelling (seni bercerita untuk menyampaikan konsep sulit), Socratic Questioning (teknik bertanya yang memicu pemikiran kritis, hindari pertanyaan Ya/Tidak, gunakan "Mengapa" dan "Bagaimana"). Kontras dengan Surface Teaching (Marton & Säljö).

--- BAB 3: Deep Learning - Membuat Siswa Belajar Lebih Dalam ---
Deep Learning adalah proses murid aktif mengkonstruksi pemahaman. Surface vs Deep Learning: surface berfokus hafalan untuk ujian, deep berfokus pemahaman untuk aplikasi nyata. Metakognisi: mengajarkan murid "berpikir tentang cara mereka berpikir" untuk menjadi pembelajar mandiri seumur hidup. Strategi PBL & Inquiry: berikan masalah nyata yang menantang, biarkan mereka berkolaborasi dan mencari solusi dengan bimbingan guru.

--- BAB 4: STEM Education - Mempersiapkan Generasi Masa Depan ---
STEM bukan sekadar mata pelajaran, tapi pendekatan memecahkan masalah menggunakan integrasi berbagai disiplin ilmu. Design Thinking: Empathy → Define → Ideate → Prototype → Test. STEM untuk Non-Sains: bisa diterapkan di Bahasa Indonesia atau IPS melalui analisis data sosial, pembuatan media digital, atau perencanaan proyek komunitas.

--- BAB 5: Teknologi dalam Pembelajaran Modern ---
Teknologi adalah alat (tools), bukan pengganti guru. Kuncinya adalah bagaimana teknologi meningkatkan interaksi. LMS: Google Classroom & Moodle untuk manajemen materi. Visual & Interaktif: Canva & Genially meningkatkan retensi informasi hingga 65%. Gamifikasi: Quizizz & Kahoot meningkatkan dopamin dan motivasi intrinsik siswa.

--- BAB 6: Virtual Reality (VR) & Augmented Reality (AR) ---
VR membawa murid ke tempat yang tidak bisa dikunjungi (luar angkasa, dalam sel tubuh), AR menambahkan lapisan informasi ke dunia nyata. Virtual Field Trips: mengunjungi Museum Louvre atau Mars tanpa meninggalkan kelas. Low-Cost VR: Google Cardboard atau headset terjangkau dengan smartphone. Immersive Learning meningkatkan retensi memori jangka panjang hingga 75%.

--- BAB 7: Artificial Intelligence (AI) untuk Efisiensi Guru ---
AI bukan musuh, tapi asisten pribadi yang sangat cerdas. Guru bisa menghemat waktu administrasi hingga 30-50%. Prompt Engineering: seni memberikan perintah ke AI, contoh: "Buatlah RPP 1 lembar untuk topik Fotosintesis kelas 5 dengan aktivitas STEM." Gamma & Canva Magic: membuat slide presentasi dan modul ajar secara otomatis. Human-in-the-loop: AI sebagai kopilot, keputusan pedagogis tetap di tangan guru.

--- BAB 8: Differentiated Instruction (DI) ---
Setiap anak bintang yang bersinar dengan caranya sendiri. DI memastikan tidak ada anak tertinggal karena gaya belajar berbeda. Diferensiasi Konten, Proses, & Produk: berikan pilihan materi, metode belajar, dan cara menunjukkan pemahaman (video, tulisan, proyek). Framework Carol Ann Tomlinson (2001): modifikasi 4 elemen - Konten, Proses, Produk, dan Learning Environment. Taksonomi Bloom: Creating sebagai tingkat kognitif tertinggi.

--- BAB 9: Menjadi Agen Perubahan ---
Menjadi guru quantum berarti menjadi obor yang menerangi jalan bagi orang lain. Membangun Komunitas Belajar: jangan bergerak sendiri, ajak rekan sejawat, berbagi praktik baik, ciptakan budaya inovasi di sekolah. Community of Practice, Educational Leadership, Networking, Sustainability.
`;

// Knowledge base keyword reference for Gemini context enrichment
const knowledgeBaseText = Object.entries(responses).map(
    ([key, val]) => `Topik "${key}": Buku: ${val.book} | Literatur: ${val.lit}`
).join('\n');

// Gemini AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    // If no API key, fallback to keyword matching
    if (!GEMINI_API_KEY) {
        console.log("[Chat] GEMINI_API_KEY tidak ditemukan, menggunakan keyword matching...");
        return fallbackKeywordMatch(query, res);
    }

    try {
        const systemInstruction = `Kamu adalah "QuantumGuide AI", asisten cerdas dan hangat yang ahli dalam buku "Neo Quantum Miracle Teaching" karya Sardin Damis.

ATURAN PENTING:
1. Jawablah SEMUA pertanyaan berdasarkan konten buku berikut. Jika relevan, sebutkan bab mana yang membahasnya.
2. Gunakan bahasa Indonesia yang hangat, profesional, dan mudah dipahami oleh guru dan pendidik.
3. Jika pertanyaan di luar konteks buku, tetap jawab dengan bijak namun arahkan kembali ke relevansi pendidikan sesuai semangat buku.
4. Format jawaban dengan paragraf yang jelas. Gunakan **bold** untuk poin penting dan emoji yang relevan secukupnya.
5. Jangan pernah menyebut bahwa kamu adalah AI model dari Google atau Gemini. Kamu adalah "QuantumGuide AI" dari Neo Quantum Miracle Teaching.
6. Tambahkan referensi literatur yang relevan jika memungkinkan (seperti teori dari Bobbi DePorter, Carol Dweck, Marton & Säljö, Carol Ann Tomlinson, dll).

KONTEN BUKU:
${bookChaptersContext}

REFERENSI TAMBAHAN:
${knowledgeBaseText}`;

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
            res.json({
                answer: aiText,
                source: 'gemini',
                model: 'Gemini 2.5 Flash'
            });
        } else {
            console.error("[Gemini] Respons tidak valid:", JSON.stringify(geminiResponse.data));
            return fallbackKeywordMatch(query, res);
        }

    } catch (error) {
        console.error("[Gemini] API Error:", error.response?.data || error.message);
        return fallbackKeywordMatch(query, res);
    }
});

// Fallback: Keyword matching dari knowledge base
function fallbackKeywordMatch(query, res) {
    const q = query.toLowerCase();
    let foundResponse = null;

    for (const key in responses) {
        if (q.includes(key)) {
            foundResponse = responses[key];
            break;
        }
    }

    if (foundResponse) {
        const fallbackText = `**📖 Perspektif Buku:**\n${foundResponse.book}\n\n**📚 Rujukan Literatur:**\n${foundResponse.lit}`;
        res.json({
            answer: fallbackText,
            source: 'keyword',
            model: 'Knowledge Base'
        });
    } else {
        res.json({
            answer: "Pertanyaan menarik! 🤔 Dalam buku **Neo Quantum Miracle Teaching**, hal ini berkaitan dengan transformasi pendidikan modern. Coba tanyakan lebih spesifik tentang topik seperti **Deep Teaching**, **STEM**, **VR**, **AI untuk guru**, atau **Differentiated Instruction** — saya akan memberikan jawaban yang lebih mendalam! 📚",
            source: 'default',
            model: 'Knowledge Base'
        });
    }
}

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
