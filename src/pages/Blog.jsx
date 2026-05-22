const articles = [
  {
    title: 'Pentingnya Audit Internal bagi Perusahaan Modern',
    content: [
      'Audit internal merupakan proses evaluasi yang dilakukan untuk memastikan seluruh aktivitas perusahaan berjalan sesuai prosedur, efektif, dan mematuhi regulasi yang berlaku.',
      'Manfaat: Mendeteksi risiko sejak dini, meningkatkan efisiensi operasional, menjaga kepatuhan, mencegah fraud, memberikan rekomendasi objektif.',
      'Dampak: Perusahaan dengan audit internal yang baik lebih terpercaya di mata investor dan mitra bisnis.'
    ]
  },
  {
    title: 'Risiko Keamanan Data di Era Digital',
    content: [
      'Transformasi digital meningkatkan risiko keamanan informasi. Kebocoran data, malware, phishing, hingga ransomware menjadi ancaman serius.',
      'Risiko: Kehilangan data penting, pencurian informasi pelanggan, gangguan operasional, kerugian finansial & reputasi.',
      'Solusi: IT Audit berkala, sistem keamanan berlapis, batasi akses data, backup rutin, pelatihan siber karyawan.'
    ]
  },
  {
    title: 'Tips Menghadapi Audit Perusahaan dengan Efektif',
    content: [
      'Persiapan matang adalah kunci. Audit berjalan lancar jika perusahaan memiliki dokumentasi lengkap dan komunikasi baik dengan auditor.',
      'Tips: Siapkan dokumen lengkap, pastikan kepatuhan prosedur, bangun komunikasi terbuka, lakukan audit internal terlebih dahulu, tindak lanjuti temuan.',
      'Hasil: Proses audit lebih cepat, transparan, dan memberikan nilai tambah.'
    ]
  },
  {
    title: 'Regulasi Terbaru yang Perlu Diperhatikan Perusahaan',
    content: [
      'Perubahan regulasi memengaruhi operasional, pelaporan keuangan, hingga sistem keamanan informasi.',
      'Fokus terkini: Kepatuhan perlindungan data, standar keamanan informasi, transparansi laporan keuangan, GCG, kepatuhan audit & pajak.',
      'Solusi: Audit kepatuhan berkala, monitoring regulasi, pelatihan karyawan, konsultasi dengan profesional.'
    ]
  }
]

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Insight & Artikel</h1>
      <div className="space-y-8">
        {articles.map((art, i) => (
          <article key={i} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-3">{art.title}</h2>
            {art.content.map((p, j) => (
              <p key={j} className="text-gray-700 mb-2 leading-relaxed">{p}</p>
            ))}
          </article>
        ))}
      </div>
    </div>
  )
}