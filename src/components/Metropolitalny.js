import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Metropolitalny() {
    return (
      <div id="metropolitalny">
        <Link to="/metropolitalny/1raz">
          <button>1-RAZOWY</button>
        </Link>
        <Link to="/metropolitalny/24h">
          <button>24-GODZINNY</button>
        </Link>
        <Link to="/metropolitalny/72h">
          <button>72-GODZINNY</button>
        </Link>
        <Link to="/metropolitalny/miesieczny">
          <button>MIESIECZNY</button>
        </Link>
        <Stopka />
      </div>
    );
  }
  
  export default Metropolitalny;
  