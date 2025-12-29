import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Sostenibilita() {
  const location = useLocation()
  const isLanding = location.pathname === '/sostenibilita'

  const items = [
    {
      title: 'Etichettatura ambientale',
      description: 'Informazioni sulla corretta gestione degli imballaggi.',
      path: '/sostenibilita/etichettatura-ambientale',
      type: 'page',
    },
    {
      title: 'Politica aziendale integrata',
      description: 'Documento sulla politica aziendale integrata.',
      type: 'download',
    },
    {
      title: 'Politica ambiente e sicurezza',
      description: 'Documento sulla politica ambiente e sicurezza.',
      type: 'download',
    },
    {
      title: 'Codice etico e di condotta',
      description: 'Documento sul codice etico e di condotta aziendale.',
      type: 'download',
    },
    {
      title: 'Whistleblowing',
      description: 'Canale di segnalazione riservato.',
      type: 'external',
    },
  ]

  if (!isLanding) {
    return <Outlet />
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Sostenibilità</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Placeholder testo introduttivo sull'impegno aziendale per la sostenibilità.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Il Nostro Impegno per l'Ambiente
            </h2>
            <p className="text-lg text-gray-600">
              Placeholder testo introduttivo sulla sostenibilità. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.type === 'page' ? 'bg-green-100' :
                    item.type === 'download' ? 'bg-blue-100' : 'bg-yellow-100'
                  }`}>
                    {item.type === 'page' && (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {item.type === 'download' && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {item.type === 'external' && (
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.type === 'page' ? 'bg-green-50 text-green-700' :
                    item.type === 'download' ? 'bg-blue-50 text-blue-700' : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {item.type === 'page' ? 'Pagina' :
                     item.type === 'download' ? 'Download' : 'Esterno'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                {item.type === 'page' && (
                  <Link
                    to={item.path}
                    className="inline-flex items-center text-green-600 font-semibold text-sm"
                  >
                    Visualizza
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                {item.type === 'download' && (
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm">
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Scarica PDF
                  </button>
                )}
                {item.type === 'external' && (
                  <a
                    href="#"
                    className="inline-flex items-center text-yellow-600 font-semibold text-sm"
                  >
                    Vai al sito
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
