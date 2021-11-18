import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function TrzydniowyN() {
    return (
    <div id="trzydniowyN>">
        <div class="bilety">
          <Link to="/platnosc"
          state={{id: '17', cena:32.0, opis: "GDYNIA, 74H_KOMU, NORMALNY", ilosc:1}}>
            <button>KOMUNALNE</button>
          </Link>
          <Link to="/platnosc"
          state={{id: '18', cena:50.0, opis: "GDYNIA, 74H_KOLEJ_KOMU, NORMALNY", ilosc:1}}>
            <button>KOLEJOWO-KOMUNALNE</button>
          </Link>
        </div>
        <Stopka />
    </div>   
    );
  }
  
  export default TrzydniowyN;