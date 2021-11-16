import Gdynia from './components/Gdynia'
import Home from './components/Home'
import Metropolitalny from './components/Metropolitalny'
import Karta from './components/Karta'
import Platnosc from './components/Platnosc'
import Jednorazowy from './components/Jednorazowy'
import Całodobowy from './components/Calodobowy'
import Trzydniowy from './components/Trzydniowy'
import Miesieczny from './components/Miesieczny'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div id="container">

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gdynia" element={<Gdynia/>} />
          <Route path="/metropolitalny" element={<Metropolitalny/>} />
          <Route path="/karta" element={<Karta/>} />
          <Route path="/platnosc" element={<Platnosc/>} />
          <Route path="/metropolitalny/1raz" element={<Jednorazowy/>} />
          <Route path="/metropolitalny/24h" element={<Całodobowy/>} />
          <Route path="/metropolitalny/72h" element={<Trzydniowy/>} />
          <Route path="/metropolitalny/miesieczny" element={<Miesieczny/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
