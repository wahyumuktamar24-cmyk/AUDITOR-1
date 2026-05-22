import { Link } from 'react-router-dom'
import { Shield, Clock, FileCheck, Users, Award, RefreshCw, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <section className="pb-10">
      {/* Hero */}
      <div className="bg-gradient-to-r from-secondary to-primary text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">“Perusahaan audit yang menjunjung tinggi kebenaran dan kejujuran dalam setiap pemeriksaan.”</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Kami menyediakan layanan audit dan konsultasi profesional untuk membantu organisasi meningkatkan keamanan, kepatuhan, serta efektivitas pengelolaan teknologi dan proses bisnis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/kontak" className="bg-accent hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition">Konsultasi Gratis</Link>
          <Link to="/layanan" className="border border-white hover:bg-white/10 px-6 py-3 rounded-lg transition">Lihat Layanan</Link>
        </div>
      </div>

      {/* Services Highlight */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Layanan Utama Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'IT Audit & Information System Assurance', desc: 'Audit keamanan jaringan, server, aplikasi, database, tata kelola TI, dan kepatuhan standar (ISO 27001, COBIT, NIST).' },
            { title: 'Internal Audit & Risk Management', desc: 'Audit operasional, ERM, fraud risk assessment, evaluasi kontrol internal, dan penyusunan kerangka manajemen risiko.' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-secondary">{s.title}</h3>
              <p className="text-gray-600 mb-3">{s.desc}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Mengurangi risiko kebocoran data / meminimalkan kecurangan</li>
                <li>Meningkatkan keandalan sistem & efisiensi operasional</li>
                <li>Memastikan kepatuhan regulasi & GCG</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '25+', label: 'Klien' },
            { num: '3+', label: 'Tahun Pengalaman' },
            { num: '40+', label: 'Proyek Selesai' },
            { num: '8', label: 'Profesional' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-accent">{stat.num}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Mengapa Memilih Kami?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Users size={24}/>, title: 'Profesional dan Berpengalaman' },
            { icon: <Clock size={24}/>, title: 'Tepat Waktu' },
            { icon: <Shield size={24}/>, title: 'Menjaga Kerahasiaan Data' },
            { icon: <RefreshCw size={24}/>, title: 'Pelayanan Responsif' },
            { icon: <FileCheck size={24}/>, title: 'Mengikuti Standar Audit' },
            { icon: <Award size={24}/>, title: 'Solusi dan Rekomendasi' }
          ].map((h, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-accent mt-1">{h.icon}</div>
              <h3 className="font-semibold">{h.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-secondary text-white py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Meningkatkan Tata Kelola Perusahaan Anda?</h2>
        <p className="mb-6 text-gray-200">Dapatkan konsultasi awal gratis atau minta penawaran khusus untuk kebutuhan audit Anda.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/kontak" className="bg-accent hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition">Konsultasi Gratis</Link>
          <Link to="/kontak" className="bg-white text-secondary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">Minta Penawaran</Link>
        </div>
      </div>
    </section>
  )
}