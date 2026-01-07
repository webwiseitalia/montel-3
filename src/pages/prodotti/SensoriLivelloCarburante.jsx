import { Link } from 'react-router-dom'
import ProductSidebar from '../../components/ProductSidebar'

// Images
import heroImage from '../../assets/Produzione/imgi_3_prodotti_header_page.webp'
import sensoriMain from '../../assets/Produzione/imgi_4_sensori_di_livello_thumb.webp'
import sensoriDetail from '../../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'

export default function SensoriLivelloCarburante() {
  const models = [
    { name: 'Sensori Resistivi', description: 'Tecnologia affidabile per applicazioni automotive standard.' },
    { name: 'Sensori Capacitivi', description: 'Alta precisione per fluidi non conduttivi.' },
    { name: 'Sensori a Effetto Hall', description: 'Soluzione senza contatto per ambienti gravosi.' },
    { name: 'Sensori Personalizzati', description: 'Progettazione su misura per esigenze specifiche.' },
  ]

  const specs = [
    { value: '-40/+125°C', label: 'Range temperatura' },
    { value: '±1%', label: 'Precisione' },
    { value: 'IP67', label: 'Grado protezione' },
  ]

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Sensori di Livello Carburante Mont.El"
          title="Sensori di Livello Carburante"
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
              <span className="text-white">Sensori di livello carburante</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Sensori di Livello Carburante
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Soluzioni di misurazione precise e affidabili per ogni applicazione.
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
                  Tecnologia e Precisione
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  I nostri sensori di livello carburante sono progettati per garantire misurazioni
                  precise e affidabili in qualsiasi condizione operativa.
                </p>
                <p className="text-gray-600">
                  Utilizziamo diverse tecnologie (resistiva, capacitiva, a effetto Hall) per rispondere
                  alle esigenze specifiche di ogni applicazione, dall'automotive all'industriale.
                </p>
              </div>

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                <img
                  src={sensoriMain}
                  alt="Sensori di livello carburante Mont.El"
                  title="Sensori di livello carburante"
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Download Catalogo */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Catalogo Sensori
                    </h3>
                    <p className="text-gray-600">
                      Scarica il catalogo completo con tutte le specifiche tecniche.
                    </p>
                  </div>
                  <button className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                </div>
              </div>

              {/* Specifiche Tecniche */}
              <div className="bg-blue-600 rounded-3xl p-8 lg:p-10 mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Specifiche Tecniche
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

              {/* Funzionamento */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm mb-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tecnologia</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                      Come Funzionano
                    </h3>
                    <p className="text-gray-600 mb-4">
                      I sensori di livello utilizzano un galleggiante collegato a un potenziometro
                      o a un sistema senza contatto per misurare il livello del fluido nel serbatoio.
                    </p>
                    <p className="text-gray-600">
                      La variazione di resistenza o del campo magnetico viene convertita in un segnale
                      elettrico proporzionale al livello, garantendo precisione e ripetibilità.
                    </p>
                  </div>
                  <img
                    src={sensoriDetail}
                    alt="Funzionamento sensori di livello"
                    title="Funzionamento sensori"
                    loading="lazy"
                    width={400}
                    height={400}
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                </div>
              </div>

              {/* Modelli / Varianti */}
              <div className="mb-12">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Gamma</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
                  Modelli e Varianti
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {models.map((model, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-gray-900 mb-2">
                        {model.name}
                      </h4>
                      <p className="text-gray-600">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-6 mb-12">
                <h4 className="font-bold text-amber-800 mb-2">
                  Personalizzazione Disponibile
                </h4>
                <p className="text-amber-700">
                  Tutti i nostri sensori possono essere personalizzati per adattarsi alle specifiche
                  geometrie dei serbatoi e alle esigenze applicative del cliente.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center bg-blue-600 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hai bisogno di un sensore personalizzato?
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
