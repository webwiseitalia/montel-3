import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo('.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      )

      // Stats
      gsap.utils.toArray('.stat-item').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none'
            },
            delay: i * 0.1
          }
        )
      })

      // Sector cards
      gsap.utils.toArray('.sector-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            },
            delay: (i % 5) * 0.08
          }
        )
      })

      // CTA section
      gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

    }, containerRef)

    return () => ctx.revert()
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
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Settori di applicazione Mont.El" title="Settori di applicazione" width={2500} height={900} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6 hero-subtitle">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-400 text-sm">Dove Operiamo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-6 hero-title">
              Settori
            </h1>
            <p className="text-lg text-slate-400 max-w-xl hero-subtitle">
              I nostri prodotti sono presenti nelle industrie più esigenti, dall'automotive all'aeronautica.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            {[
              { num: '10+', label: 'Settori industriali' },
              { num: '500+', label: 'Clienti attivi' },
              { num: '50+', label: 'Anni di esperienza' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
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
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all sector-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={`Settore ${sector.name} - Mont.El`}
                    title={sector.name}
                    loading="lazy"
                    width={400}
                    height={300}
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center gsap-fade-up">
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
