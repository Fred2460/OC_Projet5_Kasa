import pictureAPropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import '../styles/main.scss'
import { useState } from 'react'
import chevronDown from '../assets/chevronDown.png'
import chevronUp from '../assets/chevronUp.png'
import { Collapse } from 'react-bootstrap'

function APropos() {
  /*gestion du détails des informations sur le logement - boutons 'collapse' */
  const [openFiabilite, setOpenFiabilite] = useState(false)
  const [openRespect, setOpenRespect] = useState(false)
  const [openService, setOpenService] = useState(false)
  const [openSecurite, setOpenSecurite] = useState(false)

  return (
    <div className="main">
      <div className="banner banner__APropos">
        <img src={pictureAPropos} className="banner__Picture" alt="Bord de mer" />
      </div>
      <div className="valeurs">
        <article> {/* Valeur : Fiabilité */}
          <div className="valeurs__banner">
            Fiabilité
            <button className="valeurs__banner--chevron" onClick={() => setOpenFiabilite(!openFiabilite)}>
              {openFiabilite ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openFiabilite}>
            <p className="valeurs__banner--text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
              et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapse>
        </article>
        <article> {/* Valeur : Respect */}
          <div className="valeurs__banner">
            Respect
            <button className="valeurs__banner--chevron" onClick={() => setOpenRespect(!openRespect)}>
              {openRespect ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openRespect}>
            <p className="valeurs__banner--text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
                 du voisinage entraînera une exclusion de notre plateforme</p>
          </Collapse>
        </article>
        <article> {/* Valeur : Service */}
          <div className="valeurs__banner">
            Service
            <button className="valeurs__banner--chevron" onClick={() => setOpenService(!openService)}>
              {openService ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openService}>
            <p className="valeurs__banner--text">La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, 
              que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
          </Collapse>
        </article>
        <article> {/* Valeur : Sécurité */}
          <div className="valeurs__banner">
            Sécurité
            <button className="valeurs__banner--chevron" onClick={() => setOpenSecurite(!openSecurite)}>
              {openSecurite ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openSecurite}>
            <p className="valeurs__banner--text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
            aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela 
            permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur 
            la sécurité domestique pour nos hôtes.</p>
          </Collapse>
        </article>
      </div>
    </div>
  )
}

export default APropos
