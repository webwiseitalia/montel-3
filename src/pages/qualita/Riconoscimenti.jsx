import { Link } from 'react-router-dom'
import QualitySidebar from '../../components/QualitySidebar'

export default function Riconoscimenti() {
  const awards = [
    { title: 'Placeholder Premio 1', org: 'Organizzazione 1', year: '2023' },
    { title: 'Placeholder Premio 2', org: 'Organizzazione 2', year: '2021' },
    { title: 'Placeholder Premio 3', org: 'Organizzazione 3', year: '2019' },
    { title: 'Placeholder Premio 4', org: 'Organizzazione 4', year: '2017' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-blue-200 text-sm mb-4">
            <Link to="/qualita" className="hover:text-white">Qualità</Link>
            <span className="mx-2">/</span>
            <span>Riconoscimenti</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Riconoscimenti</h1>
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
                  I Nostri Riconoscimenti
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Placeholder testo introduttivo sui riconoscimenti ricevuti. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 text-center"
                    >
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {award.org}
                      </p>
                      <span className="text-sm text-blue-600 font-medium">
                        {award.year}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Related Links */}
                <div className="border-t pt-8 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Approfondisci
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/qualita/certificazioni" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
                      Certificazioni
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
