import { Link } from 'react-router-dom'
import QualitySidebar from '../../components/QualitySidebar'

export default function Brevetti() {
  const patents = [
    { code: 'Placeholder Patent 1', title: 'Placeholder titolo brevetto 1', year: '2020' },
    { code: 'Placeholder Patent 2', title: 'Placeholder titolo brevetto 2', year: '2018' },
    { code: 'Placeholder Patent 3', title: 'Placeholder titolo brevetto 3', year: '2015' },
    { code: 'Placeholder Patent 4', title: 'Placeholder titolo brevetto 4', year: '2012' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-blue-200 text-sm mb-4">
            <Link to="/qualita" className="hover:text-white">Qualità</Link>
            <span className="mx-2">/</span>
            <span>Brevetti</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Brevetti</h1>
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
                  Innovazione Brevettata
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Placeholder testo introduttivo sui brevetti aziendali. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>

                {/* Patents List */}
                <div className="space-y-4 mb-8">
                  {patents.map((patent, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-sm text-blue-600 font-medium">
                            {patent.code}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mt-1">
                            {patent.title}
                          </h3>
                        </div>
                        <span className="bg-white px-3 py-1 rounded text-sm text-gray-600">
                          {patent.year}
                        </span>
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
                    <Link to="/qualita/tecnologia" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Tecnologia
                    </Link>
                    <Link to="/qualita/riconoscimenti" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Riconoscimenti
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
