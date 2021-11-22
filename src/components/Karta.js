import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';
import { useTranslation } from 'react-i18next';


function Karta() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="karta">
        <Header />
        <div class="bilety">
        {t('komunikat_przyloz.label')}  
        <Link to="/doladowanie_karty">      
          <button>{t('wczytaj_przycisk.label')}</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default Karta;
  