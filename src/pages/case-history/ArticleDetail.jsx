import { Link, useLocation } from 'react-router-dom'
import CaseHistorySidebar from '../../components/CaseHistorySidebar'

// Images
import heroImage from '../../assets/case history/imgi_18_2500x900-prodotti.webp'
import sensoriImg from '../../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'
import cablaggiImg from '../../assets/case history/imgi_5_cablaggi_elettrici_thumb_case.webp'
import quadriImg from '../../assets/case history/imgi_6_quadri_elettrici_thumb_case.webp'
import cab1 from '../../assets/cab-1/cab-1-1.webp'
import cab2 from '../../assets/cab-1/cab-1-2.webp'
import cab4 from '../../assets/cab-1/cab-1-4.webp'
import cab5 from '../../assets/cab-1/cab-1-5.webp'
import cab6 from '../../assets/cab-1/cab-1-6.webp'
import cabDetail1 from '../../assets/cab-.2/cab-.2-27.webp'
import cabDetail2 from '../../assets/cab-.2/cab-.2-28.webp'

export default function ArticleDetail() {
  const location = useLocation()

  // Determine current category and get appropriate images from path
  let currentCategory = '/case-history/sensori-livello-carburante'
  let categoryName = 'Sensori di livello carburante'
  let mainImage = sensoriImg
  let galleryImages = [sensoriImg, sensoriImg]

  if (location.pathname.includes('cablaggi-elettrici')) {
    currentCategory = '/case-history/cablaggi-elettrici'
    categoryName = 'Cablaggi elettrici'

    if (location.pathname.includes('cablaggio-auto')) {
      mainImage = cab1
      galleryImages = [cabDetail1, cabDetail2]
    } else if (location.pathname.includes('cablaggio-moto')) {
      mainImage = cab2
      galleryImages = [cab6, cabDetail1]
    } else if (location.pathname.includes('cablaggi-condizionamento')) {
      mainImage = cab4
      galleryImages = [cabDetail2, cab6]
    } else if (location.pathname.includes('cablaggi-vending')) {
      mainImage = cab5
      galleryImages = [cab1, cabDetail1]
    } else if (location.pathname.includes('cablaggi-elettromedicali')) {
      mainImage = cablaggiImg
      galleryImages = [cabDetail1, cabDetail2]
    } else {
      mainImage = cablaggiImg
      galleryImages = [cabDetail1, cabDetail2]
    }
  } else if (location.pathname.includes('quadri-elettrici')) {
    currentCategory = '/case-history/quadri-elettrici'
    categoryName = 'Quadri elettrici'
    mainImage = quadriImg
    galleryImages = [quadriImg, quadriImg]
  }

  // Get article title from path
  const pathParts = location.pathname.split('/')
  const articleSlug = pathParts[pathParts.length - 1]
  const articleTitle = articleSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div>
      {/* Hero with image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src={heroImage}
          alt={articleTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <div className="flex items-center text-blue-300 text-sm mb-4">
              <Link to="/case-history" className="hover:text-white transition-colors">Case History</Link>
              <span className="mx-2">/</span>
              <Link to={currentCategory} className="hover:text-white transition-colors">{categoryName}</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{articleTitle}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{articleTitle}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <CaseHistorySidebar currentCategory={currentCategory} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-3xl overflow-hidden shadow-sm">
                {/* Featured Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={mainImage}
                    alt={articleTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 lg:p-12">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Case Study</span>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-3 mb-6">
                    La Sfida
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Il cliente necessitava di una soluzione personalizzata che rispondesse a specifiche esigenze tecniche
                    e normative del settore. Era richiesta un'elevata affidabilità, resistenza alle condizioni operative
                    estreme e conformità agli standard di qualità internazionali.
                  </p>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-6">
                    La Nostra Soluzione
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Abbiamo lavorato a stretto contatto con il team tecnico del cliente, applicando il nostro approccio
                    di codesign per sviluppare una soluzione ottimizzata. Il processo ha incluso:
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-8">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Analisi dettagliata delle specifiche tecniche e dei requisiti applicativi
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Progettazione personalizzata con software CAD/CAM di ultima generazione
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Prototipazione e validazione funzionale in collaborazione con il cliente
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Industrializzazione del prodotto per la produzione in serie
                    </li>
                  </ul>

                  {/* Gallery */}
                  <div className="grid md:grid-cols-2 gap-6 my-10">
                    <img
                      src={galleryImages[0]}
                      alt="Dettaglio progetto 1"
                      className="rounded-2xl w-full aspect-[4/3] object-cover"
                    />
                    <img
                      src={galleryImages[1]}
                      alt="Dettaglio progetto 2"
                      className="rounded-2xl w-full aspect-[4/3] object-cover"
                    />
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-6">
                    I Risultati
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                      <p className="text-gray-600">Test superati</p>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                      <p className="text-gray-600">Difetti rilevati</p>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">On Time</div>
                      <p className="text-gray-600">Consegna puntuale</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Il progetto è stato completato nei tempi previsti, con piena soddisfazione del cliente.
                    La soluzione sviluppata è ora in produzione regolare presso i nostri stabilimenti.
                  </p>
                </div>
              </article>

              {/* CTA */}
              <div className="mt-12 bg-blue-600 rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hai un progetto simile?
                </h3>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                  Contattaci per discutere delle tue esigenze. Il nostro team è pronto a sviluppare la soluzione ideale per te.
                </p>
                <Link
                  to="/contatti"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Richiedi informazioni
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
