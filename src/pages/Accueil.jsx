import pictureAccueil from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../styles/main.scss';
import Card from '../components/Card'

function Accueil({ logements }) {
  return (
    <div className="main">
      <div className="banner banner__Accueil">
        <img src={pictureAccueil} className="banner__Picture" alt="Bord de mer" />
      </div>
      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Accueil;
