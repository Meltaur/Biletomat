
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id="home">
      <center><h1>BILETOMAT MIASTA GDYNIA</h1></center>
      <div class="bilety">
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
      <div class="jezyk">
          <button>ANG</button>
          <button>DE</button>
          <button>RU</button>
          <button>FR</button>
        </div>
    </div>
  );
}

export default Home;
