import { Link } from 'react-router-dom'

export default function Footer() {
  const quickLinks = [
    { name: 'Azienda', path: '/azienda' },
    { name: 'Prodotti', path: '/prodotti' },
    { name: 'Qualità', path: '/qualita' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Contatti', path: '/contatti' },
  ]

  const productLinks = [
    { name: 'Sensori di livello', path: '/prodotti/sensori-livello-carburante' },
    { name: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { name: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { name: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Whistleblowing', path: '/whistleblowing' },
  ]

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-6">
                <span className="text-2xl font-bold text-white">
                  MONT<span className="text-blue-400">.</span>EL
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Dal 1979 progettiamo e produciamo soluzioni elettriche ed elettroniche
                per i settori più esigenti, dall'automotive al medicale.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Via Industriale, 15</p>
                <p>43036 Fidenza (PR) - Italia</p>
                <p className="pt-2 text-gray-400">
                  <a href="tel:+390524123456" className="hover:text-white transition-colors">
                    +39 0524 123456
                  </a>
                </p>
                <p className="text-gray-400">
                  <a href="mailto:info@montel.it" className="hover:text-white transition-colors">
                    info@montel.it
                  </a>
                </p>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Navigazione
                  </h3>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-300 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Prodotti
                  </h3>
                  <ul className="space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-300 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Column */}
                <div className="col-span-2 md:col-span-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Contatti
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Hai un progetto? Parliamone insieme.
                  </p>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Richiedi info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Mont.El S.p.A. — Tutti i diritti riservati — P.IVA 00123456789
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
