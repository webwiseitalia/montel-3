import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Images
import heroImage from '../assets/Produzione/imgi_2_2500x900-prodotti.webp'
import aboutImage from '../assets/sviluppo/imgi_8_1300x900-azienda.webp'
import qualityImage from '../assets/apparecchiature/imgi_7_1300x900-qualita.webp'
import sensoriThumb from '../assets/Produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../assets/Produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../assets/Produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../assets/Produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function Home() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  // Hero animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-line',
        { y: 120, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1 },
        0.2
      )
      .fromTo('.hero-fade',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
        0.7
      )
      .fromTo('.hero-stat',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
        1
      )
      .fromTo('.hero-bottom',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.2
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up sections
      gsap.utils.toArray('.anim-fade-up').forEach((el) => {
        gsap.fromTo(el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      // Slide from left
      gsap.utils.toArray('.anim-slide-left').forEach((el) => {
        gsap.fromTo(el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      // Slide from right
      gsap.utils.toArray('.anim-slide-right').forEach((el) => {
        gsap.fromTo(el,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      // Scale in
      gsap.utils.toArray('.anim-scale').forEach((el) => {
        gsap.fromTo(el,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      // Staggered items
      gsap.utils.toArray('.anim-stagger').forEach((parent) => {
        gsap.fromTo(parent.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
            }
          }
        )
      })

      // Image reveal
      gsap.utils.toArray('.anim-img-reveal').forEach((el) => {
        const img = el.querySelector('img')
        if (img) {
          gsap.fromTo(el,
            { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            {
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              duration: 1.2,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
              }
            }
          )
          gsap.fromTo(img,
            { scale: 1.4 },
            {
              scale: 1,
              duration: 1.4,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
              }
            }
          )
        }
      })

      // Parallax background number
      gsap.to('.parallax-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const products = [
    {
      title: 'Sensori di livello carburante',
      desc: 'Sensori resistivi con potenziometro, linearizzazione del segnale e contatto di riserva',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriThumb
    },
    {
      title: 'Cablaggi elettrici',
      desc: 'Progettazione e produzione su specifiche cliente con approccio co-design',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiThumb
    },
    {
      title: 'Quadri elettrici',
      desc: 'Quadri industriali progettati e realizzati su misura',
      path: '/prodotti/quadri-elettrici',
      image: quadriThumb
    },
    {
      title: 'Sonde di temperatura',
      desc: 'Sonde personalizzabili con segnale continuo per ogni applicazione',
      path: '/prodotti/sonde-temperatura',
      image: sondeThumb
    },
  ]

  const sectors = [
    'Automotive', 'Motociclismo', 'Elettrodomestici', 'Condizionamento',
    'Vending', 'Macchine agricole', 'Nautica', 'Aeronautica', 'Medicale'
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Produzione apparecchiature elettroelettroniche Mont.El"
            title="Produzione Mont.El"
            loading="lazy"
            width={2500}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        {/* Content */}
        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              {/* Eyebrow */}
              <div className="hero-fade flex items-center gap-4 mb-10">
                <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent" />
                <span className="text-blue-400 text-sm font-medium tracking-[0.25em] uppercase">
                  Dal 1972 a Sale Marasino
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-10 perspective-1000">
                <span className="hero-line block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tight leading-[1]">
                  Apparecchiature
                </span>
                <span className="hero-line block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-tight leading-[1] mt-3">
                  elettroelettroniche
                </span>
                <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-tight leading-[1] mt-3">
                  di precisione
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-fade text-xl lg:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12">
                Progettiamo e produciamo sensori, cablaggi e quadri elettrici
                per automotive, aeronautica, medicale e industria.
              </p>

              {/* CTAs */}
              <div className="hero-fade flex flex-wrap items-center gap-6">
                <Link
                  to="/contatti"
                  className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-base font-medium overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Richiedi informazioni</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  to="/azienda"
                  className="group inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
                >
                  <span className="relative">
                    Scopri Mont.El
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="space-y-10 border-l border-white/10 pl-10">
                {[
                  { value: '1972', label: 'Anno di fondazione' },
                  { value: '50+', label: 'Anni di esperienza' },
                  { value: '4', label: 'Linee di prodotto' },
                  { value: '10+', label: 'Settori serviti' },
                ].map((stat, i) => (
                  <div key={i} className="hero-stat">
                    <div className="text-4xl xl:text-5xl font-light text-white mb-1">
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

        {/* Bottom Sectors Bar */}
        <div className="hero-bottom absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
            <div className="flex items-center gap-8">
              <span className="text-white/30 text-xs uppercase tracking-widest whitespace-nowrap hidden sm:block">
                Settori
              </span>
              <div className="flex-1 overflow-hidden">
                <div className="flex gap-8 lg:gap-12 animate-marquee">
                  {[...sectors, ...sectors].map((sector, i) => (
                    <span key={i} className="text-white/50 text-sm whitespace-nowrap hover:text-white transition-colors">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="py-32 lg:py-40 bg-white relative overflow-hidden overflow-x-clip">
        {/* Background Year */}
        <div className="parallax-bg absolute top-1/2 right-0 -translate-y-1/2 text-[35vw] font-bold text-gray-50 leading-none pointer-events-none select-none">
          72
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 anim-slide-left">
              <span className="inline-flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
                <span className="w-10 h-px bg-blue-500" />
                Chi siamo
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] mb-8">
                Un'azienda italiana
                <span className="block font-semibold">dal 1972</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Fondata da Giuseppe Novali a Sale Marasino, Mont.El è oggi un punto
                di riferimento per la progettazione e produzione di apparecchiature
                elettroelettroniche di alta qualità.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Operiamo con stabilimenti in Italia e Romania, servendo i settori
                più esigenti con soluzioni personalizzate e certificazioni internazionali.
              </p>
              <Link
                to="/azienda"
                className="inline-flex items-center gap-3 text-gray-900 font-medium group"
              >
                <span>Scopri la nostra storia</span>
                <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="lg:col-span-7 anim-slide-right">
              <div className="relative">
                <div className="anim-img-reveal overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Stabilimento Mont.El a Sale Marasino"
                    title="Stabilimento Mont.El"
                    loading="lazy"
                    width={1300}
                    height={900}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500/20 -z-10" />
                {/* Founder Card */}
                <div className="anim-scale absolute -bottom-12 left-0 sm:-left-8 lg:-left-12 bg-gray-900 text-white p-6 sm:p-8 max-w-[280px] sm:max-w-xs">
                  <div className="text-3xl font-light mb-2">Giuseppe Novali</div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Fondatore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODOTTI */}
      <section className="py-32 lg:py-40 bg-gray-950 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 anim-fade-up">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 text-sm font-medium text-blue-400 uppercase tracking-widest mb-8">
                <span className="w-10 h-px bg-blue-500" />
                Prodotti
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1]">
                Soluzioni complete
                <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  per ogni esigenza
                </span>
              </h2>
            </div>
            <Link
              to="/prodotti"
              className="inline-flex items-center gap-4 text-white/60 hover:text-white font-medium transition-colors group"
            >
              <span>Tutti i prodotti</span>
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-12 gap-5 anim-stagger">
            {/* Featured Product */}
            <Link
              to={products[0].path}
              className="lg:col-span-7 group relative overflow-hidden"
            >
              <div className="aspect-[16/10] lg:aspect-[16/12] relative">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  title={products[0].title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <span className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4">
                    Prodotto di punta
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-light text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {products[0].title}
                  </h3>
                  <p className="text-white/60 max-w-lg mb-6">{products[0].desc}</p>
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    Scopri di più
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Other Products */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {products.slice(1).map((product, i) => (
                <Link
                  key={i}
                  to={product.path}
                  className="group relative overflow-hidden flex-1"
                >
                  <div className="h-full relative min-h-[180px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      title={product.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-center">
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

      {/* QUALITÀ */}
      <section className="relative lg:min-h-screen flex flex-col lg:flex-row">
        {/* Mobile Image */}
        <div className="lg:hidden w-full h-64 relative overflow-hidden">
          <img
            src={qualityImage}
            alt="Controllo qualità Mont.El"
            title="Controllo qualità"
            loading="lazy"
            width={1300}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
        </div>

        {/* Left Image (Desktop) */}
        <div className="hidden lg:block lg:w-1/2 relative anim-img-reveal overflow-hidden">
          <img
            src={qualityImage}
            alt="Controllo qualità Mont.El"
            title="Controllo qualità"
            loading="lazy"
            width={1300}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-white flex items-center">
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12 xl:px-20 py-32">
            <span className="inline-flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest mb-8 anim-fade-up">
              <span className="w-10 h-px bg-blue-500" />
              Qualità
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-[1.1] mb-8 anim-fade-up">
              Standard qualitativi
              <span className="block font-semibold">certificati</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 anim-fade-up">
              Controlli rigorosi su ogni prodotto prima della consegna.
              Certificazioni industriali e di processo conformi agli standard internazionali.
            </p>

            {/* Certifications */}
            <div className="space-y-4 mb-12 anim-stagger">
              {[
                { name: 'ISO 9001', desc: 'Sistema di gestione qualità' },
                { name: 'Controllo 100%', desc: 'Test su ogni singolo prodotto' },
                { name: 'Brevetti registrati', desc: 'Innovazione protetta' },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-5 border-l-2 border-blue-500 bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="text-lg font-medium text-gray-900">{cert.name}</div>
                    <div className="text-sm text-gray-500">{cert.desc}</div>
                  </div>
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ))}
            </div>

            <Link
              to="/qualita"
              className="inline-flex items-center gap-3 text-gray-900 font-medium group anim-fade-up"
            >
              <span>Scopri certificazioni e brevetti</span>
              <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 lg:py-40 bg-gray-900 overflow-hidden">
        {/* Blurs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-8 anim-fade-up">
            Hai un progetto
            <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              da realizzare?
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 anim-fade-up">
            Contattaci per una consulenza. Il nostro team tecnico è pronto
            ad assisterti nella progettazione e produzione.
          </p>
          <div className="flex flex-wrap justify-center gap-6 anim-fade-up">
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 font-medium hover:bg-blue-500 hover:text-white transition-colors"
            >
              Contattaci
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+39030986300"
              className="inline-flex items-center gap-3 text-white px-8 py-4 font-medium border border-white/20 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +39 030 986300
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
