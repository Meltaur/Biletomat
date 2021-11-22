import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';
import { useTranslation } from 'react-i18next';


function TrzydniowyN() {
    const { t, i18n } = useTranslation() 
    return (
    <div id="trzydniowyN>">
      <Header />
        <div class="bilety">
          <Link to="/platnosc"
          state={{id: '17', cena:32.0, opis: "METROPOLITALNY, 72H_KOMU, NORMALNY", ilosc:1}}>
            <button>{t('komunalne.label')}</button>
          </Link>
          <Link to="/platnosc"
          state={{id: '18', cena:50.0, opis: "METROPOLITALNY, 72H_KOLEJ_KOMU, NORMALNY", ilosc:1}}>
            <button>{t('kolejowo_komunalne.label')}</button>
          </Link>
        </div>
        <Stopka />
    </div>   
    );
  }
  
  export default TrzydniowyN;