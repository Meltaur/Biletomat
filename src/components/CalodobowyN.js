import { Link } from 'react-router-dom'
import Header from './Header';
import Stopka from "./Stopka"
import { useTranslation } from 'react-i18next'


function CalodobowyN() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="calodobowyN">
        <Header />
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '7', cena:16.0, opis: t('N24hkomunalny.label'), ilosc:1}}>
          <button>{t('komunalne.label')}</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '8', cena:22.0, opis: "METROPOLITALNY, CALODOBOWY_KOLEJ_KOMU_DWA, NORMALNY", ilosc:1}}>
          <button>{t('kolejowo_komunalne_2.label')}</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '9', cena:25.0, opis: "METROPOLITALNY, CALODOBOWY_KOLEJ_KOMU_WSZYSTKIE, NORMALNY", ilosc:1}}>
          <button>{t('kolejowo_komunalne_all.label')}</button>
        </Link>
      </div>
        <Stopka />
      </div>
    );
  }
  
  export default CalodobowyN;
  