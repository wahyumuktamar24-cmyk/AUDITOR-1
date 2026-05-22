import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-3">AUDITRUE</h3>
          <p className="text-sm">Perusahaan audit yang menjunjung tinggi kebenaran dan kejujuran dalam setiap pemeriksaan.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Tautan Cepat</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/layanan" className="hover:text-accent">Layanan Audit</Link>
            <Link to="/tentang" className="hover:text-accent">Tentang Kami</Link>
            <Link to="/tim" className="hover:text-accent">Tim Profesional</Link>
            <Link to="/blog" className="hover:text-accent">Insight & Artikel</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Kontak</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center gap-2"><MapPin size={16}/> Jalan Adiyaksa Baru</span>
            <span className="flex items-center gap-2"><Phone size={16}/> 081342745230</span>
            <span className="flex items-center gap-2"><Mail size={16}/> AUDITRUE@gmail.com</span>
            <span className="flex items-center gap-2"><Clock size={16}/> 08.00 – 17.00 WIB</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Jam Operasional</h4>
          <p className="text-sm">Senin - Jumat: 08.00 - 17.00</p>
          <p className="text-sm">Sabtu - Minggu: Tutup</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-xs">
        © {new Date().getFullYear()} AUDITRUE. All rights reserved.
      </div>
    </footer>
  )
}