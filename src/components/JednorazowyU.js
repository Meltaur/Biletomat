import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header';
import { useTranslation } from 'react-i18next';


function JednorazowyU() {
    const { t, i18n } = useTranslation()
    return (
      <div id="jednorazowyU">
        <Header />
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '15', cena:2.0, opis: "METROPOLITALNY, JEDNORAZOWY_ZWYKŁY, ULGOWY", ilosc:1}}>
          <button>{t('regular.label')}</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '16', cena:2.3, opis: "METROPOLITALNY, JEDNORAZOWY_POSPIESZNY, ULGOWY", ilosc:1}}>
          <button>{t('fast.label')}</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default JednorazowyU;
  