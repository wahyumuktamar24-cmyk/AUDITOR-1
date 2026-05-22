export default function Services() {
  const services = [
    {
      title: 'Audit Keuangan',
      desc: 'Laporan Keuangan yang Akurat & Transparan. Kami membantu perusahaan memastikan laporan keuangan disusun secara wajar, akurat, dan sesuai standar akuntansi yang berlaku.',
      benefits: ['Transparansi laporan keuangan', 'Meningkatkan kepercayaan investor', 'Meminimalkan risiko kesalahan data', 'Mendukung kepatuhan regulasi'],
      method: 'Perencanaan Audit → Pemeriksaan Dokumen → Analisis Data → Evaluasi Risiko → Laporan Audit'
    },
    {
      title: 'IT Audit',
      desc: 'Keamanan & Efektivitas Sistem Informasi. Layanan audit teknologi informasi untuk memastikan sistem IT perusahaan aman, efisien, dan mendukung operasional bisnis.',
      benefits: ['Perlindungan data perusahaan', 'Mengurangi risiko cyber attack', 'Optimalisasi sistem IT', 'Kepatuhan standar keamanan informasi'],
      method: 'Assessment Sistem → Pengujian Keamanan → Evaluasi Kontrol Akses → Analisis Risiko → Rekomendasi Perbaikan'
    },
    {
      title: 'Audit Internal',
      desc: 'Meningkatkan Efisiensi Operasional Perusahaan. Kami membantu perusahaan mengevaluasi proses internal dan pengendalian untuk mendukung tata kelola yang lebih baik.',
      benefits: ['Pengawasan operasional lebih efektif', 'Identifikasi risiko lebih cepat', 'Peningkatan kualitas pengendalian internal', 'Mendukung keputusan manajemen'],
      method: 'Observasi Proses → Pengumpulan Data → Evaluasi SOP → Analisis Risiko → Laporan & Rekomendasi'
    }
  ]

  const approach = [
    'Perencanaan Audit', 'Risk Assessment', 'Pengumpulan Bukti',
    'Pengujian Kontrol', 'Pelaporan Audit', 'Tindak Lanjut (Follow Up)'
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Layanan & Metodologi Audit</h1>
      
      <div className="grid md:grid-cols-1 gap-8 mb-16">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
            <h2 className="text-2xl font-bold text-secondary mb-2">{s.title}</h2>
            <p className="text-gray-700 mb-4">{s.desc}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Manfaat:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {s.benefits.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Metodologi:</h3>
                <p className="text-gray-600 bg-gray-50 p-3 rounded italic">{s.method}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary text-white p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Tahapan Pendekatan Audit</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {approach.map((step, i) => (
            <div key={i} className="bg-white/10 p-4 rounded-lg text-center">
              <div className="text-accent font-bold text-xl mb-1">{i + 1}.</div>
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}