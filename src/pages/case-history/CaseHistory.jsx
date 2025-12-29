import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Images
import heroImage from '../../assets/case history/imgi_18_2500x900-prodotti.webp'
import sensoriImg from '../../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'
import cablaggiImg from '../../assets/case history/imgi_5_cablaggi_elettrici_thumb_case.webp'
import quadriImg from '../../assets/case history/imgi_6_quadri_elettrici_thumb_case.webp'

export default function CaseHistory() {
  const location = useLocation()
  const isLanding = location.pathname === '/case-history'
  const observerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')

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

  const categories = [
    { id: 'all', name: 'Tutti', count: 7 },
    { id: 'sensori', name: 'Sensori', count: 1 },
    { id: 'cablaggi', name: 'Cablaggi', count: 5 },
    { id: 'quadri', name: 'Quadri', count: 1 },
  ]

  const caseStudies = [
    {
      title: 'Sensori di livello carburante',
      client: 'Automotive OEM',
      description: 'Sviluppo sensori ad alta precisione per costruttore automotive leader.',
      path: '/case-history/sensori-livello-carburante',
      category: 'sensori',
      image: sensoriImg,
      year: '2023',
      featured: true,
    },
    {
      title: 'Cablaggi per moto racing',
      client: 'Team MotoGP',
      description: 'Sistema cablaggio completo per moto da competizione.',
      path: '/case-history/cablaggi-elettrici',
      category: 'cablaggi',
      image: cablaggiImg,
      year: '2023',
      featured: true,
    },
    {
      title: 'Quadri per automazione',
      client: 'Industria 4.0',
      description: 'Quadri elettrici per linea di produzione automatizzata.',
      path: '/case-history/quadri-elettrici',
      category: 'quadri',
      image: quadriImg,
      year: '2022',
    },
    {
      title: 'Cablaggi medicali',
      client: 'Medical Device Co.',
      description: 'Cablaggi certificati per apparecchiature medicali.',
      path: '/case-history/cablaggi-elettrici',
      category: 'cablaggi',
      image: cablaggiImg,
      year: '2022',
    },
    {
      title: 'Cablaggi aeronautici',
      client: 'Aerospace Company',
      description: 'Cablaggio per avionica di nuova generazione.',
      path: '/case-history/cablaggi-elettrici',
      category: 'cablaggi',
      image: cablaggiImg,
      year: '2021',
    },
  ]

  const filteredCases = activeCategory === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory)

  const featuredCases = caseStudies.filter(c => c.featured)

  if (!isLanding) {
    return <Outlet />
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-400 text-sm tracking-wide">Progetti Realizzati</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8">
              Case<br />
              <span className="text-slate-500">History</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed">
              Storie di successo e soluzioni concrete. Scopri come abbiamo affrontato le sfide dei nostri clienti.
            </p>
          </div>

          {/* Stats - Right Side */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8">
            {[
              { num: '7+', label: 'Case Study' },
              { num: '100%', label: 'Soddisfazione' },
              { num: '3', label: 'Categorie' },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-3xl font-semibold text-white">{stat.num}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal opacity-0 translate-y-8">
            <div>
              <div className="text-sm text-blue-600 font-medium mb-4">IN EVIDENZA</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                Progetti recenti
              </h2>
            </div>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Hai un progetto simile?
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCases.map((caseStudy, i) => (
              <Link
                key={i}
                to={caseStudy.path}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-blue-600 font-medium uppercase">{caseStudy.category}</span>
                      <span className="text-xs text-slate-400">{caseStudy.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-2">{caseStudy.client}</p>
                    <p className="text-slate-600 mb-6">{caseStudy.description}</p>
                    <span className="inline-flex items-center gap-2 text-slate-900 font-medium group-hover:text-blue-600">
                      Leggi il case study
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

      {/* ALL CASES */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8">
            <div className="text-sm text-blue-600 font-medium mb-4">ARCHIVIO COMPLETO</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
              Tutti i progetti
            </h2>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseStudy, i) => (
              <Link
                key={i}
                to={caseStudy.path}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-slate-900 text-xs font-medium rounded-lg">
                      {caseStudy.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-blue-600 font-medium uppercase">{caseStudy.category}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{caseStudy.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8">
            <div className="text-sm text-blue-400 font-medium mb-4">PER CATEGORIA</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">
              Esplora per prodotto
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Sensori di livello', count: 1, path: '/case-history/sensori-livello-carburante', image: sensoriImg },
              { title: 'Cablaggi elettrici', count: 5, path: '/case-history/cablaggi-elettrici', image: cablaggiImg },
              { title: 'Quadri elettrici', count: 1, path: '/case-history/quadri-elettrici', image: quadriImg },
            ].map((category, i) => (
              <Link
                key={i}
                to={category.path}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold">{category.count}</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-slate-400 text-sm group-hover:text-white">
                    Vedi {category.count} {category.count === 1 ? 'progetto' : 'progetti'}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Hai un progetto simile?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Contattaci per discutere delle tue esigenze. Saremo lieti di studiare la soluzione più adatta.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
          >
            Parliamo del tuo progetto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
