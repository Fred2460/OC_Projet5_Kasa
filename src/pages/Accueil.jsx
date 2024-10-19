import pictureAccueil from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../styles/accueil.css';
import Card from '../components/Card'

function Accueil({ logements }) {
  return (
    <div className="accueil">
      <div className="banner bannerAccueil">
        <img src={pictureAccueil} className="bannerPicture" alt="Bord de mer" />
      </div>
      <div className="gallery">
        {logements.map((logement) => (
          <Card
            id={logement.id}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Accueil;
