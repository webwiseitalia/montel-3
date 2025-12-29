import { Link } from 'react-router-dom'
import QualitySidebar from '../../components/QualitySidebar'

export default function Codesign() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-blue-200 text-sm mb-4">
            <Link to="/qualita" className="hover:text-white">Qualità</Link>
            <span className="mx-2">/</span>
            <span>Codesign</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Codesign</h1>
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
                  Collaborazione fin dalla Progettazione
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Placeholder descrizione dell'approccio codesign. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>

                <div className="bg-gray-100 aspect-video rounded-xl flex items-center justify-center mb-8">
                  <span className="text-gray-500">Placeholder immagine codesign</span>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  Placeholder testo aggiuntivo sul processo di codesign e i vantaggi per il cliente.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    I Vantaggi del Codesign
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      Placeholder vantaggio 1
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      Placeholder vantaggio 2
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      Placeholder vantaggio 3
                    </li>
                  </ul>
                </div>

                {/* Related Links */}
                <div className="border-t pt-8 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Approfondisci
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/qualita/tecnologia" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Tecnologia
                    </Link>
                    <Link to="/qualita/certificazioni" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Certificazioni
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
