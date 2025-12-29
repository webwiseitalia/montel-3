export default function CondizioniAcquisto() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold">Condizioni Generali di Acquisto</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Ultimo aggiornamento: Placeholder data
            </p>

            <h2>Placeholder Art. 1 - Oggetto</h2>
            <p>
              Placeholder testo sull'oggetto delle condizioni generali di acquisto.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <h2>Placeholder Art. 2 - Ordini</h2>
            <p>
              Placeholder testo sulla gestione degli ordini. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>

            <h2>Placeholder Art. 3 - Prezzi e pagamenti</h2>
            <p>
              Placeholder testo su prezzi e condizioni di pagamento. Lorem ipsum dolor sit amet.
            </p>

            <h2>Placeholder Art. 4 - Consegne</h2>
            <p>
              Placeholder testo sulle modalità di consegna. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <h2>Placeholder Art. 5 - Garanzie</h2>
            <p>
              Placeholder testo sulle garanzie. Lorem ipsum dolor sit amet.
            </p>

            <h2>Placeholder Art. 6 - Foro competente</h2>
            <p>
              Placeholder testo sul foro competente per eventuali controversie.
            </p>
          </div>

          {/* Download */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Scarica il documento completo
                </h3>
                <p className="text-gray-600">
                  Versione PDF delle condizioni generali di acquisto.
                </p>
              </div>
              <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
