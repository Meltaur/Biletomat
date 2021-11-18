import { Link } from 'react-router-dom'
import Stopka from "./Stopka"

function Metropolitalny() {
    return (
      <div id="metropolitalny">
        <div class="bilety">
          <div class="normalne">
            <h3>NORMALNE</h3>
            <Link to="/metropolitalny/1raz/Normalny">
              <button>1-RAZOWY</button>
            </Link>
            <Link to="/metropolitalny/24h/Normalny">
              <button>24-GODZINNY</button>
            </Link>
            <Link to="/metropolitalny/72h/Normalny">
              <button>72-GODZINNY</button>
            </Link>
            <Link to="/metropolitalny/miesieczny/Normalny">
              <button>MIESIECZNY</button>
            </Link>
          </div>
          <div class="ulgowe">
            <h3>ULGOWE</h3>
            <Link to="/metropolitalny/1raz/ULGOWY">
              <button>1-RAZOWY</button>
            </Link>
            <Link to="/metropolitalny/24h/ULGOWY">
              <button>24-GODZINNY</button>
            </Link>
            <Link to="/metropolitalny/72h/ULGOWY">
              <button>72-GODZINNY</button>
            </Link>
            <Link to="/metropolitalny/miesieczny/ULGOWY">
              <button>MIESIECZNY</button>
            </Link>
          </div>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default Metropolitalny;
  