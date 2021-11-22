import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';
import { useTranslation } from 'react-i18next'

function CalodobowyU() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="calodobowyU">
        <Header />
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '10', cena:8, opis: "METROPOLITALNY, CALODOBOWY_KOMU, ULGOWY", ilosc:1}}>
          <button>{t('komunalne.label')}</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '11', cena:11, opis: "METROPOLITALNY, CALODOBOWY_KOLEJ_KOMU_DWA, ULGOWY", ilosc:1}}>
          <button>{t('kolejowo_komunalne_2.label')}</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '12', cena:12.5, opis: "METROPOLITALNY, CALODOBOWY_KOLEJ_KOMU_WSZYSTKIE, ULGOWY", ilosc:1}}>
          <button>{t('kolejowo_komunalne_all.label')}</button>
        </Link>
      </div>
        <Stopka />
      </div>
    );
  }
  
  export default CalodobowyU;
  