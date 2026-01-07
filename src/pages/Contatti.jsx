import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    messaggio: '',
    privacy: false,
  })
  const [focusedField, setFocusedField] = useState(null)
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
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form inviato (placeholder)')
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Sede',
      lines: ['Via Industriale, 15', '43036 Fidenza (PR)', 'Italia'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      lines: ['info@montel.it', 'vendite@montel.it'],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telefono',
      lines: ['+39 0524 123456', '+39 0524 654321 (Fax)'],
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-950 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 block animate-fade-up">
              Parliamo del tuo progetto
            </span>
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <span className="font-bold">Contattaci</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Siamo qui per ascoltare le tue esigenze e trovare insieme la soluzione migliore.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 reveal opacity-0 translate-y-8">
                  Informazioni di contatto
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex gap-4 reveal opacity-0 translate-y-8"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-gray-600 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="mt-12 p-6 bg-white rounded-3xl shadow-sm reveal opacity-0 translate-y-8" style={{ animationDelay: '300ms' }}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Link rapidi
                  </h3>
                  <div className="space-y-3">
                    <Link to="/prodotti" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      I nostri prodotti
                    </Link>
                    <Link to="/servizi" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      I nostri servizi
                    </Link>
                    <Link to="/azienda" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Chi siamo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm reveal opacity-0 translate-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Richiedi informazioni
                </h2>
                <p className="text-gray-600 mb-8">
                  Compila il form e ti risponderemo entro 24 ore.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('nome')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                        placeholder=" "
                      />
                      <label
                        htmlFor="nome"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formData.nome || focusedField === 'nome'
                            ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-blue-600'
                            : 'top-1/2 -translate-y-1/2 text-gray-500'
                        }`}
                      >
                        Nome *
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="cognome"
                        name="cognome"
                        required
                        value={formData.cognome}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('cognome')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                        placeholder=" "
                      />
                      <label
                        htmlFor="cognome"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formData.cognome || focusedField === 'cognome'
                            ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-blue-600'
                            : 'top-1/2 -translate-y-1/2 text-gray-500'
                        }`}
                      >
                        Cognome *
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formData.email || focusedField === 'email'
                            ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-blue-600'
                            : 'top-1/2 -translate-y-1/2 text-gray-500'
                        }`}
                      >
                        Email *
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('telefono')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                        placeholder=" "
                      />
                      <label
                        htmlFor="telefono"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formData.telefono || focusedField === 'telefono'
                            ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-blue-600'
                            : 'top-1/2 -translate-y-1/2 text-gray-500'
                        }`}
                      >
                        Telefono
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="azienda"
                      name="azienda"
                      value={formData.azienda}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('azienda')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                      placeholder=" "
                    />
                    <label
                      htmlFor="azienda"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formData.azienda || focusedField === 'azienda'
                          ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-blue-600'
                          : 'top-1/2 -translate-y-1/2 text-gray-500'
                      }`}
                    >
                      Azienda
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      required
                      rows={5}
                      value={formData.messaggio}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('messaggio')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors resize-none bg-gray-50 focus:bg-white"
                      placeholder=" "
                    />
                    <label
                      htmlFor="messaggio"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formData.messaggio || focusedField === 'messaggio'
                          ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-blue-600'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      Messaggio *
                    </label>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
                        <svg className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">
                      Ho letto e accetto la{' '}
                      <Link to="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      e acconsento al trattamento dei miei dati personali. *
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group flex items-center justify-center gap-2"
                  >
                    Invia richiesta
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[400px] bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-500">Mappa interattiva</p>
          </div>
        </div>
      </section>
    </div>
  )
}
