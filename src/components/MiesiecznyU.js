import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';

function MiesiecznyU() {
    return (
      <div id="miesiecznyU">
        <Header />
        <div class="bilety">
          Miesieczny</div>
        <Stopka />
      </div>
    );
  }
  
  export default MiesiecznyU;