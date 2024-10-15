import bannerPicture from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../styles/Accueil.css';
import Card from './components/Card'

function Accueil() {
  return (
    <div className="Accueil">
        <img src={bannerPicture} className="Banner" alt="Bord de mer" />
        <div className="Gallery">
          <Card>

          </Card>
        </div>
    </div>
  );
}

export default Accueil;
