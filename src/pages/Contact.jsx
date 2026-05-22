export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Hubungi Kami</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-secondary">Informasi Kontak</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Alamat:</strong> Kantor AuditTrue, Jalan Adiyaksa Baru</p>
            <p><strong>Email:</strong> AUDITRUE@gmail.com</p>
            <p><strong>Telepon / WhatsApp:</strong> 081342745230</p>
            <p><strong>Jam Operasional:</strong> 08.00 – 17.00 WIB</p>
            <a href="https://maps.app.goo.gl/DnKwQgZLwDzq64Zr7" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-accent hover:underline">
              📍 Lihat di Google Maps
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-secondary">Formulir Konsultasi</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Nama Lengkap" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-accent" required />
            <input type="email" placeholder="Email Perusahaan" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-accent" required />
            <textarea placeholder="Kebutuhan Audit / Pesan" rows={4} className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-accent" required />
            <button type="submit" className="w-full bg-secondary text-white py-3 rounded font-semibold hover:bg-blue-900 transition">
              Kirim Permintaan
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">*Tim kami akan menghubungi Anda dalam 1x24 jam kerja.</p>
        </div>
      </div>
    </div>
  )
}