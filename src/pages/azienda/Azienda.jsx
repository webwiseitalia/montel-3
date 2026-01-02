import { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Images
import heroImage from '../../assets/sviluppo/imgi_2_2500x900-azienda.webp'
import aziendaImg from '../../assets/sviluppo/imgi_8_1300x900-azienda.webp'
import produzioneImg from '../../assets/sviluppo/imgi_4_progettazione.webp'

export default function Azienda() {
  const location = useLocation()
  const isLanding = location.pathname === '/azienda'
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

      // Stats counter animation
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

      // Slide from right
      gsap.utils.toArray('.gsap-slide-right').forEach((el) => {
        gsap.fromTo(el,
          { x: 60, opacity: 0 },
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

      // Scale up
      gsap.utils.toArray('.gsap-scale').forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            delay: i * 0.08
          }
        )
      })

      // Image reveal
      gsap.utils.toArray('.gsap-img-reveal').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      })

    }, containerRef)

    return () => ctx.revert()
  }, [isLanding])

  const subPages = [
    { name: 'Punti di forza', path: '/azienda/punti-di-forza' },
    { name: 'Il Network', path: '/azienda/network' },
  ]

  const stats = [
    { value: '1972', label: 'Anno di fondazione' },
    { value: '200+', label: 'Collaboratori' },
    { value: '3', label: 'Stabilimenti' },
    { value: '50+', label: 'Anni di esperienza' },
  ]

  const milestones = [
    { year: '1972', title: 'Fondazione', desc: 'Giuseppe Novali fonda Mont.El a Sale Marasino' },
    { year: '1995', title: 'ISO 9001', desc: 'Prima certificazione qualità' },
    { year: '2005', title: 'Romania', desc: 'Apertura stabilimento estero' },
    { year: '2015', title: 'IATF 16949', desc: 'Certificazione automotive' },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Azienda Mont.El - Gruppo industriale italiano" title="Mont.El Azienda" width={2500} height={900} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6 hero-subtitle">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-slate-400 text-sm">Il Gruppo Mont.El</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-6 hero-title">
              Azienda
            </h1>
            <p className="text-lg text-slate-400 max-w-xl hero-subtitle">
              Un gruppo industriale italiano specializzato nella progettazione e produzione di componenti elettrici dal 1972.
            </p>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <nav className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            <NavLink
              to="/azienda"
              end
              className={({ isActive }) =>
                `py-2.5 px-5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
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
                  `py-2.5 px-5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {isLanding ? (
        <div>
          {/* Stats */}
          <section className="py-16 bg-slate-50 border-b">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center stat-item">
                    <div className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chi Siamo */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="gsap-slide-left">
                  <div className="text-sm text-blue-600 font-medium mb-4">LA NOSTRA STORIA</div>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6">
                    Un percorso di crescita continua
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Fondata nel 1972 da Giuseppe Novali a Sale Marasino, Mont.El è un gruppo industriale italiano specializzato nella progettazione e produzione di sensori, cablaggi elettrici, quadri e sonde di temperatura.
                  </p>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Con stabilimenti in Italia e Romania, serviamo clienti in tutto il mondo nei settori automotive, aeronautico, nautico, medicale e industriale.
                  </p>
                  <Link
                    to="/azienda/punti-di-forza"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors"
                  >
                    Scopri i nostri punti di forza
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="gsap-img-reveal overflow-hidden rounded-2xl">
                  <img src={aziendaImg} alt="Stabilimento Mont.El a Sale Marasino" title="Stabilimento Mont.El" loading="lazy" width={1300} height={900} className="w-full" />
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16 gsap-fade-up">
                <div className="text-sm text-blue-600 font-medium mb-4">TIMELINE</div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                  Le tappe principali
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl gsap-scale"
                  >
                    <div className="text-3xl font-semibold text-blue-600 mb-2">{item.year}</div>
                    <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Network */}
          <section className="py-24 lg:py-32 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="gsap-img-reveal overflow-hidden rounded-2xl">
                  <img src={produzioneImg} alt="Produzione Mont.El - Network internazionale" title="Produzione Mont.El" loading="lazy" width={800} height={600} className="w-full" />
                </div>

                <div className="gsap-slide-right">
                  <div className="text-sm text-blue-400 font-medium mb-4">NETWORK</div>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                    Presenza internazionale
                  </h2>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Con sedi produttive in Italia e Romania, garantiamo flessibilità, competitività e tempi di consegna ottimali per tutti i mercati europei.
                  </p>
                  <Link
                    to="/azienda/network"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition-colors"
                  >
                    Scopri il network
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center gsap-fade-up">
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6">
                Vuoi saperne di più?
              </h2>
              <p className="text-slate-600 mb-10">
                Scarica il catalogo aziendale o contattaci per una visita ai nostri stabilimenti.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Scarica catalogo
                </button>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 text-slate-900 px-8 py-4 rounded-xl font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
