import Gdynia from './components/Gdynia'
import Home from './components/Home'
import Metropolitalny from './components/Metropolitalny'
import Karta from './components/Karta'
import Platnosc from './components/Platnosc'
import JednorazowyU from './components/JednorazowyU'
import CałodobowyU from './components/CalodobowyU'
import TrzydniowyU from './components/TrzydniowyU'
import MiesiecznyU from './components/MiesiecznyU'
import JednorazowyN from './components/JednorazowyN'
import CałodobowyN from './components/CalodobowyN'
import TrzydniowyN from './components/TrzydniowyN'
import MiesiecznyN from './components/MiesiecznyN'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Doladowanie_karty from './components/Doladowanie_karty'

function App() {
  return (
    <div id="container">

      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/gdynia" element={<Gdynia/>} />
          <Route path="/metropolitalny" element={<Metropolitalny/>} />
          <Route path="/karta" element={<Karta/>} />
          <Route path='/doladowanie_karty' element={<Doladowanie_karty/>} />
          <Route path="/platnosc" element={<Platnosc/>} />
          <Route path="/metropolitalny/1raz/Ulgowy" element={<JednorazowyU/>} />
          <Route path="/metropolitalny/24h/Ulgowy" element={<CałodobowyU/>} />
          <Route path="/metropolitalny/72h/Ulgowy" element={<TrzydniowyU/>} />
          <Route path="/metropolitalny/miesieczny/Ulgowy" element={<MiesiecznyU/>} />
          <Route path="/metropolitalny/1raz/Normalny" element={<JednorazowyN/>} />
          <Route path="/metropolitalny/24h/Normalny" element={<CałodobowyN/>} />
          <Route path="/metropolitalny/72h/Normalny" element={<TrzydniowyN/>} />
          <Route path="/metropolitalny/miesieczny/Normalny" element={<MiesiecznyN/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
