
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id="home">
        <Link to="/gdynia">
          <button>Gdynia</button>
        </Link>
        <Link to="/metropolitalny">
          <button>Metropolitalny</button>
        </Link>
        <Link to="/karta">
          <button>Karta miejeska</button>
        </Link>
    </div>
  );
}

export default Home;
