import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// Images
import heroImage from '../assets/Produzione/imgi_2_2500x900-prodotti.webp'
import aboutImage from '../assets/sviluppo/imgi_8_1300x900-azienda.webp'
import qualityImage from '../assets/apparecchiature/imgi_7_1300x900-qualita.webp'
import sensoriThumb from '../assets/Produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../assets/Produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../assets/Produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../assets/Produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function Home() {
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

  const products = [
    { title: 'Sensori di livello', desc: 'Carburante', path: '/prodotti/sensori-livello-carburante', image: sensoriThumb },
    { title: 'Cablaggi elettrici', desc: 'Custom', path: '/prodotti/cablaggi-elettrici', image: cablaggiThumb },
    { title: 'Quadri elettrici', desc: 'Industriali', path: '/prodotti/quadri-elettrici', image: quadriThumb },
    { title: 'Sonde temperatura', desc: 'Precisione', path: '/prodotti/sonde-temperatura', image: sondeThumb },
  ]

  const sectors = [
    'Automotive', 'Motocicli', 'Aeronautica', 'Nautica',
    'Medicale', 'HVAC', 'Vending', 'Industriale'
  ]

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-400 text-sm tracking-wide">Dal 1979 • Fidenza, Italia</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8">
              Componenti elettrici<br />
              <span className="text-slate-500">di precisione</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed">
              Progettiamo e produciamo sensori, cablaggi, quadri elettrici e sonde di temperatura per i settori industriali più esigenti.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-colors"
              >
                Richiedi preventivo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/prodotti"
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 px-7 py-3.5 rounded-xl font-medium border border-slate-700 hover:border-blue-600 transition-all"
              >
                Catalogo prodotti
              </Link>
            </div>
          </div>

          {/* Stats - Right Side */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8">
            {[
              { num: '45+', label: 'Anni' },
              { num: '3', label: 'Sedi' },
              { num: '100%', label: 'Qualità' },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-3xl font-semibold text-white">{stat.num}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="reveal opacity-0 translate-y-8 order-2 lg:order-1">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Stabilimento Mont.El"
                  className="w-full rounded-2xl"
                />
                {/* Overlay Card */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl hidden md:block">
                  <div className="text-3xl font-semibold mb-1">1979</div>
                  <div className="text-slate-400 text-sm">Anno di fondazione</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="reveal opacity-0 translate-y-8 order-1 lg:order-2">
              <div className="text-sm text-blue-600 font-medium mb-4">CHI SIAMO</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                Un gruppo industriale italiano leader nel settore elettrico
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Mont.El progetta e produce componenti elettrici ed elettronici per i settori più esigenti: automotive, aeronautica, nautica, medicale e industriale.
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Con stabilimenti in Italia e Romania, garantiamo qualità certificata ISO 9001 e IATF 16949, flessibilità produttiva e tempi di consegna competitivi.
              </p>
              <Link
                to="/azienda"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors"
              >
                Scopri di più
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal opacity-0 translate-y-8">
            <div>
              <div className="text-sm text-blue-600 font-medium mb-4">PRODOTTI</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                Le nostre soluzioni
              </h2>
            </div>
            <Link
              to="/prodotti"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Vedi tutti i prodotti
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Link
                key={i}
                to={product.path}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-1">{product.desc}</div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-sm text-blue-400 font-medium mb-4">SETTORI</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Presenti nelle industrie più esigenti
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Oltre 40 anni di esperienza ci hanno permesso di sviluppare competenze specifiche per ogni settore industriale, dalle certificazioni automotive alle applicazioni medicali.
              </p>
              <Link
                to="/settori"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition-colors"
              >
                Esplora i settori
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Sectors Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              {sectors.map((sector, i) => (
                <div
                  key={i}
                  className="px-5 py-4 bg-slate-800/50 rounded-xl text-slate-300 text-sm font-medium border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-default"
                >
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-sm text-blue-600 font-medium mb-4">QUALITÀ</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6">
                Standard certificati internazionali
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Le nostre certificazioni testimoniano l'impegno costante verso l'eccellenza. Ogni prodotto supera rigorosi controlli qualità prima della consegna.
              </p>

              {/* Certifications */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: 'ISO 9001', desc: 'Gestione qualità' },
                  { name: 'IATF 16949', desc: 'Standard automotive' },
                  { name: 'ISO 14001', desc: 'Gestione ambientale' },
                  { name: 'UL Listed', desc: 'Sicurezza elettrica' },
                ].map((cert, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl">
                    <div className="font-semibold text-slate-900">{cert.name}</div>
                    <div className="text-sm text-slate-500">{cert.desc}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/qualita"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors"
              >
                Scopri le certificazioni
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              <img
                src={qualityImage}
                alt="Controllo qualità"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Hai un progetto da realizzare?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Contattaci per discutere delle tue esigenze. Il nostro team tecnico è pronto ad assisterti nella progettazione e produzione dei tuoi componenti.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Contattaci
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+390524123456"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-medium border border-slate-700 hover:border-slate-600 transition-colors"
            >
              +39 0524 123456
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
