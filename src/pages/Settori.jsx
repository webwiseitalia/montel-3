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
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const sectors = [
    { name: 'Automotive', desc: 'Partner di costruttori automotive internazionali.', image: automobilismo },
    { name: 'Aeronautica', desc: 'Componenti certificati per il settore aeronautico.', image: aeronautica },
    { name: 'Nautica', desc: 'Soluzioni marine resistenti alla corrosione.', image: nautica },
    { name: 'Medicale', desc: 'Componenti per apparecchiature elettromedicali.', image: medicale },
    { name: 'Motociclismo', desc: 'Soluzioni per moto da strada e competizione.', image: motociclismo },
    { name: 'HVAC', desc: 'Componenti per sistemi di condizionamento.', image: condizionamento },
    { name: 'Vending', desc: 'Cablaggi per distributori automatici.', image: vending },
    { name: 'Agricoltura', desc: 'Componenti per macchine agricole.', image: agricole },
    { name: 'Elettrodomestici', desc: 'Soluzioni per grandi e piccoli elettrodomestici.', image: elettrodomestici },
    { name: 'Elettrotecnica', desc: 'Quadri e cablaggi industriali.', image: elettrotecnica },
  ]

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
              <span className="text-slate-400 text-sm">Dove Operiamo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-6">
              Settori
            </h1>
            <p className="text-lg text-slate-400 max-w-xl">
              I nostri prodotti sono presenti nelle industrie più esigenti, dall'automotive all'aeronautica.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 text-center reveal opacity-0 translate-y-8">
            {[
              { num: '10+', label: 'Settori industriali' },
              { num: '500+', label: 'Clienti attivi' },
              { num: '45+', label: 'Anni di esperienza' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-semibold text-slate-900 mb-1">{stat.num}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-1">{sector.name}</h3>
                  <p className="text-sm text-slate-500">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Il tuo settore non è in elenco?
          </h2>
          <p className="text-slate-400 mb-10">
            La nostra flessibilità produttiva ci permette di sviluppare soluzioni per qualsiasi esigenza industriale.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
          >
            Contattaci
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
