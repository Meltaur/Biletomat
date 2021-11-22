import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from "./Header"

function MiesiecznyN() {
    return (
      <div id="miesiecznyN">
        <Header />
        <div class="bilety">
          Miesieczny</div>
        <Stopka />
      </div>
    );
  }
  
  export default MiesiecznyN;