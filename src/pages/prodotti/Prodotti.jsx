import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Images
import heroImage from '../../assets/Produzione/imgi_3_prodotti_header_page.webp'
import sensoriThumb from '../../assets/Produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../../assets/Produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../../assets/Produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../../assets/Produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function Prodotti() {
  const location = useLocation()
  const isLanding = location.pathname === '/prodotti'
  const observerRef = useRef(null)

  useEffect(() => {
    if (!isLanding) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [isLanding])

  const products = [
    {
      title: 'Sensori di livello carburante',
      desc: 'Sensori di alta precisione per il monitoraggio del livello carburante in ambito automotive, nautico e industriale.',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriThumb,
      features: ['Alta precisione', 'Multi-settore', 'Personalizzabili'],
    },
    {
      title: 'Cablaggi elettrici',
      desc: 'Cablaggi progettati e prodotti su misura per ogni esigenza. Dal prototipo alla produzione in serie.',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiThumb,
      features: ['Su misura', 'Certificati', 'Prototipazione'],
    },
    {
      title: 'Quadri elettrici',
      desc: 'Quadri personalizzati per applicazioni industriali e automazione. Progettazione e collaudo in-house.',
      path: '/prodotti/quadri-elettrici',
      image: quadriThumb,
      features: ['Automazione', 'Industriali', 'Chiavi in mano'],
    },
    {
      title: 'Sonde di temperatura',
      desc: 'Sonde per il rilevamento preciso della temperatura in ambienti estremi. NTC, PTC, termocoppie.',
      path: '/prodotti/sonde-temperatura',
      image: sondeThumb,
      features: ['Multi-tecnologia', 'Alta resistenza', 'Range esteso'],
    },
  ]

  if (!isLanding) {
    return <Outlet />
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-slate-950">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-400 text-sm">Le Nostre Soluzioni</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-6">
              Prodotti
            </h1>
            <p className="text-lg text-slate-400 max-w-xl">
              Quattro linee di prodotto sviluppate in oltre 40 anni di esperienza per i settori più esigenti.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl reveal opacity-0 translate-y-8">
            <div className="text-sm text-blue-600 font-medium mb-4">GAMMA COMPLETA</div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4">
              Soluzioni elettriche personalizzate
            </h2>
            <p className="text-slate-600">
              Dalla progettazione alla produzione, offriamo componenti elettrici personalizzati per rispondere a ogni esigenza specifica del mercato.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <Link
                key={i}
                to={product.path}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feat, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                          {feat}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium group-hover:text-blue-600">
                      Scopri di più
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Certificati ISO', icon: '✓' },
              { label: 'Made in Italy', icon: '🇮🇹' },
              { label: 'Consegna rapida', icon: '⚡' },
              { label: 'Personalizzabili', icon: '⚙' },
            ].map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <span className="text-slate-900 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Cerchi una soluzione personalizzata?
          </h2>
          <p className="text-slate-400 mb-10">
            Il nostro team tecnico è a disposizione per studiare insieme la soluzione più adatta alle tue esigenze.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Richiedi preventivo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+390524123456"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-medium border border-slate-700 hover:border-slate-600 transition-colors"
            >
              Chiamaci
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
