import { Link, Outlet, useLocation } from 'react-router-dom'
import CaseHistorySidebar from '../../components/CaseHistorySidebar'

// Images
import heroImage from '../../assets/case history/imgi_18_2500x900-prodotti.webp'
import sensoriThumb from '../../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'

export default function CaseHistorySensori() {
  const location = useLocation()
  const isCategory = location.pathname === '/case-history/sensori-livello-carburante'

  const articles = [
    {
      title: 'Sensori di livello carburante resistivi',
      description: 'Sviluppo di sensori di livello resistivi ad alta precisione per applicazioni automotive e industriali.',
      path: '/case-history/sensori-livello-carburante/sensori-resistivi',
      image: sensoriThumb,
    },
  ]

  if (!isCategory) {
    return <Outlet />
  }

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src={heroImage}
          alt="Case History Sensori"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/case-history" className="hover:text-white transition-colors">Case History</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Sensori di livello carburante</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Sensori di Livello Carburante
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <CaseHistorySidebar currentCategory="/case-history/sensori-livello-carburante" />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">I Nostri Progetti</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  Progetti Realizzati
                </h2>
                <p className="text-lg text-gray-600">
                  Scopri come abbiamo sviluppato soluzioni innovative per il rilevamento del livello carburante
                  in diversi settori applicativi.
                </p>
              </div>

              {/* Articles Grid */}
              <div className="grid gap-6">
                {articles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.path}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 md:w-2/3 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {article.description}
                        </p>
                        <span className="inline-flex items-center text-blue-600 font-semibold">
                          Leggi il case study
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
