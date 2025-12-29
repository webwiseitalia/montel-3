import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { name: 'Azienda', path: '/azienda' },
    { name: 'Prodotti', path: '/prodotti' },
    { name: 'Settori', path: '/settori' },
    { name: 'Qualità', path: '/qualita' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Case History', path: '/case-history' },
    { name: 'Sostenibilità', path: '/sostenibilita' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-blue-600">
              MONT<span className="text-blue-600">.</span>EL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-blue-600 transition-all duration-300 ${
                        isActive ? 'w-4' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right side: CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contatti"
              className="relative overflow-hidden bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/25 hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">Contattaci</span>
              <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ animationDelay: `${index * 50}ms` }}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-2xl transition-all duration-300 ${
                    mobileMenuOpen ? 'animate-fade-up' : ''
                  } ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div
            className={`mt-6 pt-6 border-t border-gray-100 ${mobileMenuOpen ? 'animate-fade-up' : ''}`}
            style={{ animationDelay: '350ms' }}
          >
            <Link
              to="/contatti"
              className="flex items-center justify-center w-full bg-gray-900 text-white py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
            >
              Contattaci
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
