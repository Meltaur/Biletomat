import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Jednorazowy() {
    return (
      <div id="jednorazowy">
        <Link to="/platnosc">
          <button>ZWYKŁE I NOCNE</button>
        </Link>
        <Link to="/platnosc">
          <button>ZWYKŁE, POSPIESZNE I NOCNE</button>
        </Link>
        <Stopka />
      </div>
    );
  }
  
  export default Jednorazowy;
  