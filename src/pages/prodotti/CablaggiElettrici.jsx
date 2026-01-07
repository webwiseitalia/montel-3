import { Link } from 'react-router-dom'
import ProductSidebar from '../../components/ProductSidebar'

// Images
import heroImage from '../../assets/Produzione/imgi_3_prodotti_header_page.webp'
import cablaggiMain from '../../assets/Produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import cab1 from '../../assets/cab-1/cab-1-1.webp'
import cab2 from '../../assets/cab-1/cab-1-2.webp'
import cab4 from '../../assets/cab-1/cab-1-4.webp'
import cab5 from '../../assets/cab-1/cab-1-5.webp'
import cab6 from '../../assets/cab-1/cab-1-6.webp'
import cabDetail1 from '../../assets/cab-.2/cab-.2-27.webp'
import cabDetail2 from '../../assets/cab-.2/cab-.2-28.webp'
import cabDetail3 from '../../assets/cab-.2/cab-.2-29.webp'

export default function CablaggiElettrici() {
  const features = [
    {
      title: 'Progettazione personalizzata',
      description: 'Ogni cablaggio è progettato su specifiche del cliente con software CAD/CAM.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Qualità certificata',
      description: 'Produzione conforme a ISO 9001 e IATF 16949 con test al 100%.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Flessibilità produttiva',
      description: 'Piccole serie e grandi volumi con la stessa attenzione alla qualità.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Tracciabilità completa',
      description: 'Ogni componente è tracciato per garantire la massima qualità.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ]

  const sectors = [
    'Automotive',
    'Motociclismo',
    'Condizionamento',
    'Vending',
    'Medicale',
    'Industriale',
  ]

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Cablaggi Elettrici Mont.El"
          title="Cablaggi Elettrici"
          loading="lazy"
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
              <span className="text-white">Cablaggi elettrici</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Cablaggi Elettrici
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Soluzioni di cablaggio personalizzate per ogni settore industriale.
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
                  Progettazione e Produzione
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  I nostri cablaggi elettrici sono progettati e prodotti con un approccio codesign,
                  lavorando a stretto contatto con il cliente fin dalle prime fasi del progetto.
                </p>
                <p className="text-gray-600">
                  Disponiamo di linee produttive flessibili che ci permettono di gestire sia
                  piccole serie che grandi volumi, mantenendo costanti gli standard qualitativi.
                </p>
              </div>

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                <img
                  src={cablaggiMain}
                  alt="Cablaggi elettrici Mont.El"
                  title="Cablaggi elettrici"
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <img src={cab1} alt="Cablaggio elettrico esempio 1" title="Cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                <img src={cab2} alt="Cablaggio elettrico esempio 2" title="Cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                <img src={cab4} alt="Cablaggio elettrico esempio 3" title="Cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                <img src={cab5} alt="Cablaggio elettrico esempio 4" title="Cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
              </div>

              {/* Codesign */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm mb-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Metodologia</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                      Approccio Codesign
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Collaboriamo con i clienti fin dalla fase concettuale, garantendo soluzioni
                      ottimizzate per le specifiche esigenze applicative.
                    </p>
                    <p className="text-gray-600">
                      Questo approccio ci permette di ridurre tempi e costi di sviluppo,
                      assicurando al contempo la massima qualità del prodotto finale.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={cabDetail1} alt="Dettaglio cablaggio elettrico" title="Dettaglio cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                    <img src={cabDetail2} alt="Dettaglio cablaggio elettrico" title="Dettaglio cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sectors */}
              <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 mb-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Settori di Applicazione
                    </h3>
                    <p className="text-gray-400 mb-6">
                      I nostri cablaggi sono utilizzati nei settori più esigenti, dall'automotive al medicale.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {sectors.map((sector, index) => (
                        <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={cab6} alt="Applicazione cablaggio industriale" title="Applicazione cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                    <img src={cabDetail3} alt="Applicazione cablaggio industriale" title="Applicazione cablaggio" loading="lazy" width={300} height={300} className="rounded-2xl w-full aspect-square object-cover" />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-blue-600 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hai bisogno di un cablaggio personalizzato?
                </h3>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                  Contattaci per discutere del tuo progetto. Il nostro team tecnico è pronto ad assisterti.
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
