import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Karta() {
    return (
      <div id="karta">
        <div class="bilety">
        PRZYŁÓŻ KARTĘ  
        <Link to="/doladowanie_karty">      
          <button>Roboczo</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default Karta;
  