import { Link } from 'react-router-dom'
import Stopka from "./Stopka"
import Header from './Header'
import { useTranslation } from 'react-i18next';


function Metropolitalny() {
    const { t, i18n } = useTranslation() 
    return (
      <div id="metropolitalny">
        <Header />
        <div class="bilety">
          <div class="normalne">
            <h3>{t('normalne.label')}</h3>
            <Link to="/metropolitalny/1raz/Normalny">
              <button>{t('1razowe.label')}</button>
            </Link>
            <Link to="/metropolitalny/24h/Normalny">
              <button>{t('24godzinne.label')}</button>
            </Link>
            <Link to="/metropolitalny/72h/Normalny">
              <button>{t('72godzinne.label')}</button>
            </Link>
            <Link to="/metropolitalny/miesieczny/Normalny">
              <button>{t('miesieczne.label')}</button>
            </Link>
          </div>
          <div class="ulgowe">
            <h3>{t('ulgowe.label')}</h3>
            <Link to="/metropolitalny/1raz/ULGOWY">
              <button>{t('1razowe.label')}</button>
            </Link>
            <Link to="/metropolitalny/24h/ULGOWY">
              <button>{t('24godzinne.label')}</button>
            </Link>
            <Link to="/metropolitalny/72h/ULGOWY">
              <button>{t('72godzinne.label')}</button>
            </Link>
            <Link to="/metropolitalny/miesieczny/ULGOWY">
              <button>{t('miesieczne.label')}</button>
            </Link>
          </div>
        </div>
        <Stopka />
      </div>
    );
  }
  
  export default Metropolitalny;
  