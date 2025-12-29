import { Link } from 'react-router-dom'

export default function PuntiDiForza() {
  const strengths = [
    {
      title: 'Placeholder Punto di Forza 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Placeholder Punto di Forza 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      title: 'Placeholder Punto di Forza 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
    },
    {
      title: 'Placeholder Punto di Forza 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Punti di Forza e Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Placeholder testo introduttivo sui punti di forza e la mission aziendale.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mt-16 bg-blue-900 text-white rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-4">La Nostra Mission</h3>
          <p className="text-blue-200 text-lg">
            Placeholder testo della mission aziendale. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
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
