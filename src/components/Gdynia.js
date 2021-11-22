import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header'
import { useTranslation } from 'react-i18next';

function Gdynia() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="gdynia">
        <Header />
        <div class="bilety">
          <div class = "ulgowe">
            <h3>{t('ulgowe.label')}</h3>
            <Link to="/platnosc"
              state={{id: '1', cena:1.9, opis: "GDYNIA, JEDNORAZOWY, ULGOWY", ilosc:1}}>
              <button>{t('1razowe.label')}</button>
            </Link>
            <Link to="/platnosc"
            state={{id: '2', cena:2.2, opis: "GDYNIA, 1-GODZINNY, ULGOWY", ilosc:1}}>
              <button>{t('1godzinne.label')}</button>
            </Link>
            <Link to="/platnosc" 
            state={{id: '3', cena:7.0, opis: "GDYNIA, 12-GODZINNY, ULGOWY", ilosc:1}}>
              <button>{t('12godzinne.label')}</button>
            </Link>
          </div>
          <div class = "normalne">
              <h3>{t('normalne.label')}</h3>
              <Link to="/platnosc"
                state={{id: '4', cena:3.8, opis: "GDYNIA, JEDNORAZOWY, NORMALNY", ilosc:1}}>
                <button>{t('1razowe.label')}</button>
              </Link>
              <Link to="/platnosc"
              state={{id: '5', cena:4.4, opis: "GDYNIA, 1-GODZINNY, NORMALNY", ilosc:1}}>
                <button>{t('1godzinne.label')}</button>
              </Link>
              <Link to="/platnosc" 
              state={{id: '6', cena:14.0, opis: "GDYNIA, 12-GODZINNY, NORMALNY", ilosc:1}}>
                <button>{t('12godzinne.label')}</button>
              </Link>
          </div>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default Gdynia;
  