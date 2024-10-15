import bannerPicture from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../styles/Accueil.css';
import Card from '../components/Card'
//import PropTypes from 'prop-types'
//import styled from 'styled-components'
//import colors from '../styles/colors'
import Logements from '../datas/logements.json'

function Accueil() {
  return (
    <div className="Accueil">
        <img src={bannerPicture} className="Banner" alt="Bord de mer" />
        <div className="Gallery">
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
