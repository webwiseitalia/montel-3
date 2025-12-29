import { NavLink } from 'react-router-dom'

export default function ProductSidebar() {
  const categories = [
    { name: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { name: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { name: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { name: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  return (
    <aside className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Categorie Prodotti
      </h3>
      <nav className="space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.path}
            to={category.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
