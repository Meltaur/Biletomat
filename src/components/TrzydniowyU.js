import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';
import { useTranslation } from 'react-i18next';


function TrzydniowyU() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="trzydniowyU">
        <Header />
        <div class="bilety">
          <Link to="/platnosc"
          state={{id: '19', cena:16.0, opis: "METROPOLITALNY, 74H_KOMU, ULGOWY", ilosc:1}}>
            <button>{t('komunalne.label')}</button>
          </Link>
          <Link to="/platnosc"
          state={{id: '20', cena:25.0, opis: "METROPOLITALNY, 74H_KOLEJ_KOMU, ULGOWY", ilosc:1}}>
            <button>{t('kolejowo_komunalne.label')}</button>
          </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default TrzydniowyU