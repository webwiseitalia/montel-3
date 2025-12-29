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
import caseHistory1 from '../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'
import caseHistory2 from '../assets/case history/imgi_5_cablaggi_elettrici_thumb_case.webp'
import caseHistory3 from '../assets/case history/imgi_6_quadri_elettrici_thumb_case.webp'

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const products = [
    {
      title: 'Sensori di livello',
      subtitle: 'carburante',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriThumb,
    },
    {
      title: 'Cablaggi',
      subtitle: 'elettrici',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiThumb,
    },
    {
      title: 'Quadri',
      subtitle: 'elettrici',
      path: '/prodotti/quadri-elettrici',
      image: quadriThumb,
    },
    {
      title: 'Sonde di',
      subtitle: 'temperatura',
      path: '/prodotti/sonde-temperatura',
      image: sondeThumb,
    },
  ]

  const stats = [
    { number: '45+', label: 'Anni di esperienza' },
    { number: '2', label: 'Stabilimenti produttivi' },
    { number: '100%', label: 'Made in Italy & Romania' },
  ]

  const sectors = ['Automotive', 'Moto', 'Aeronautica', 'Nautica', 'Medicale', 'HVAC', 'Vending', 'Industriale']

  return (
    <div className="overflow-x-hidden">
      {/* HERO - Cinematic style */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mont.El produzione"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-blue-900/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium tracking-wider uppercase mb-8">
                <span className="w-12 h-px bg-blue-400" />
                Dal 1979
              </span>
            </div>

            <h1 className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-white mb-2">
                Innovazione
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                in ogni <span className="gradient-text">connessione</span>
              </span>
            </h1>

            <p className="animate-fade-up text-lg md:text-xl text-slate-300 mt-8 mb-12 max-w-xl leading-relaxed" style={{ animationDelay: '0.6s' }}>
              Progettiamo e produciamo componenti elettrici ed elettronici per i settori più esigenti. Qualità certificata, flessibilità totale.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.8s' }}>
              <Link
                to="/contatti"
                className="group relative bg-white text-slate-900 px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10">Parliamo del tuo progetto</span>
              </Link>
              <Link
                to="/prodotti"
                className="group flex items-center gap-3 text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/10 transition-all"
              >
                Esplora i prodotti
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-slate-900 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO - Editorial layout */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal opacity-0 translate-y-8">
              <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-blue-600" />
                Chi siamo
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                Esperienza e innovazione dal cuore dell'Italia
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Mont.El è un gruppo industriale italiano specializzato nella progettazione e produzione di sensori, cablaggi elettrici, quadri e sonde di temperatura.
              </p>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Con stabilimenti in Italia e Romania, serviamo clienti in tutto il mondo nei settori automotive, aeronautico, navale, medicale e industriale. La nostra forza? Qualità certificata e flessibilità produttiva.
              </p>
              <Link
                to="/azienda"
                className="inline-flex items-center gap-2 text-slate-900 font-semibold group"
              >
                <span className="line-hover">Scopri la nostra storia</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="reveal opacity-0 translate-y-8 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-[2rem] -z-10" />
                <img
                  src={aboutImage}
                  alt="Stabilimento Mont.El"
                  className="rounded-[1.5rem] w-full shadow-2xl"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">ISO 9001 | IATF 16949</div>
                    <div className="text-sm text-slate-500">Certificazioni internazionali</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODOTTI - Bento style grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-8 text-center mb-20">
            <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-blue-600" />
              I nostri prodotti
              <span className="w-8 h-px bg-blue-600" />
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Cosa produciamo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.path}
                className="reveal opacity-0 translate-y-8 group relative bg-white rounded-[1.5rem] overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white">
                    <span className="block text-lg font-light opacity-80">{product.title}</span>
                    <span className="block text-2xl font-bold">{product.subtitle}</span>
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-white/70 text-sm group-hover:text-white transition-colors">
                    <span>Scopri</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SETTORI - Marquee style */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative">
          <div className="reveal opacity-0 translate-y-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-blue-400" />
                Settori
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Dove operiamo
              </h2>
            </div>
            <p className="text-slate-400 max-w-md">
              I nostri prodotti sono presenti nelle industrie più esigenti, dall'automotive all'aeronautica.
            </p>
          </div>
        </div>

        {/* Sectors marquee */}
        <div className="relative">
          <div className="flex gap-4 animate-marquee">
            {[...sectors, ...sectors].map((sector, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white font-medium"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 text-center relative">
          <Link
            to="/settori"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors"
          >
            Tutti i settori
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* QUALITÀ - Split screen */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 lg:w-1/2">
          <img
            src={qualityImage}
            alt="Qualità Mont.El"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 lg:bg-transparent" />
        </div>

        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:w-1/2 lg:ml-auto lg:pl-16">
              <div className="reveal opacity-0 translate-y-8 bg-white rounded-[2rem] p-10 lg:p-14 shadow-2xl">
                <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium tracking-wider uppercase mb-6">
                  <span className="w-8 h-px bg-blue-600" />
                  Qualità
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Standard di eccellenza certificati
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Certificazioni ISO 9001, IATF 16949 e brevetti internazionali testimoniano il nostro impegno costante verso l'eccellenza. Ogni prodotto supera rigorosi controlli qualità.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {['ISO 9001', 'IATF 16949', 'Brevetti', 'Test 100%'].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {cert}
                    </div>
                  ))}
                </div>

                <Link
                  to="/qualita"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors"
                >
                  Scopri di più
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE HISTORY */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal opacity-0 translate-y-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-blue-600" />
                Case History
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Storie di successo
              </h2>
            </div>
            <Link
              to="/case-history"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold group"
            >
              <span className="line-hover">Tutti i progetti</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: caseHistory1, title: 'Sensori automotive', desc: 'Sviluppo sensori resistivi per veicoli commerciali' },
              { img: caseHistory2, title: 'Cablaggi moto', desc: 'Soluzioni complete per moto da competizione' },
              { img: caseHistory3, title: 'Quadri industriali', desc: 'Quadri per automazione di linee produttive' },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="img-reveal rounded-[1.5rem] overflow-hidden mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Iniziamo a lavorare insieme
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Hai un progetto da realizzare? Contattaci per discutere delle tue esigenze.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-2xl shadow-black/20"
            >
              Parliamone
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
