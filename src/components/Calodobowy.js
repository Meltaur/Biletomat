import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Calodobowy() {
    return (
      <div id="calodobowy">
        <Link to="/platnosc">
          <button>KOMUNALNE</button>
        </Link>
        <Link to="/platnosc">
          <button>KOLEJOWO-KOMUNALNE DWÓCH ORGANIZATORÓW</button>
        </Link>
        <Link to="/platnosc">
          <button>KOLEJOWO-KOMUNALNE WSZYSTKICH ORGANIZATORÓW</button>
        </Link>
        <Stopka />
      </div>
    );
  }
  
  export default Calodobowy;
  