import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function TrzydniowyU() {
    return (
      <div id="trzydniowyU">
        <div class="bilety">
          <Link to="/platnosc"
          state={{id: '19', cena:16.0, opis: "GDYNIA, 74H_KOMU, ULGOWY", ilosc:1}}>
            <button>KOMUNALNE</button>
          </Link>
          <Link to="/platnosc"
          state={{id: '20', cena:25.0, opis: "GDYNIA, 74H_KOLEJ_KOMU, ULGOWY", ilosc:1}}>
            <button>KOLEJOWO-KOMUNALNE</button>
          </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default TrzydniowyU