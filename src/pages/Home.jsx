import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// Images
import heroImage from '../assets/Produzione/imgi_2_2500x900-prodotti.webp'
import aboutImage from '../assets/sviluppo/imgi_8_1300x900-azienda.webp'
import qualityImage from '../assets/apparecchiature/imgi_7_1300x900-qualita.webp'
import sensoriThumb from '../assets/Produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../assets/Produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../assets/Produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../assets/Produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function Home() {
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
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const products = [
    { title: 'Sensori di livello', desc: 'Precisione certificata per applicazioni automotive e industriali', path: '/prodotti/sensori-livello-carburante', image: sensoriThumb },
    { title: 'Cablaggi elettrici', desc: 'Soluzioni custom per ogni esigenza produttiva', path: '/prodotti/cablaggi-elettrici', image: cablaggiThumb },
    { title: 'Quadri elettrici', desc: 'Automazione industriale chiavi in mano', path: '/prodotti/quadri-elettrici', image: quadriThumb },
    { title: 'Sonde temperatura', desc: 'Monitoraggio termico ad alta affidabilità', path: '/prodotti/sonde-temperatura', image: sondeThumb },
  ]

  const clients = [
    'Ducati', 'Ferrari', 'Maserati', 'Piaggio', 'Iveco', 'CNH', 'Leonardo', 'Electrolux'
  ]

  return (
    <div className="bg-white">
      {/* HERO - Cinematic Full Screen */}
      <section className="relative h-screen overflow-hidden">
        {/* Video/Image Background with Ken Burns */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Hero Content */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-transparent" />
                    <span className="text-blue-400 text-sm font-medium tracking-[0.2em] uppercase">
                      Dal 1979 a Fidenza
                    </span>
                  </div>

                  {/* Main Title - Editorial Style */}
                  <h1 className="mb-8">
                    <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95]">
                      Ingegneria
                    </span>
                    <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] mt-2">
                      elettrica
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95] mt-2">
                      d'eccellenza
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl lg:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12">
                    Progettiamo e produciamo componenti elettrici per i leader mondiali
                    dell'automotive, aeronautica e industria.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-6">
                    <Link
                      to="/contatti"
                      className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-base font-medium overflow-hidden transition-all duration-500 hover:pr-12"
                    >
                      <span className="relative z-10">Richiedi una consulenza</span>
                      <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="absolute inset-0 bg-blue-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Richiedi una consulenza
                      </span>
                    </Link>
                    <Link
                      to="/azienda"
                      className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors group"
                    >
                      <span className="relative">
                        Scopri Mont.El
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Stats Column */}
                <div className="hidden lg:block lg:col-span-4">
                  <div className="space-y-8 border-l border-white/10 pl-8">
                    {[
                      { value: '€30M+', label: 'Fatturato annuo' },
                      { value: '45', label: 'Anni di esperienza' },
                      { value: '200+', label: 'Dipendenti' },
                      { value: '3', label: 'Stabilimenti produttivi' },
                    ].map((stat, i) => (
                      <div key={i} className="group cursor-default">
                        <div className="text-4xl font-light text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/40 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Clients Marquee */}
          <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
              <div className="flex items-center gap-8">
                <span className="text-white/30 text-xs uppercase tracking-widest whitespace-nowrap">
                  Trusted by
                </span>
                <div className="flex-1 overflow-hidden">
                  <div className="flex gap-12 animate-marquee">
                    {[...clients, ...clients].map((client, i) => (
                      <span key={i} className="text-white/50 text-sm font-medium whitespace-nowrap hover:text-white transition-colors">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* INTRO - Editorial Section */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        {/* Background Number */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[40vw] font-bold text-gray-50 leading-none pointer-events-none select-none">
          45
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 reveal opacity-0 translate-y-8">
              <span className="inline-flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
                <span className="w-8 h-px bg-blue-500" />
                Chi siamo
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] mb-8">
                Un gruppo industriale
                <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  italiano leader
                </span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Mont.El è il partner di riferimento per i costruttori OEM che cercano
                componenti elettrici di alta qualità, progettati e prodotti interamente in Italia.
              </p>
              <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-light text-gray-900">ISO 9001</div>
                  <div className="text-sm text-gray-400">Quality Management</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="text-3xl font-light text-gray-900">IATF 16949</div>
                  <div className="text-sm text-gray-400">Automotive Standard</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal opacity-0 translate-y-8" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={aboutImage}
                    alt="Stabilimento Mont.El"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500/20 -z-0" />
                {/* Stats Card */}
                <div className="absolute -bottom-12 -left-12 bg-gray-900 text-white p-8 z-20">
                  <div className="text-5xl font-light mb-2">1979</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Anno di fondazione</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS - Asymmetric Grid */}
      <section className="py-32 lg:py-48 bg-gray-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 reveal opacity-0 translate-y-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 text-sm font-medium text-blue-400 uppercase tracking-widest mb-8">
                <span className="w-8 h-px bg-blue-500" />
                Prodotti
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1]">
                Soluzioni ingegneristiche
                <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  su misura
                </span>
              </h2>
            </div>
            <Link
              to="/prodotti"
              className="inline-flex items-center gap-3 text-white/60 hover:text-white font-medium transition-colors group"
            >
              <span>Esplora il catalogo</span>
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Products Grid - Bento Style */}
          <div className="grid lg:grid-cols-12 gap-4">
            {/* Large Card */}
            <Link
              to={products[0].path}
              className="lg:col-span-7 group relative overflow-hidden reveal opacity-0 translate-y-8"
            >
              <div className="aspect-[16/10] lg:aspect-[16/12] relative">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <span className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">
                    Featured Product
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-light text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {products[0].title}
                  </h3>
                  <p className="text-white/60 max-w-md mb-6">{products[0].desc}</p>
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    Scopri di più
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {products.slice(1).map((product, i) => (
                <Link
                  key={i}
                  to={product.path}
                  className="group relative overflow-hidden flex-1 reveal opacity-0 translate-y-8"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="h-full relative min-h-[200px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                      <h3 className="text-xl lg:text-2xl font-light text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-white/50 text-sm max-w-xs">{product.desc}</p>
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY - Split Section */}
      <section className="relative min-h-screen flex">
        {/* Left - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={qualityImage}
            alt="Controllo qualità"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 bg-white flex items-center">
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12 xl:px-20 py-32">
            <span className="inline-flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest mb-8 reveal opacity-0 translate-y-8">
              <span className="w-8 h-px bg-blue-500" />
              Qualità
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-[1.1] mb-8 reveal opacity-0 translate-y-8">
              Standard qualitativi
              <span className="block font-semibold">senza compromessi</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 reveal opacity-0 translate-y-8">
              Ogni componente che esce dai nostri stabilimenti supera rigorosi controlli qualità.
              Le nostre certificazioni testimoniano un impegno costante verso l'eccellenza.
            </p>

            {/* Certifications */}
            <div className="space-y-6 mb-12">
              {[
                { name: 'ISO 9001:2015', desc: 'Sistema di gestione qualità' },
                { name: 'IATF 16949:2016', desc: 'Standard automotive internazionale' },
                { name: 'ISO 14001:2015', desc: 'Gestione ambientale' },
                { name: 'UL Listed', desc: 'Certificazione sicurezza elettrica' },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-4 border-l-2 border-blue-500 bg-gray-50 reveal opacity-0 translate-y-8"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="text-lg font-medium text-gray-900">{cert.name}</div>
                    <div className="text-sm text-gray-500">{cert.desc}</div>
                  </div>
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              ))}
            </div>

            <Link
              to="/qualita"
              className="inline-flex items-center gap-3 text-gray-900 font-medium group reveal opacity-0 translate-y-8"
            >
              <span>Scopri le certificazioni</span>
              <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="relative py-32 lg:py-48 bg-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-8 reveal opacity-0 translate-y-8">
            Hai un progetto
            <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              da realizzare?
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 reveal opacity-0 translate-y-8">
            Il nostro team tecnico è pronto ad assisterti nella progettazione
            e produzione dei tuoi componenti elettrici.
          </p>
          <div className="flex flex-wrap justify-center gap-6 reveal opacity-0 translate-y-8">
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 font-medium hover:bg-blue-500 hover:text-white transition-colors"
            >
              Contattaci ora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+390524123456"
              className="inline-flex items-center gap-3 text-white px-8 py-4 font-medium border border-white/20 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +39 0524 123456
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
