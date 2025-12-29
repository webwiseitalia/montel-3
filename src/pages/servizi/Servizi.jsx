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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [isLanding])

  const services = [
    {
      title: 'Progettazione',
      description: 'Dalla fase concettuale alla progettazione esecutiva, sviluppiamo soluzioni personalizzate.',
      path: '/servizi/progettazione',
      image: progettazioneImg,
    },
    {
      title: 'Produzione',
      description: 'Stabilimenti all\'avanguardia in Italia e Romania con processi certificati.',
      path: '/servizi/produzione',
      image: produzioneImg,
    },
  ]

  const features = [
    {
      title: 'Codesign',
      description: 'Collaborazione fin dalla fase iniziale per sviluppare soluzioni ottimali.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Flessibilità',
      description: 'Adattiamo processi e volumi alle specifiche esigenze di ogni progetto.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Qualità Certificata',
      description: 'Processi certificati ISO e IATF per i più alti standard.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
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
          alt="Servizi Mont.El"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />

        {/* Decorative */}
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
            Il Nostro Approccio
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <span className="font-bold">Servizi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
            Dalla progettazione alla produzione, un partner completo per le tue esigenze.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal opacity-0 translate-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
              Partner Completo
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Servizi integrati per<br /><span className="font-bold">ogni fase del progetto</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Offriamo un servizio completo che accompagna il cliente dalla prima idea
              fino al prodotto finito. La nostra esperienza e flessibilità ci permettono
              di adattarci a ogni esigenza specifica.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative overflow-hidden rounded-3xl h-[450px] reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 max-w-md">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    Scopri di più
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

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
              I Nostri Punti di Forza
            </span>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
              Perché <span className="font-bold">sceglierci</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
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
            Hai un <span className="font-bold">progetto in mente?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Contattaci per discutere delle tue esigenze.
            Il nostro team è pronto ad assisterti.
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
