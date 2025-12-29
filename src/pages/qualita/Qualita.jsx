import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Images
import heroImage from '../../assets/apparecchiature/imgi_16_2500x900-qualita.webp'
import qualita1 from '../../assets/apparecchiature/imgi_22_qualita_1.webp'
import qualita2 from '../../assets/apparecchiature/imgi_23_qualita_2.webp'
import qualita3 from '../../assets/apparecchiature/imgi_24_qualita_3.webp'
import brevettiImg from '../../assets/apparecchiature/imgi_25_brevetti.webp'
import filiImg from '../../assets/apparecchiature/imgi_3_fili_qualita.webp'

export default function Qualita() {
  const location = useLocation()
  const isLanding = location.pathname === '/qualita'
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

  const qualityCards = [
    {
      title: 'Codesign',
      description: 'Collaborazione fin dalla fase progettuale per soluzioni su misura.',
      path: '/qualita/codesign',
      image: qualita1,
    },
    {
      title: 'Tecnologia',
      description: 'Investimenti continui in macchinari e processi all\'avanguardia.',
      path: '/qualita/tecnologia',
      image: qualita2,
    },
    {
      title: 'Certificazioni',
      description: 'ISO 9001, IATF 16949 e altri standard internazionali.',
      path: '/qualita/certificazioni',
      image: qualita3,
    },
    {
      title: 'Brevetti',
      description: 'Innovazioni protette che testimoniano la nostra ricerca.',
      path: '/qualita/brevetti',
      image: brevettiImg,
    },
    {
      title: 'Riconoscimenti',
      description: 'Premi e attestati ricevuti da clienti e istituzioni.',
      path: '/qualita/riconoscimenti',
      image: filiImg,
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
          alt="Qualità Mont.El"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />

        {/* Decorative */}
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
            I Nostri Standard
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <span className="font-bold">Qualità</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
            L'eccellenza come standard, la certificazione come garanzia.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal opacity-0 translate-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
              Il Nostro Impegno
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Qualità certificata<br /><span className="font-bold">in ogni fase</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Da oltre 40 anni investiamo in qualità, tecnologia e formazione.
              Ogni prodotto che esce dai nostri stabilimenti è il risultato di
              processi rigorosi e controlli accurati.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Cards - Bento Style */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityCards.map((card, index) => (
              <Link
                key={index}
                to={card.path}
                className={`group relative overflow-hidden rounded-3xl reveal opacity-0 translate-y-8 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${index === 0 ? 'h-full min-h-[400px]' : 'aspect-[16/10]'} overflow-hidden`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-medium">
                      Scopri di più
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Controllo qualità</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Certificazioni attive</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Brevetti registrati</div>
            </div>
            <div className="reveal opacity-0 translate-y-8" style={{ animationDelay: '300ms' }}>
              <div className="text-5xl font-bold text-gray-900 mb-2">0.1%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wider">Difettosità media</div>
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
            Vuoi conoscere i nostri<br /><span className="font-bold">standard qualitativi?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Richiedi documentazione tecnica e certificazioni.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
          >
            Richiedi informazioni
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
