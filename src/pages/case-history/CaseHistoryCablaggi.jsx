import { Link, Outlet, useLocation } from 'react-router-dom'
import CaseHistorySidebar from '../../components/CaseHistorySidebar'

// Images
import heroImage from '../../assets/case history/imgi_18_2500x900-prodotti.webp'
import cablaggiThumb from '../../assets/case history/imgi_5_cablaggi_elettrici_thumb_case.webp'
import cab1 from '../../assets/cab-1/cab-1-1.webp'
import cab2 from '../../assets/cab-1/cab-1-2.webp'
import cab4 from '../../assets/cab-1/cab-1-4.webp'
import cab5 from '../../assets/cab-1/cab-1-5.webp'

export default function CaseHistoryCablaggi() {
  const location = useLocation()
  const isCategory = location.pathname === '/case-history/cablaggi-elettrici'

  const articles = [
    {
      title: 'Cablaggio per auto',
      description: 'Sviluppo di cablaggi completi per il settore automotive, dal prototipo alla produzione in serie.',
      path: '/case-history/cablaggi-elettrici/cablaggio-auto',
      image: cab1,
    },
    {
      title: 'Cablaggio per moto',
      description: 'Soluzioni di cablaggio leggere e resistenti per motocicli da strada e off-road.',
      path: '/case-history/cablaggi-elettrici/cablaggio-moto',
      image: cab2,
    },
    {
      title: 'Cablaggi per il condizionamento',
      description: 'Cablaggi progettati per sistemi HVAC residenziali e industriali.',
      path: '/case-history/cablaggi-elettrici/cablaggi-condizionamento',
      image: cab4,
    },
    {
      title: 'Cablaggi per vending machines',
      description: 'Soluzioni affidabili per distributori automatici e macchine da caffè.',
      path: '/case-history/cablaggi-elettrici/cablaggi-vending',
      image: cab5,
    },
    {
      title: 'Cablaggi per apparecchi elettromedicali',
      description: 'Cablaggi certificati per dispositivi medicali con i più alti standard di sicurezza.',
      path: '/case-history/cablaggi-elettrici/cablaggi-elettromedicali',
      image: cablaggiThumb,
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
          alt="Case History Cablaggi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/case-history" className="hover:text-white transition-colors">Case History</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Cablaggi elettrici</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Cablaggi Elettrici
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
              <CaseHistorySidebar currentCategory="/case-history/cablaggi-elettrici" />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">I Nostri Progetti</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  Progetti Realizzati
                </h2>
                <p className="text-lg text-gray-600">
                  Una selezione dei nostri progetti di cablaggio per diversi settori industriali,
                  dall'automotive al medicale.
                </p>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.path}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {article.description}
                      </p>
                      <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                        Leggi il case study
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
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
