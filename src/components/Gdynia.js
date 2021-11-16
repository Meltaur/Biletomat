import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Gdynia() {
    return (
      <div id="gdynia">
        <Link to="/platnosc">
          <button>1-RAZOWY</button>
        </Link>
        <Link to="/platnosc">
          <button>1-GODZINNY</button>
        </Link>
        <Link to="/platnosc">
          <button>12-GODZINNY</button>
        </Link>
        <Stopka />
      </div>
    );
  }
  
  export default Gdynia;
  