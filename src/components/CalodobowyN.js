import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function CalodobowyN() {
    return (
      <div id="calodobowyN">
        <h3>CAŁODOBOWY NORMALNY</h3>
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '7', cena:16.0, opis: "GDYNIA, METROPOLITALNY_CALODOBOWY_KOMU, NORMALNY", ilosc:1}}>
          <button>KOMUNALNE</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '8', cena:22.0, opis: "GDYNIA, METROPOLITALNY_CALODOBOWY_KOLEJ_KOMU_DWA, NORMALNY", ilosc:1}}>
          <button>KOLEJOWO-KOMUNALNE DWÓCH ORGANIZATORÓW</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '9', cena:25.0, opis: "GDYNIA, METROPOLITALNY_CALODOBOWY_KOLEJ_KOMU_WSZYSTKIE, NORMALNY", ilosc:1}}>
          <button>KOLEJOWO-KOMUNALNE WSZYSTKICH ORGANIZATORÓW</button>
        </Link>
      </div>
        <Stopka />
      </div>
    );
  }
  
  export default CalodobowyN;
  