export default function Whistleblowing() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold">Whistleblowing</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Canale di segnalazione riservato ai sensi del D.Lgs. 24/2023
            </p>

            <h2>Placeholder Sezione 1 - Cos'è il Whistleblowing</h2>
            <p>
              Placeholder testo sulla definizione di whistleblowing. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <h2>Placeholder Sezione 2 - Chi può segnalare</h2>
            <p>
              Placeholder testo sui soggetti che possono effettuare segnalazioni.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <h2>Placeholder Sezione 3 - Cosa si può segnalare</h2>
            <p>
              Placeholder testo sui comportamenti segnalabili. Lorem ipsum dolor sit amet.
            </p>
            <ul>
              <li>Placeholder violazione 1</li>
              <li>Placeholder violazione 2</li>
              <li>Placeholder violazione 3</li>
            </ul>

            <h2>Placeholder Sezione 4 - Come segnalare</h2>
            <p>
              Placeholder testo sulle modalità di segnalazione. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <h2>Placeholder Sezione 5 - Tutele e garanzie</h2>
            <p>
              Placeholder testo sulle tutele per il segnalante. Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* External Link */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Piattaforma di Segnalazione Esterna
                </h3>
                <p className="text-yellow-700 mb-4">
                  Per effettuare una segnalazione, utilizza la piattaforma esterna dedicata
                  che garantisce l'anonimato e la riservatezza.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                >
                  Vai alla piattaforma
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
