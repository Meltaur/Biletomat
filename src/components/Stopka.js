import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function Stopka() {
    const { t, i18n } = useTranslation() 
    const navigate = useNavigate()
    return (
      <div id = "Stopka">
        <Link to="/home">
          <button>{t('ekran_startowy.label')}</button>
        </Link>
          <button onClick={() => navigate(-1)}>{t('powrot.label')}</button>
        <Link to="/platnosc">
          <button>{t('platnosc.label')}</button>
        </Link>
      </div>
    );
  }
  
  export default Stopka;
  