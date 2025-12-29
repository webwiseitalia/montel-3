import { useEffect, useRef } from 'react'
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [isLanding])

  const categories = [
    {
      title: 'Sensori di livello carburante',
      description: 'Progetti per il settore automotive e industriale.',
      path: '/case-history/sensori-livello-carburante',
      count: 1,
      image: sensoriImg,
    },
    {
      title: 'Cablaggi elettrici',
      description: 'Soluzioni per auto, moto, vending e medicale.',
      path: '/case-history/cablaggi-elettrici',
      count: 5,
      image: cablaggiImg,
    },
    {
      title: 'Quadri elettrici',
      description: 'Quadri per automazione industriale.',
      path: '/case-history/quadri-elettrici',
      count: 1,
      image: quadriImg,
    },
  ]

  if (!isLanding) {
    return <Outlet />
  }

  return (
    <div>
      {/* Hero Cinematico */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img
          src={heroImage}
          alt="Case History Mont.El"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />

        {/* Decorative */}
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
            Storie di Successo
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Case <span className="font-bold">History</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
            Scopri alcuni dei progetti realizzati per i nostri clienti.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal opacity-0 translate-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
              I Nostri Progetti
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Storie di successo,<br /><span className="font-bold">soluzioni concrete</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ogni progetto è unico. Scopri come abbiamo affrontato le sfide
              dei nostri clienti sviluppando soluzioni su misura che hanno
              superato le aspettative.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group relative overflow-hidden rounded-3xl h-[400px] reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

                {/* Count Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                    {category.count} {category.count === 1 ? 'progetto' : 'progetti'}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    Esplora i progetti
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Case study documentati</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Clienti soddisfatti</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Categorie prodotto</div>
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
            Hai un <span className="font-bold">progetto simile?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Contattaci per discutere delle tue esigenze.
            Saremo lieti di studiare la soluzione più adatta.
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
