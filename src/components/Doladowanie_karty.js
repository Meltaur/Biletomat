import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';
import { useTranslation } from 'react-i18next';


function Doladowanie_karty() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="doladowanie_karty">
        <Header />
        <div class="bilety">
        {t('komunikat_odczyt.label')}
        <Link to="/platnosc"
        state={{id: '21', cena:50.0, opis: "DOŁADOWANIE KARTY", ilosc:1}}>
            <button>{t('dalej.label')}</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }

  export default Doladowanie_karty;