import { Link } from 'react-router-dom'
import Stopka from "./Stopka"


function Karta() {
    return (
      <div id="karta">
      PRZYŁÓŻ KARTĘ  
        <Link to="/doladowanie_karty">      
          <button>Roboczo</button>
        </Link>
        <Stopka />
      </div>
    );
  }
  
  export default Karta;
  