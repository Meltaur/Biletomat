import { Link } from 'react-router-dom'
import Stopka from "./Stopka"


function Doladowanie_karty() {
    return (
      <div id="doladowanie_karty">
        <div class="bilety">
        Karta wczytana poprawnie, naciśnij przycisk, aby przejść dalej
        <Link to="/platnosc">
            <button>DALEJ</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }

  export default Doladowanie_karty;