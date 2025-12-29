import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Images
import heroImage from '../assets/settori applicazione/imgi_2_2500x900-settori-di-applicazione.webp'
import condizionamento from '../assets/settori applicazione/imgi_4_condizionatori.webp'
import motociclismo from '../assets/settori applicazione/imgi_5_motociclismo2.webp'
import vending from '../assets/settori applicazione/imgi_6_last_settore2.webp'
import agricole from '../assets/settori applicazione/imgi_7_magricole2.webp'
import automobilismo from '../assets/settori applicazione/imgi_8_automobilismo2.webp'
import aeronautica from '../assets/settori applicazione/imgi_9_aeronautica2.webp'
import elettrodomestici from '../assets/settori applicazione/imgi_10_elettrodomestici2.webp'
import medicale from '../assets/settori applicazione/imgi_11_medicale2.webp'
import elettrotecnica from '../assets/settori applicazione/imgi_12_elettrotecnica2.webp'
import nautica from '../assets/settori applicazione/imgi_13_nautico2.webp'

export default function Settori() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const sectors = [
    {
      name: 'Automobilismo',
      description: 'Partner di costruttori automotive internazionali.',
      image: automobilismo,
      featured: true,
    },
    {
      name: 'Aeronautica',
      description: 'Componenti certificati per il settore aeronautico.',
      image: aeronautica,
      featured: true,
    },
    {
      name: 'Condizionamento',
      description: 'Componenti per sistemi HVAC residenziali e industriali.',
      image: condizionamento,
    },
    {
      name: 'Motociclismo',
      description: 'Soluzioni per moto da strada, off-road e competizione.',
      image: motociclismo,
    },
    {
      name: 'Vending machines',
      description: 'Cablaggi e sensori per distributori automatici.',
      image: vending,
    },
    {
      name: 'Macchine agricole',
      description: 'Componenti robusti per il settore agricolo.',
      image: agricole,
    },
    {
      name: 'Elettrodomestici',
      description: 'Soluzioni per grandi e piccoli elettrodomestici.',
      image: elettrodomestici,
    },
    {
      name: 'Medicale',
      description: 'Componenti per apparecchiature elettromedicali.',
      image: medicale,
    },
    {
      name: 'Elettrotecnica',
      description: 'Quadri e cablaggi per il settore elettrotecnico.',
      image: elettrotecnica,
    },
    {
      name: 'Nautica',
      description: 'Soluzioni marine resistenti alla corrosione.',
      image: nautica,
    },
  ]

  const featuredSectors = sectors.filter(s => s.featured)
  const otherSectors = sectors.filter(s => !s.featured)

  return (
    <div>
      {/* Hero Cinematico */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img
          src={heroImage}
          alt="Settori di applicazione"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 to-transparent" />

        {/* Decorative */}
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
            Dove Operiamo
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Settori di <span className="font-bold">Applicazione</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
            I nostri prodotti sono presenti nelle industrie più esigenti, dall'automotive all'aeronautica.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal opacity-0 translate-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
              Esperienza Multi-Settore
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Competenza trasversale<br /><span className="font-bold">per ogni industria</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Oltre 40 anni di esperienza ci hanno permesso di sviluppare competenze specifiche per ogni settore industriale.
              Conosciamo le esigenze, le normative e gli standard di qualità richiesti da ogni mercato.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sectors */}
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredSectors.map((sector, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-[400px] reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-gray-300">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sectors Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherSectors.map((sector, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-[280px] reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Settori industriali</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Clienti attivi</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">40+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Anni di esperienza</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Il tuo settore <span className="font-bold">non è in elenco?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            La nostra flessibilità produttiva ci permette di sviluppare soluzioni per qualsiasi esigenza industriale.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
          >
            Parliamo del tuo progetto
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
