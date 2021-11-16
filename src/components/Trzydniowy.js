import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Trzydniowy() {
    return (
      <div id="trzydniowy">
        <Link to="/platnosc">
          <button>KOMUNALNE</button>
        </Link>
        <Link to="/platnosc">
          <button>KOLEJOWO-KOMUNALNE</button>
        </Link>
        <Stopka />
      </div>
    );
  }
  
  export default Trzydniowy;