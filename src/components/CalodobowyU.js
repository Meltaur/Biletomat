import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function CalodobowyU() {
    return (
      <div id="calodobowyU">
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '10', cena:8, opis: "GDYNIA, METROPOLITALNY_CALODOBOWY_KOMU, ULGOWY", ilosc:1}}>
          <button>KOMUNALNE</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '11', cena:11, opis: "GDYNIA, METROPOLITALNY_CALODOBOWY_KOLEJ_KOMU_DWA, ULGOWY", ilosc:1}}>
          <button>KOLEJOWO-KOMUNALNE DWÓCH ORGANIZATORÓW</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '12', cena:12.5, opis: "GDYNIA, METROPOLITALNY_CALODOBOWY_KOLEJ_KOMU_WSZYSTKIE, ULGOWY", ilosc:1}}>
          <button>KOLEJOWO-KOMUNALNE WSZYSTKICH ORGANIZATORÓW</button>
        </Link>
      </div>
        <Stopka />
      </div>
    );
  }
  
  export default CalodobowyU;
  