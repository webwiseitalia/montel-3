import { NavLink } from 'react-router-dom'

export default function QualitySidebar() {
  const items = [
    { name: 'Codesign', path: '/qualita/codesign' },
    { name: 'Tecnologia', path: '/qualita/tecnologia' },
    { name: 'Certificazioni', path: '/qualita/certificazioni' },
    { name: 'Brevetti', path: '/qualita/brevetti' },
    { name: 'Riconoscimenti', path: '/qualita/riconoscimenti' },
  ]

  return (
    <aside className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Qualità
      </h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
