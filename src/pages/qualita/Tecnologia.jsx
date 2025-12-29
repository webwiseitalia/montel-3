import { Link } from 'react-router-dom'
import QualitySidebar from '../../components/QualitySidebar'

export default function Tecnologia() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-blue-200 text-sm mb-4">
            <Link to="/qualita" className="hover:text-white">Qualità</Link>
            <span className="mx-2">/</span>
            <span>Tecnologia</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Tecnologia</h1>
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
                  Tecnologie all'Avanguardia
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Placeholder descrizione delle tecnologie utilizzate. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>

                <div className="bg-gray-100 aspect-video rounded-xl flex items-center justify-center mb-8">
                  <span className="text-gray-500">Placeholder immagine tecnologia</span>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  Placeholder testo aggiuntivo sugli investimenti tecnologici e l'innovazione.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Placeholder Tecnologia 1</h4>
                    <p className="text-sm text-gray-600">Descrizione placeholder della tecnologia.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Placeholder Tecnologia 2</h4>
                    <p className="text-sm text-gray-600">Descrizione placeholder della tecnologia.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Placeholder Tecnologia 3</h4>
                    <p className="text-sm text-gray-600">Descrizione placeholder della tecnologia.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Placeholder Tecnologia 4</h4>
                    <p className="text-sm text-gray-600">Descrizione placeholder della tecnologia.</p>
                  </div>
                </div>

                {/* Related Links */}
                <div className="border-t pt-8 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Approfondisci
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/qualita/codesign" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Codesign
                    </Link>
                    <Link to="/qualita/brevetti" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Brevetti
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
