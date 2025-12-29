import { Link } from 'react-router-dom'

export default function EtichettaturaAmbientale() {
  const materials = [
    { code: 'Placeholder 1', material: 'Placeholder materiale 1', disposal: 'Placeholder smaltimento 1' },
    { code: 'Placeholder 2', material: 'Placeholder materiale 2', disposal: 'Placeholder smaltimento 2' },
    { code: 'Placeholder 3', material: 'Placeholder materiale 3', disposal: 'Placeholder smaltimento 3' },
    { code: 'Placeholder 4', material: 'Placeholder materiale 4', disposal: 'Placeholder smaltimento 4' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-green-200 text-sm mb-4">
            <Link to="/sostenibilita" className="hover:text-white">Sostenibilità</Link>
            <span className="mx-2">/</span>
            <span>Etichettatura ambientale</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Etichettatura Ambientale</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Intro */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informazioni sugli Imballaggi
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Placeholder testo introduttivo sull'etichettatura ambientale degli imballaggi.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-gray-600">
                Placeholder testo aggiuntivo sulla normativa e gli obblighi di etichettatura.
              </p>
            </div>

            {/* Materials Table */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Tabella Materiali Imballo
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Codice
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Materiale
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Smaltimento
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materials.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.code}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.material}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.disposal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download */}
            <div className="bg-green-50 rounded-xl p-6 mb-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Documento Completo
                  </h3>
                  <p className="text-gray-600">
                    Scarica il documento completo sull'etichettatura ambientale.
                  </p>
                </div>
                <button className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Note */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Note Normative
              </h4>
              <p className="text-yellow-700 text-sm">
                Placeholder note normative sull'etichettatura ambientale degli imballaggi
                in conformità con le disposizioni vigenti. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
