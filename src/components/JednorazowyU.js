import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function JednorazowyU() {
    return (
      <div id="jednorazowyU">
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '15', cena:2.0, opis: "GDYNIA, JEDNORAZOWY_ZWYKŁY, ULGOWY", ilosc:1}}>
          <button>ZWYKŁE I NOCNE</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '16', cena:2.3, opis: "GDYNIA, JEDNORAZOWY_POSPIESZNY, ULGOWY", ilosc:1}}>
          <button>ZWYKŁE, POSPIESZNE I NOCNE</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default JednorazowyU;
  