import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Tim', path: '/tim' },
  { name: 'Blog', path: '/blog' },
  { name: 'Kontak', path: '/kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <ShieldCheck className="text-accent" size={28} />
            AUDITRUE
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-accent transition ${location.pathname === link.path ? 'text-accent font-semibold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary/95 border-t border-gray-700">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-3 hover:bg-gray-800 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}