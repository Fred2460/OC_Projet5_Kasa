import pictureAccueil from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../styles/Accueil.css';
import Card from '../components/Card'
//import PropTypes from 'prop-types'
//import styled from 'styled-components'
//import colors from '../styles/colors'
import Logements from '../datas/logements.json'

function Accueil() {
  return (
    <div className="accueil">
        <div className="banner">
          <img src={pictureAccueil} className="bannerPicture" alt="Bord de mer" />
        </div>
        <div className="gallery">
          {Logements.map(({id, title}) => (
            <Card
              title={Logements.title}
            />
          ))}
        </div>
    </div>
  );
}

/* key={`${Logements.id}`} */

export default Accueil;
