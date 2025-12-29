import { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

// Images
import heroImage from '../../assets/sviluppo/imgi_2_2500x900-azienda.webp'
import aziendaImg from '../../assets/sviluppo/imgi_8_1300x900-azienda.webp'
import produzioneImg from '../../assets/sviluppo/imgi_4_progettazione.webp'

export default function Azienda() {
  const location = useLocation()
  const isLanding = location.pathname === '/azienda'
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
  }, [isLanding])

  const subPages = [
    { name: 'Punti di forza', path: '/azienda/punti-di-forza' },
    { name: 'Il Network', path: '/azienda/network' },
  ]

  const stats = [
    { value: '1979', label: 'Anno di fondazione' },
    { value: '200+', label: 'Collaboratori' },
    { value: '3', label: 'Stabilimenti produttivi' },
    { value: '40+', label: 'Anni di esperienza' },
  ]

  return (
    <div>
      {/* Hero Cinematico */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Azienda Mont.El"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Il Gruppo Mont.El
            </span>
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <span className="font-bold">Innovazione</span> e tradizione<br />dal 1979
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Un gruppo industriale italiano che ha fatto della qualità e dell'innovazione i propri valori fondanti.
            </p>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-1">
            <NavLink
              to="/azienda"
              end
              className={({ isActive }) =>
                `py-3 px-5 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              Panoramica
            </NavLink>
            {subPages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                className={({ isActive }) =>
                  `py-3 px-5 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      {isLanding ? (
        <div>
          {/* Stats Bar */}
          <section className="bg-gray-950 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center reveal opacity-0 translate-y-8"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chi Siamo - Editorial */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="reveal opacity-0 translate-y-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
                    La Nostra Storia
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
                    Un percorso di <span className="font-bold">crescita continua</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Mont.El è un gruppo industriale italiano specializzato nella progettazione
                      e produzione di sensori, cablaggi elettrici, quadri e sonde di temperatura.
                    </p>
                    <p>
                      Con stabilimenti in Italia e Romania, serviamo clienti in tutto il mondo
                      nei settori automotive, aeronautico, navale, medicale e industriale.
                    </p>
                  </div>
                  <Link
                    to="/azienda/punti-di-forza"
                    className="inline-flex items-center gap-2 mt-8 text-gray-900 font-medium group"
                  >
                    <span className="relative">
                      Scopri i nostri punti di forza
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                    </span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="relative reveal opacity-0 translate-y-8" style={{ animationDelay: '150ms' }}>
                  <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-3xl" />
                  <img
                    src={aziendaImg}
                    alt="Stabilimento Mont.El"
                    className="relative rounded-3xl shadow-2xl w-full hover-lift"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Espansione - Split Screen */}
          <section className="relative bg-gray-50 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[500px] lg:h-auto reveal opacity-0 translate-y-8">
                <img
                  src={produzioneImg}
                  alt="Stabilimento produttivo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="py-20 lg:py-32 px-8 lg:px-16 reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
                  Crescita Internazionale
                </span>
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
                  Espansione<br /><span className="font-bold">produttiva</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Oltre agli stabilimenti italiani, il gruppo ha ampliato la propria
                  capacità produttiva con sedi in Romania, garantendo flessibilità e competitività.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Questa strategia ci permette di rispondere rapidamente alle esigenze
                  del mercato mantenendo i più alti standard qualitativi.
                </p>
              </div>
            </div>
          </section>

          {/* Certificazioni */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
                Standard di Eccellenza
              </span>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Certificazioni <span className="font-bold">internazionali</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                ISO 9001, IATF 16949 e altri standard testimoniano il nostro impegno
                costante verso la qualità e la soddisfazione del cliente.
              </p>
              <Link
                to="/qualita/certificazioni"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Scopri le certificazioni
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>

          {/* CTA Catalogo */}
          <section className="relative py-24 bg-gray-950 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Scarica il <span className="font-bold">catalogo aziendale</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Scopri nel dettaglio tutti i nostri prodotti, servizi e capacità produttive.
              </p>
              <button className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
            </div>
          </section>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
