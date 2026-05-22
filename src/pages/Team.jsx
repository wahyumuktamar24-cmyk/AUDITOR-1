const team = [
  { name: 'WAHYU MUKTAMAR', role: 'Manajer', certs: ['CPA', 'CISA', 'CIA', 'CFE'] },
  { name: 'FAJAR', role: 'Auditor Senior', certs: ['CPA', 'CISA', 'CIA', 'CFE'] },
  { name: 'MAISARAH KASIM', role: 'Auditor Senior', certs: ['CPA', 'CISA', 'CIA', 'CFE'] },
  { name: 'SARAH', role: 'Staf', certs: ['CPA', 'CISA', 'CIA', 'CFE'] },
  { name: 'NURUL AULIAH FITRI', role: 'Staf', certs: ['CPA', 'CISA', 'CIA', 'CFE'] },
  { name: 'ARYAL', role: 'Staf', certs: ['CPA', 'CISA', 'CIA', 'CFE'] },
]

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Tim Profesional</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-secondary hover:-translate-y-1 transition">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-gray-500">
              {m.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{m.name}</h3>
            <p className="text-accent font-medium mb-3">{m.role}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {m.certs.map(c => (
                <span key={c} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}