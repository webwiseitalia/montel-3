import { Link } from 'react-router-dom'

// Images
import heroImage from '../../assets/sviluppo/imgi_4_progettazione.webp'
import teamImg from '../../assets/apparecchiature/imgi_22_qualita_1.webp'

export default function Progettazione() {
  const processSteps = [
    {
      step: 1,
      title: 'Analisi Esigenze',
      description: 'Studio approfondito delle specifiche tecniche e dei requisiti del cliente.',
    },
    {
      step: 2,
      title: 'Codesign',
      description: 'Sviluppo collaborativo della soluzione ottimale con il team del cliente.',
    },
    {
      step: 3,
      title: 'Prototipazione',
      description: 'Realizzazione di prototipi per validazione funzionale e qualitativa.',
    },
    {
      step: 4,
      title: 'Industrializzazione',
      description: 'Ottimizzazione del design per la produzione in serie efficiente.',
    },
  ]

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Progettazione Mont.El"
          title="Progettazione"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/servizi" className="hover:text-white transition-colors">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Progettazione</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Progettazione</h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Dalla fase concettuale alla progettazione esecutiva, sviluppiamo soluzioni su misura.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Servizio</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Progettazione Personalizzata
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Il nostro ufficio tecnico collabora con i clienti fin dalle prime fasi del progetto,
                offrendo supporto nella definizione delle specifiche e nello sviluppo della soluzione ottimale.
              </p>
              <p className="text-gray-600 mb-8">
                Utilizziamo software CAD/CAM di ultima generazione e metodologie di progettazione
                che garantiscono precisione, affidabilità e ottimizzazione dei costi produttivi.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Le Nostre Competenze
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Progettazione elettrica e schemi funzionali
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Design di cablaggi e harness
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sviluppo sensori personalizzati
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Progettazione quadri elettrici
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <img
                src={heroImage}
                alt="Ufficio tecnico Mont.El"
                title="Ufficio tecnico"
                loading="lazy"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl w-full"
              />
              <img
                src={teamImg}
                alt="Team di progettazione Mont.El"
                title="Team di progettazione"
                loading="lazy"
                width={600}
                height={450}
                className="rounded-3xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Metodologia</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              Il Nostro Processo di Progettazione
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg shadow-blue-600/25">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Hai un progetto da sviluppare?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Il nostro team tecnico è pronto ad affiancarti nella progettazione della soluzione ideale.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-2xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Richiedi informazioni
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
