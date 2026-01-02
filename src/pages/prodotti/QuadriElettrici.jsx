import { Link } from 'react-router-dom'
import ProductSidebar from '../../components/ProductSidebar'

// Images
import heroImage from '../../assets/Produzione/imgi_3_prodotti_header_page.webp'
import quadriMain from '../../assets/Produzione/imgi_6_quadri_elettrici_thumb.webp'
import quadriDetail from '../../assets/case history/imgi_6_quadri_elettrici_thumb_case.webp'

export default function QuadriElettrici() {
  const processSteps = [
    { step: 1, title: 'Analisi', description: 'Studio delle esigenze del cliente e definizione specifiche' },
    { step: 2, title: 'Progettazione', description: 'Sviluppo schemi elettrici e layout in CAD' },
    { step: 3, title: 'Produzione', description: 'Assemblaggio con componenti di qualità certificata' },
    { step: 4, title: 'Collaudo', description: 'Test funzionali e di sicurezza al 100%' },
  ]

  const applications = [
    'Automazione industriale',
    'Sistemi di controllo',
    'Distribuzione energia',
    'Impianti speciali',
  ]

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Quadri Elettrici Mont.El"
          title="Quadri Elettrici"
          width={2500}
          height={900}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/prodotti" className="hover:text-white transition-colors">Prodotti</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Quadri elettrici</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Quadri Elettrici
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Soluzioni personalizzate per l'automazione e il controllo industriale.
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
                  Dal Progetto al Prodotto Finito
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Progettiamo e realizziamo quadri elettrici personalizzati per applicazioni industriali,
                  seguendo ogni fase del processo dalla definizione delle specifiche al collaudo finale.
                </p>
                <p className="text-gray-600">
                  Ogni quadro è costruito con componenti di alta qualità e assemblato secondo
                  le normative vigenti, garantendo affidabilità e sicurezza.
                </p>
              </div>

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                <img
                  src={quadriMain}
                  alt="Quadri elettrici Mont.El"
                  title="Quadri elettrici"
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Process Steps */}
              <div className="mb-12">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Metodologia</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-8">
                  Il Nostro Processo
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map((item) => (
                    <div
                      key={item.step}
                      className="bg-white rounded-2xl p-6 text-center shadow-sm"
                    >
                      <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg shadow-blue-600/25">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail Image */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm mb-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <img
                    src={quadriDetail}
                    alt="Dettaglio quadro elettrico Mont.El"
                    title="Dettaglio quadro elettrico"
                    loading="lazy"
                    width={600}
                    height={450}
                    className="rounded-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div>
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Qualità</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                      Attenzione ai Dettagli
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Ogni quadro elettrico è realizzato con la massima cura, utilizzando componenti
                      certificati e rispettando le normative di sicurezza più stringenti.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Componenti di marca certificati</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Cablaggio ordinato e professionale</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Test funzionali completi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Applicazioni
                </h3>
                <p className="text-gray-400 mb-6">
                  I nostri quadri elettrici sono utilizzati in diversi ambiti industriali.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white/10 rounded-xl p-4"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-blue-600 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hai bisogno di un quadro elettrico su misura?
                </h3>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                  Contattaci per discutere del tuo progetto. Realizziamo soluzioni personalizzate.
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
