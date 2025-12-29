import { Link } from 'react-router-dom'
import ProductSidebar from '../../components/ProductSidebar'

// Images
import heroImage from '../../assets/Produzione/imgi_3_prodotti_header_page.webp'
import sondeMain from '../../assets/Produzione/imgi_7_sonde_di_temperatura_thumb.webp'
import sondeDetail from '../../assets/apparecchiature/imgi_24_qualita_3.webp'

export default function SondeTemperatura() {
  const applications = [
    'Automotive',
    'HVAC / Condizionamento',
    'Elettrodomestici',
    'Industriale',
    'Medicale',
  ]

  const specs = [
    { value: '-50/+250°C', label: 'Range temperatura' },
    { value: '±0.5%', label: 'Precisione' },
    { value: 'IP68', label: 'Grado protezione' },
  ]

  const types = [
    {
      title: 'Sonde NTC',
      description: 'Termistori a coefficiente di temperatura negativo, ideali per misurazioni precise in range moderati.',
    },
    {
      title: 'Sonde PTC',
      description: 'Termistori a coefficiente positivo, utilizzati per protezione e limitazione di temperatura.',
    },
    {
      title: 'Termocoppie',
      description: 'Per applicazioni ad alta temperatura con risposta rapida.',
    },
    {
      title: 'PT100/PT1000',
      description: 'Sensori resistivi di precisione per applicazioni industriali.',
    },
  ]

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Sonde di Temperatura Mont.El"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/prodotti" className="hover:text-white transition-colors">Prodotti</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Sonde di temperatura</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Sonde di Temperatura
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Gamma completa per il rilevamento preciso della temperatura.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ProductSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Intro */}
              <div className="mb-12">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">I Nostri Prodotti</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                  Gamma Completa per Ogni Esigenza
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Offriamo una gamma completa di sonde di temperatura, dalle NTC alle termocoppie,
                  per rispondere alle esigenze di ogni settore applicativo.
                </p>
                <p className="text-gray-600">
                  Ogni sonda può essere personalizzata in termini di geometria, cablaggio e
                  caratteristiche di risposta per adattarsi perfettamente all'applicazione.
                </p>
              </div>

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                <img
                  src={sondeMain}
                  alt="Sonde di temperatura Mont.El"
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Specifiche Tecniche */}
              <div className="bg-blue-600 rounded-3xl p-8 lg:p-10 mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Caratteristiche Tecniche
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {specs.map((spec, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        {spec.value}
                      </div>
                      <p className="text-blue-100">{spec.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div className="mb-12">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tecnologie</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
                  Tipologie Disponibili
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {types.map((type, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        {type.title}
                      </h4>
                      <p className="text-gray-600">
                        {type.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications with Image */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm mb-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Applicazioni</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
                      Settori Applicativi
                    </h3>
                    <div className="space-y-3">
                      {applications.map((app, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-50 rounded-xl p-4"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <img
                    src={sondeDetail}
                    alt="Applicazioni sonde temperatura"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-blue-600 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hai bisogno di una sonda personalizzata?
                </h3>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                  Contattaci per discutere delle tue esigenze. Progettiamo soluzioni su misura.
                </p>
                <Link
                  to="/contatti"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Richiedi informazioni
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
