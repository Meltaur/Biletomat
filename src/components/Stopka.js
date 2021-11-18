import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Stopka() {
  const navigate = useNavigate()

    return (
      <div id = "Stopka">
        <Link to="/home">
          <button>EKRAN STARTOWY</button>
        </Link>
          <button onClick={() => navigate(-1)}>POWRÓT</button>
        <Link to="/platnosc">
          <button>PŁATNOŚC</button>
        </Link>
      </div>
    );
  }
  
  export default Stopka;
  