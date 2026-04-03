const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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

// API Endpoints
app.post('/api/chat', (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const q = query.toLowerCase();
    let foundResponse = null;

    for (const key in responses) {
        if (q.includes(key)) {
            foundResponse = responses[key];
            break;
        }
    }

    if (foundResponse) {
        res.json({
            book: foundResponse.book,
            lit: foundResponse.lit,
            hasLit: !!foundResponse.lit
        });
    } else {
        res.json({
            book: "Pertanyaan menarik! Dalam buku Neo Quantum Miracle Teaching, hal ini dibahas sebagai bagian dari transformasi pendidikan modern.",
            lit: "Untuk topik ini, kami menyarankan pengecekan pada literatur 'Quantum Teaching' atau 'Differentiated Instruction'.",
            hasLit: true
        });
    }
});

app.post('/api/tools/stem', (req, res) => {
    const { subject, topic } = req.body;
    res.json({
        topic: topic || "Topik Umum",
        subject: subject || "Mata Pelajaran",
        pillars: {
            science: `Memahami konsep dasar ${topic} dan fenomena alam terkait dalam lingkup ${subject}.`,
            technology: `Penggunaan simulasi digital, alat ukur sensorik, atau platform dokumentasi proyek untuk ${topic}.`,
            engineering: `Mendesain dan membangun prototipe solusi untuk masalah nyata terkait ${topic}.`,
            mathematics: `Analisis data hasil observasi, perhitungan skala, dan logika algoritma solusi.`
        }
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

// Start Server
app.listen(PORT, () => {
    console.log(`Server Neo Quantum QMT.AI berjalan di http://localhost:${PORT}`);
});
