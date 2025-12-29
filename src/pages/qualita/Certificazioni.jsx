import { Link } from 'react-router-dom'
import QualitySidebar from '../../components/QualitySidebar'

export default function Certificazioni() {
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Placeholder descrizione certificazione qualità' },
    { name: 'ISO 14001:2015', description: 'Placeholder descrizione certificazione ambiente' },
    { name: 'IATF 16949', description: 'Placeholder descrizione certificazione automotive' },
    { name: 'ISO 45001', description: 'Placeholder descrizione certificazione sicurezza' },
    { name: 'Placeholder Cert 5', description: 'Placeholder descrizione altra certificazione' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-blue-200 text-sm mb-4">
            <Link to="/qualita" className="hover:text-white">Qualità</Link>
            <span className="mx-2">/</span>
            <span>Certificazioni</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Certificazioni</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <QualitySidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Le Nostre Certificazioni
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Placeholder testo introduttivo sulle certificazioni aziendali. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>

                {/* Certifications List */}
                <div className="space-y-4 mb-8">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 flex items-start"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {cert.name}
                        </h3>
                        <p className="text-gray-600">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Related Links */}
                <div className="border-t pt-8 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Approfondisci
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/qualita/riconoscimenti" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Riconoscimenti
                    </Link>
                    <Link to="/qualita/tecnologia" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Tecnologia
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
