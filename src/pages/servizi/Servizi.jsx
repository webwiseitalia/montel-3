import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Images
import heroImage from '../../assets/sviluppo/imgi_17_2500x900-azienda.webp'
import progettazioneImg from '../../assets/sviluppo/imgi_4_progettazione.webp'
import produzioneImg from '../../assets/sviluppo/imgi_8_1300x900-azienda.webp'

export default function Servizi() {
  const location = useLocation()
  const isLanding = location.pathname === '/servizi'
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isLanding) return

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
      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.6 }
      )
      gsap.fromTo('.hero-stat',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.8 }
      )

      // Fade up sections
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

      // Service cards
      gsap.utils.toArray('.service-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            delay: i * 0.15
          }
        )
      })

      // Process steps
      gsap.utils.toArray('.process-step').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            },
            delay: i * 0.08
          }
        )
      })

      // Feature cards
      gsap.utils.toArray('.feature-card').forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            },
            delay: i * 0.1
          }
        )
      })

      // Slide from left
      gsap.utils.toArray('.gsap-slide-left').forEach((el) => {
        gsap.fromTo(el,
          { x: -60, opacity: 0 },
          {
            x: 0,
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
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Servizi Mont.El - Partner completo" title="Servizi Mont.El" loading="lazy" width={2500} height={900} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8 hero-subtitle">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-400 text-sm tracking-wide">I Nostri Servizi</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8 hero-title">
              Partner<br />
              <span className="text-slate-500">completo</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed hero-subtitle">
              Dalla prima idea al prodotto finito, ti accompagniamo in ogni fase del progetto con competenza e flessibilità.
            </p>

            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-colors hero-cta"
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
              { num: '50+', label: 'Anni' },
              { num: '100%', label: 'Qualità' },
              { num: '3', label: 'Sedi' },
            ].map((stat, i) => (
              <div key={i} className="text-right hero-stat">
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 gsap-fade-up">
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
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 service-card"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Servizio ${service.title} - Mont.El`}
                      title={service.title}
                      loading="lazy"
                      width={600}
                      height={600}
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
          <div className="text-center mb-16 gsap-fade-up">
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
                className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow process-step"
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
            <div className="gsap-slide-left">
              <div className="text-sm text-blue-400 font-medium mb-4">PERCHÉ SCEGLIERCI</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                I nostri punti di forza
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Oltre 50 anni di esperienza ci hanno insegnato che il successo nasce dalla collaborazione, dalla qualità e dalla flessibilità.
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

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors feature-card"
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center gsap-fade-up">
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
              href="tel:+39030986300"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-medium border border-slate-700 hover:border-slate-600 transition-colors"
            >
              +39 030 986300
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
