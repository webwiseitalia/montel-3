import { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Images
import heroImage from '../../assets/Produzione/imgi_3_prodotti_header_page.webp'
import sensoriThumb from '../../assets/Produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../../assets/Produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../../assets/Produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../../assets/Produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function Prodotti() {
  const location = useLocation()
  const isLanding = location.pathname === '/prodotti'
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

  const products = [
    {
      title: 'Sensori di livello carburante',
      subtitle: 'Precisione e affidabilità',
      description: 'Sensori di alta precisione per il monitoraggio del livello carburante.',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriThumb,
    },
    {
      title: 'Cablaggi elettrici',
      subtitle: 'Approccio codesign',
      description: 'Cablaggi progettati e prodotti su misura per ogni esigenza.',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiThumb,
    },
    {
      title: 'Quadri elettrici',
      subtitle: 'Soluzioni complete',
      description: 'Quadri personalizzati per applicazioni industriali.',
      path: '/prodotti/quadri-elettrici',
      image: quadriThumb,
    },
    {
      title: 'Sonde di temperatura',
      subtitle: 'Gamma completa',
      description: 'Sonde per il rilevamento preciso della temperatura.',
      path: '/prodotti/sonde-temperatura',
      image: sondeThumb,
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
          alt="Prodotti Mont.El"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />

        {/* Decorative */}
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
            Le Nostre Soluzioni
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <span className="font-bold">Prodotti</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
            Soluzioni elettriche ed elettroniche progettate e prodotte con i più alti standard qualitativi.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal opacity-0 translate-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
              Gamma Completa
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Quattro linee di prodotto,<br />
              <span className="font-bold">infinite possibilità</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dalla progettazione alla produzione, offriamo componenti elettrici personalizzati
              per rispondere a ogni esigenza specifica del mercato.
            </p>
          </div>
        </div>
      </section>

      {/* Products Bento Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.path}
                className={`group relative overflow-hidden rounded-3xl reveal opacity-0 translate-y-8 ${
                  index === 0 ? 'lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${index === 0 ? 'aspect-[3/4]' : 'aspect-[16/10]'} overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-2">
                      {product.subtitle}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-4 max-w-md">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-medium">
                      Scopri di più
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Hai bisogno di una<br /><span className="font-bold">soluzione personalizzata?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Il nostro team tecnico è a disposizione per studiare insieme la soluzione più adatta alle tue esigenze.
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
