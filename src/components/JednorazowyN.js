import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function JednorazowyN() {
    return (
      <div id="jednorazowyN">
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '13', cena:4.0, opis: "GDYNIA, JEDNORAZOWY_ZWYKŁY, NORMALNY", ilosc:1}}>
          <button>ZWYKŁE I NOCNE</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '14', cena:4.6, opis: "GDYNIA, JEDNORAZOWY_POSPIESZNY, NORMALMNY", ilosc:1}}>
          <button>ZWYKŁE, POSPIESZNE I NOCNE</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default JednorazowyN;
  