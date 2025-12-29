import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Images
import heroImage from '../../assets/sviluppo/imgi_17_2500x900-azienda.webp'
import progettazioneImg from '../../assets/sviluppo/imgi_4_progettazione.webp'
import produzioneImg from '../../assets/sviluppo/imgi_8_1300x900-azienda.webp'

export default function Servizi() {
  const location = useLocation()
  const isLanding = location.pathname === '/servizi'
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

  const services = [
    {
      title: 'Progettazione',
      description: 'Dalla fase concettuale alla progettazione esecutiva, sviluppiamo soluzioni personalizzate con approccio codesign.',
      path: '/servizi/progettazione',
      image: progettazioneImg,
    },
    {
      title: 'Produzione',
      description: 'Stabilimenti all\'avanguardia in Italia e Romania con processi certificati e controllo qualità al 100%.',
      path: '/servizi/produzione',
      image: produzioneImg,
    },
  ]

  const processSteps = [
    { num: '01', title: 'Analisi', desc: 'Studio delle esigenze e specifiche tecniche' },
    { num: '02', title: 'Progettazione', desc: 'Sviluppo concept e disegni esecutivi' },
    { num: '03', title: 'Prototipo', desc: 'Realizzazione e test del campione' },
    { num: '04', title: 'Validazione', desc: 'Approvazione cliente e certificazioni' },
    { num: '05', title: 'Produzione', desc: 'Serie con controllo qualità integrato' },
    { num: '06', title: 'Consegna', desc: 'Logistica ottimizzata just-in-time' },
  ]

  const features = [
    { title: 'Codesign', desc: 'Lavoriamo insieme al cliente dalla prima idea' },
    { title: 'Rapidità', desc: 'Time-to-market ridotto e consegne puntuali' },
    { title: 'Qualità', desc: 'Processi certificati ISO e IATF' },
    { title: 'Flessibilità', desc: 'Adattiamo volumi e tempistiche' },
  ]

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
              <span className="text-slate-400 text-sm tracking-wide">I Nostri Servizi</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8">
              Partner<br />
              <span className="text-slate-500">completo</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed">
              Dalla prima idea al prodotto finito, ti accompagniamo in ogni fase del progetto con competenza e flessibilità.
            </p>

            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-colors"
            >
              Richiedi consulenza
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats - Right Side */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8">
            {[
              { num: '45+', label: 'Anni' },
              { num: '100%', label: 'Qualità' },
              { num: '3', label: 'Sedi' },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-3xl font-semibold text-white">{stat.num}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal opacity-0 translate-y-8">
            <div>
              <div className="text-sm text-blue-600 font-medium mb-4">COSA FACCIAMO</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                I nostri servizi
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-slate-900 font-medium group-hover:text-blue-600">
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

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8">
            <div className="text-sm text-blue-600 font-medium mb-4">IL NOSTRO PROCESSO</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Come lavoriamo
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Un processo strutturato che garantisce qualità e tempistiche certe in ogni fase.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-blue-600 text-sm font-medium mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-sm text-blue-400 font-medium mb-4">PERCHÉ SCEGLIERCI</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                I nostri punti di forza
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Oltre 40 anni di esperienza ci hanno insegnato che il successo nasce dalla collaborazione, dalla qualità e dalla flessibilità.
              </p>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-medium hover:bg-slate-100 transition-colors"
              >
                Parliamone insieme
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita. Il nostro team è pronto ad assisterti in ogni fase del tuo progetto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Richiedi info
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
