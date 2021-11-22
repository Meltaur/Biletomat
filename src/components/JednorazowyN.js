import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header'
import { useTranslation } from 'react-i18next';


function JednorazowyN() {
    const { t, i18n } = useTranslation()
    return (
      <div id="jednorazowyN">
        <Header />
        <div class="bilety">
        <Link to="/platnosc"
        state={{id: '13', cena:4.0, opis: "METROPOLITALNY, JEDNORAZOWY_ZWYKŁY, NORMALNY", ilosc:1}}>
          <button>{t('regular.label')}</button>
        </Link>
        <Link to="/platnosc"
        state={{id: '14', cena:4.6, opis: "METROPOLITALNY, JEDNORAZOWY_POSPIESZNY, NORMALMNY", ilosc:1}}>
          <button>{t('fast.label')}</button>
        </Link>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default JednorazowyN;
  