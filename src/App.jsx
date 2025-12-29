import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import Settori from './pages/Settori'
import Contatti from './pages/Contatti'

// Azienda
import Azienda from './pages/azienda/Azienda'
import PuntiDiForza from './pages/azienda/PuntiDiForza'
import Network from './pages/azienda/Network'

// Prodotti
import Prodotti from './pages/prodotti/Prodotti'
import SensoriLivelloCarburante from './pages/prodotti/SensoriLivelloCarburante'
import CablaggiElettrici from './pages/prodotti/CablaggiElettrici'
import QuadriElettrici from './pages/prodotti/QuadriElettrici'
import SondeTemperatura from './pages/prodotti/SondeTemperatura'

// Qualità
import Qualita from './pages/qualita/Qualita'
import Codesign from './pages/qualita/Codesign'
import Tecnologia from './pages/qualita/Tecnologia'
import Certificazioni from './pages/qualita/Certificazioni'
import Brevetti from './pages/qualita/Brevetti'
import Riconoscimenti from './pages/qualita/Riconoscimenti'

// Servizi
import Servizi from './pages/servizi/Servizi'
import Progettazione from './pages/servizi/Progettazione'
import Produzione from './pages/servizi/Produzione'

// Case History
import CaseHistory from './pages/case-history/CaseHistory'
import CaseHistorySensori from './pages/case-history/CaseHistorySensori'
import CaseHistoryCablaggi from './pages/case-history/CaseHistoryCablaggi'
import CaseHistoryQuadri from './pages/case-history/CaseHistoryQuadri'
import ArticleDetail from './pages/case-history/ArticleDetail'

// Sostenibilità
import Sostenibilita from './pages/sostenibilita/Sostenibilita'
import EtichettaturaAmbientale from './pages/sostenibilita/EtichettaturaAmbientale'

// Legal
import CookiePolicy from './pages/legal/CookiePolicy'
import Privacy from './pages/legal/Privacy'
import CondizioniAcquisto from './pages/legal/CondizioniAcquisto'
import CondizioniFornitura from './pages/legal/CondizioniFornitura'
import Whistleblowing from './pages/legal/Whistleblowing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Azienda */}
        <Route path="azienda" element={<Azienda />}>
          <Route path="punti-di-forza" element={<PuntiDiForza />} />
          <Route path="network" element={<Network />} />
        </Route>

        {/* Prodotti */}
        <Route path="prodotti" element={<Prodotti />}>
          <Route path="sensori-livello-carburante" element={<SensoriLivelloCarburante />} />
          <Route path="cablaggi-elettrici" element={<CablaggiElettrici />} />
          <Route path="quadri-elettrici" element={<QuadriElettrici />} />
          <Route path="sonde-temperatura" element={<SondeTemperatura />} />
        </Route>

        {/* Settori */}
        <Route path="settori" element={<Settori />} />

        {/* Qualità */}
        <Route path="qualita" element={<Qualita />}>
          <Route path="codesign" element={<Codesign />} />
          <Route path="tecnologia" element={<Tecnologia />} />
          <Route path="certificazioni" element={<Certificazioni />} />
          <Route path="brevetti" element={<Brevetti />} />
          <Route path="riconoscimenti" element={<Riconoscimenti />} />
        </Route>

        {/* Servizi */}
        <Route path="servizi" element={<Servizi />}>
          <Route path="progettazione" element={<Progettazione />} />
          <Route path="produzione" element={<Produzione />} />
        </Route>

        {/* Case History */}
        <Route path="case-history" element={<CaseHistory />}>
          <Route path="sensori-livello-carburante" element={<CaseHistorySensori />}>
            <Route path="sensori-resistivi" element={<ArticleDetail />} />
          </Route>
          <Route path="cablaggi-elettrici" element={<CaseHistoryCablaggi />}>
            <Route path="cablaggio-auto" element={<ArticleDetail />} />
            <Route path="cablaggio-moto" element={<ArticleDetail />} />
            <Route path="cablaggi-condizionamento" element={<ArticleDetail />} />
            <Route path="cablaggi-vending" element={<ArticleDetail />} />
            <Route path="cablaggi-elettromedicali" element={<ArticleDetail />} />
          </Route>
          <Route path="quadri-elettrici" element={<CaseHistoryQuadri />}>
            <Route path="quadri-elettrici" element={<ArticleDetail />} />
          </Route>
        </Route>

        {/* Sostenibilità */}
        <Route path="sostenibilita" element={<Sostenibilita />}>
          <Route path="etichettatura-ambientale" element={<EtichettaturaAmbientale />} />
        </Route>

        {/* Contatti */}
        <Route path="contatti" element={<Contatti />} />

        {/* Legal Pages */}
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="condizioni-acquisto" element={<CondizioniAcquisto />} />
        <Route path="condizioni-fornitura" element={<CondizioniFornitura />} />
        <Route path="whistleblowing" element={<Whistleblowing />} />
      </Route>
    </Routes>
  )
}

export default App
