import { NavLink } from 'react-router-dom'

export default function CaseHistorySidebar({ currentCategory }) {
  const categories = [
    {
      name: 'Sensori di livello carburante',
      path: '/case-history/sensori-livello-carburante',
      articles: [
        { name: 'Sensori resistivi', path: '/case-history/sensori-livello-carburante/sensori-resistivi' },
      ],
    },
    {
      name: 'Cablaggi elettrici',
      path: '/case-history/cablaggi-elettrici',
      articles: [
        { name: 'Cablaggio per auto', path: '/case-history/cablaggi-elettrici/cablaggio-auto' },
        { name: 'Cablaggio per moto', path: '/case-history/cablaggi-elettrici/cablaggio-moto' },
        { name: 'Cablaggi condizionamento', path: '/case-history/cablaggi-elettrici/cablaggi-condizionamento' },
        { name: 'Cablaggi vending machines', path: '/case-history/cablaggi-elettrici/cablaggi-vending' },
        { name: 'Cablaggi elettromedicali', path: '/case-history/cablaggi-elettrici/cablaggi-elettromedicali' },
      ],
    },
    {
      name: 'Quadri elettrici',
      path: '/case-history/quadri-elettrici',
      articles: [
        { name: 'Quadri elettrici', path: '/case-history/quadri-elettrici/quadri-elettrici' },
      ],
    },
  ]

  return (
    <aside className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Case History
      </h3>
      <nav className="space-y-4">
        {categories.map((category) => (
          <div key={category.path}>
            <NavLink
              to={category.path}
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {category.name}
            </NavLink>
            {currentCategory === category.path && category.articles.length > 0 && (
              <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                {category.articles.map((article) => (
                  <NavLink
                    key={article.path}
                    to={article.path}
                    className={({ isActive }) =>
                      `block px-3 py-1.5 rounded text-sm transition-colors ${
                        isActive
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900'
                      }`
                    }
                  >
                    {article.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
