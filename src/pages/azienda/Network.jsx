import { Link } from 'react-router-dom'

export default function Network() {
  const companies = [
    {
      name: 'Mont.El',
      description: 'Placeholder descrizione Mont.El - capogruppo.',
      location: 'Italia',
    },
    {
      name: 'AME',
      description: 'Placeholder descrizione AME.',
      location: 'Italia',
    },
    {
      name: 'EUROSWITCH',
      description: 'Placeholder descrizione Euroswitch.',
      location: 'Italia',
    },
    {
      name: 'INTEA',
      description: 'Placeholder descrizione Intea.',
      location: 'Italia',
    },
    {
      name: 'SIRE Romania',
      description: 'Placeholder descrizione SIRE Romania.',
      location: 'Romania',
    },
    {
      name: 'TECHTRON Romania',
      description: 'Placeholder descrizione Techtron Romania.',
      location: 'Romania',
    },
  ]

  const milestones = [
    { year: '1970', event: 'Placeholder milestone - Fondazione' },
    { year: '1985', event: 'Placeholder milestone - Prima espansione' },
    { year: '1995', event: 'Placeholder milestone - Internazionalizzazione' },
    { year: '2005', event: 'Placeholder milestone - Nuovi stabilimenti' },
    { year: '2015', event: 'Placeholder milestone - Acquisizioni' },
    { year: '2020', event: 'Placeholder milestone - Innovazione' },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Il Network
          </h2>
          <p className="text-lg text-gray-600">
            Placeholder testo introduttivo sul network aziendale e le società del gruppo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {company.name}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {company.location}
                </span>
              </div>
              <p className="text-gray-600">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            La Nostra Storia
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform lg:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                  }`}>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <span className="text-blue-600 font-bold text-lg">
                        {milestone.year}
                      </span>
                      <p className="text-gray-600 mt-1">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contatti"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Richiedi informazioni
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
