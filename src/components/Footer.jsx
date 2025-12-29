import { Link } from 'react-router-dom'

export default function Footer() {
  const quickLinks = [
    { name: 'Azienda', path: '/azienda' },
    { name: 'Prodotti', path: '/prodotti' },
    { name: 'Settori', path: '/settori' },
    { name: 'Qualità', path: '/qualita' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Case History', path: '/case-history' },
    { name: 'Contatti', path: '/contatti' },
  ]

  const productLinks = [
    { name: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { name: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { name: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { name: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  const sectorLinks = [
    { name: 'Automotive', path: '/settori/automotive' },
    { name: 'Elettrodomestici', path: '/settori/elettrodomestici' },
    { name: 'Condizionamento', path: '/settori/condizionamento' },
    { name: 'Medicale', path: '/settori/medicale' },
    { name: 'Aeronautica', path: '/settori/aeronautica' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Condizioni di acquisto', path: '/condizioni-acquisto' },
    { name: 'Condizioni di fornitura', path: '/condizioni-fornitura' },
    { name: 'Whistleblowing', path: '/whistleblowing' },
  ]

  return (
    <footer className="bg-gray-950">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-6">
                <span className="text-2xl font-semibold text-white tracking-wide">
                  MONTEL
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                Dal 1972 progettiamo e produciamo sensori, cablaggi elettrici e
                quadri per i settori più esigenti, dall'automotive al medicale.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-gray-400">
                    <p>Via Mazzini, 31/B</p>
                    <p>25057 Sale Marasino (BS) – Italia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+39030986300" className="text-gray-400 hover:text-white transition-colors">
                    +39 030 986300
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@montel.it" className="text-gray-400 hover:text-white transition-colors">
                    info@montel.it
                  </a>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Navigation */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-5">
                    Navigazione
                  </h3>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-5">
                    Prodotti
                  </h3>
                  <ul className="space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sectors */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-5">
                    Settori
                  </h3>
                  <ul className="space-y-3">
                    {sectorLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Column */}
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-5">
                    Contatti
                  </h3>
                  <p className="text-sm text-gray-400 mb-5">
                    Hai un progetto? Parliamone insieme.
                  </p>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Richiedi info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-xs text-gray-500 text-center lg:text-left">
              <p>© {new Date().getFullYear()} Mont.El Apparecchiature Elettroelettroniche S.r.l.</p>
              <p className="mt-1">P.IVA 10695790153 — REA BS 351131 — Cap. Soc. € 720.000,00</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
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
