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
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [isLanding])

  const certifications = [
    { name: 'ISO 9001', year: '1995', desc: 'Sistema di gestione qualità' },
    { name: 'IATF 16949', year: '2015', desc: 'Standard automotive' },
    { name: 'ISO 14001', year: '2018', desc: 'Gestione ambientale' },
    { name: 'UL', year: '2010', desc: 'Sicurezza elettrica' },
  ]

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
              <span className="text-slate-400 text-sm tracking-wide">Standard Certificati</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-8">
              Qualità<br />
              <span className="text-slate-500">come garanzia</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed">
              L'eccellenza non è un traguardo ma un percorso quotidiano. Ogni componente che esce dai nostri stabilimenti è il risultato di processi rigorosi.
            </p>

            <Link
              to="/qualita/certificazioni"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-colors"
            >
              Scopri le certificazioni
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats - Right Side */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8">
            {[
              { num: '100%', label: 'Controllo' },
              { num: '5+', label: 'Certificazioni' },
              { num: '0.1%', label: 'Difettosità' },
            ].map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-3xl font-semibold text-white">{stat.num}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8">
            <div className="text-sm text-blue-600 font-medium mb-4">IL NOSTRO APPROCCIO</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
              Qualità in ogni fase
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Progettazione', desc: 'Codesign con il cliente per soluzioni ottimali' },
              { step: '02', title: 'Prototipazione', desc: 'Test e validazione prima della produzione' },
              { step: '03', title: 'Produzione', desc: 'Processi certificati e controllati' },
              { step: '04', title: 'Collaudo', desc: 'Controllo qualità al 100% su ogni pezzo' },
            ].map((phase, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors h-full">
                  <div className="text-blue-600 text-sm font-medium mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-slate-600 text-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY AREAS */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal opacity-0 translate-y-8">
            <div>
              <div className="text-sm text-blue-600 font-medium mb-4">AREE DI ECCELLENZA</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                Scopri la nostra qualità
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityCards.map((card, i) => (
              <Link
                key={i}
                to={card.path}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0 translate-y-8">
              <div className="text-sm text-blue-400 font-medium mb-4">STANDARD INTERNAZIONALI</div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Certificazioni riconosciute
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Le nostre certificazioni non sono solo documenti. Sono la prova tangibile del nostro impegno quotidiano verso l'eccellenza e la soddisfazione del cliente.
              </p>
              <Link
                to="/qualita/certificazioni"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-colors"
              >
                Visualizza tutte
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4 reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                      <span className="text-xs text-slate-500">Dal {cert.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{cert.desc}</p>
                  </div>
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
            Vuoi conoscere i nostri standard qualitativi?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Richiedi la documentazione tecnica e le certificazioni complete.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Richiedi documentazione
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
