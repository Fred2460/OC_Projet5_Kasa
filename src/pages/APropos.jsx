import bannerPicture from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';
import '../styles/Accueil.css';
//import PropTypes from 'prop-types'
//import styled from 'styled-components'
//import colors from '../styles/colors'

function APropos() {
  return (
    <div className="Accueil">
        <img src={bannerPicture} className="Banner" alt="Bord de mer" />
        <div className="Valeurs">
        </div>
    </div>
  );
}


export default APropos;
