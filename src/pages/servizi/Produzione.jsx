import { Link } from 'react-router-dom'

// Images
import heroImage from '../../assets/sviluppo/imgi_8_1300x900-azienda.webp'
import stabilimentoImg from '../../assets/sviluppo/imgi_17_2500x900-azienda.webp'
import apparecchiaturaImg from '../../assets/apparecchiature/imgi_23_qualita_2.webp'
import processoImg from '../../assets/apparecchiature/imgi_24_qualita_3.webp'

export default function Produzione() {
  const capabilities = [
    { value: '40+', label: 'Anni di esperienza' },
    { value: '2', label: 'Stabilimenti produttivi' },
    { value: '100%', label: 'Tracciabilità prodotti' },
  ]

  const equipment = [
    {
      title: 'Linee di assemblaggio automatizzate',
      description: 'Sistemi automatici per assemblaggio cablaggi ad alta efficienza.',
    },
    {
      title: 'Macchine di taglio e crimpatura',
      description: 'Tecnologie di precisione per lavorazione fili e terminali.',
    },
    {
      title: 'Banchi di collaudo',
      description: 'Test elettrici al 100% su ogni prodotto realizzato.',
    },
    {
      title: 'Sistemi di saldatura',
      description: 'Saldatura a ultrasuoni, resistenza e stagno per ogni esigenza.',
    },
  ]

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={stabilimentoImg}
          alt="Produzione Mont.El - Stabilimenti"
          title="Produzione Mont.El"
          width={2500}
          height={900}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/servizi" className="hover:text-white transition-colors">Servizi</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Produzione</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Produzione</h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Stabilimenti all'avanguardia per produzioni flessibili e di alta qualità.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Capacità Produttiva</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Impianti e Processi Produttivi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I nostri stabilimenti in Italia e Romania sono dotati di macchinari di ultima
                generazione che garantiscono precisione, efficienza e flessibilità produttiva.
              </p>
              <p className="text-gray-600 mb-8">
                Siamo in grado di gestire sia produzioni in grandi volumi che piccole serie
                personalizzate, mantenendo sempre gli stessi standard qualitativi elevati.
              </p>
              <Link
                to="/contatti"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                Richiedi informazioni
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <img
                src={heroImage}
                alt="Stabilimento produttivo Mont.El"
                title="Stabilimento produttivo"
                loading="lazy"
                width={1300}
                height={900}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Le Nostre Capacità
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-3">
                  {cap.value}
                </div>
                <p className="text-blue-100 text-lg">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tecnologia</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              Macchinari e Attrezzature
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <img
              src={apparecchiaturaImg}
              alt="Macchinari produzione Mont.El"
              title="Macchinari produzione"
              loading="lazy"
              width={600}
              height={450}
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
            <img
              src={processoImg}
              alt="Processo produttivo Mont.El"
              title="Processo produttivo"
              loading="lazy"
              width={600}
              height={450}
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={stabilimentoImg}
                alt="Controllo qualità Mont.El"
                title="Controllo qualità"
                loading="lazy"
                width={2500}
                height={900}
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Garanzia</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Qualità in ogni fase
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ogni fase del processo produttivo è sottoposta a rigorosi controlli qualità.
                Il 100% dei prodotti viene testato prima della spedizione.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-600">Controllo materiali in ingresso</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-600">Monitoraggio processi in tempo reale</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-600">Collaudo finale al 100%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-600">Tracciabilità completa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vuoi visitare i nostri stabilimenti?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Contattaci per organizzare una visita e scoprire le nostre capacità produttive.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
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
