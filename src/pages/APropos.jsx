import pictureAPropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';
import '../styles/accueil.css';
//import PropTypes from 'prop-types'
//import styled from 'styled-components'
//import colors from '../styles/colors'

function APropos() {
  return (
    <div className="accueil">
      <div className="banner bannerAPropos">
        <img src={pictureAPropos} className="bannerPicture" alt="Bord de mer" />
      </div>
      <div className="valeurs">
      
      </div>
    </div>
  );
}


export default APropos;
