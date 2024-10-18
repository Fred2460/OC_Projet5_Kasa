import pictureAccueil from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import '../styles/accueil.css';
import Card from '../components/Card'
//import PropTypes from 'prop-types'
//import styled from 'styled-components'
//import colors from '../styles/colors'
//import Logements from '../components/Logements'
//import React, { useState, useEffect } from 'react';
import Logements from '../datas/logements.json';

console.log("Logements=", Logements)
console.log("Logements[1]=", Logements[1])
console.log("Logements[1].id=", Logements[1].id)
localStorage.clear()

function Accueil() {
  return (
    <div className="accueil">
      <div className="banner bannerAccueil">
        <img src={pictureAccueil} className="bannerPicture" alt="Bord de mer" />
      </div>
      <div className="gallery">
        {Logements.map(({id, title}) => (
          <Card
            id={id}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

/* key={`${Logements.id}`} */

export default Accueil;
