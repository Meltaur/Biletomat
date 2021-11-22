import { Link } from 'react-router-dom'
import Header from './Header';
import { useTranslation } from 'react-i18next'

function Home() {
  const { t, i18n } = useTranslation() 
  return (
    <div id="home">
      <Header />
      <center><h1>{t('przywitanie.label')}</h1></center>
      <div class="bilety">
        <Link to="/gdynia">
          <button>{t('gdynia.label')}</button>
        </Link>
        <Link to="/metropolitalny">
          <button>{t('metropolitalny.label')}</button>
        </Link>
        <Link to="/karta">
          <button>{t('karta_miejska.label')}</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
