export default function About() {
  const values = [
    { letter: 'T', word: 'Transparansi', desc: 'Terbuka dalam setiap proses dan hasil audit' },
    { letter: 'R', word: 'Reliabilitas', desc: 'Dapat diandalkan dalam setiap penugasan' },
    { letter: 'U', word: 'Unggul', desc: 'Berkomitmen pada kualitas dan standar tertinggi' },
    { letter: 'E', word: 'Etika', desc: 'Menjunjung tinggi integritas dan independensi' }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Tentang Kami</h1>
      
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold mb-3 text-secondary">Profil Perusahaan</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kami adalah perusahaan yang bergerak di bidang layanan audit dan konsultasi profesional yang berkomitmen membantu perusahaan meningkatkan transparansi, efektivitas, dan kepatuhan terhadap standar yang berlaku. Dengan didukung oleh tim auditor dan konsultan yang kompeten, kami menyediakan berbagai layanan seperti audit internal, audit sistem informasi, audit operasional, serta konsultasi manajemen risiko.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Kami mengutamakan profesionalisme, integritas, dan kerahasiaan dalam setiap proses kerja sehingga mampu memberikan hasil audit yang akurat, objektif, dan terpercaya.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-3 text-secondary">Sejarah Berdiri</h2>
          <p className="text-gray-700">
            Perusahaan kami didirikan pada <strong>15 Januari 2022</strong> sebagai perusahaan yang bergerak di bidang layanan audit dan konsultasi profesional. Berawal dari tim kecil yang berpengalaman di bidang audit dan sistem informasi, kami terus berkembang menyediakan layanan audit internal, operasional, sistem informasi, serta konsultasi manajemen risiko. Hingga saat ini, kami terus berupaya menjadi mitra audit yang membantu perusahaan meningkatkan efektivitas dan tata kelola bisnis yang lebih baik.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-3 text-secondary">Visi & Misi</h2>
          <p className="text-gray-700 italic mb-3">"Menjadi mitra audit terpercaya yang mendorong transparansi, integritas, dan pertumbuhan berkelanjutan bagi setiap organisasi di Indonesia."</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Ketelitian & Penyelidikan Mendalam</li>
            <li>Validasi & Kepercayaan</li>
            <li>Keterbukaan & Integritas</li>
            <li>Pertumbuhan & Keseimbangan</li>
            <li>Kejujuran & Optimisme</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-bold mb-4 text-secondary">Nilai Perusahaan (TRUE)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(v => (
            <div key={v.letter} className="border border-gray-200 p-4 rounded-lg text-center">
              <span className="text-3xl font-bold text-accent">{v.letter}</span>
              <h3 className="font-semibold mt-1">{v.word}</h3>
              <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-secondary">Sertifikasi & Lisensi</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Certified Public Accountant (CPA)',
            'Certified Information Systems Auditor (CISA)',
            'Certified Internal Auditor (CIA)',
            'Standar Manajemen Mutu ISO 9001',
            'Standar Keamanan Informasi ISO/IEC 27001'
          ].map((cert, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded">
              <span className="text-green-500">✓</span> {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}