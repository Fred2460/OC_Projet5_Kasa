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
      <div className="banner bannerAPropos">
        <img src={pictureAPropos} className="bannerPicture" alt="Bord de mer" />
      </div>
      <div className="valeurs">
        <article> {/* Valeur : Fiabilité */}
          <div className="bannerValeurs">
            Fiabilité
            <button className="chevron" onClick={() => setOpenFiabilite(!openFiabilite)}>
              {openFiabilite ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openFiabilite}>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
              et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapse>
        </article>
        <article> {/* Valeur : Respect */}
          <div className="bannerValeurs">
            Respect
            <button className="chevron" onClick={() => setOpenRespect(!openRespect)}>
              {openRespect ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openRespect}>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
                 du voisinage entraînera une exclusion de notre plateforme</p>
          </Collapse>
        </article>
        <article> {/* Valeur : Service */}
          <div className="bannerValeurs">
            Service
            <button className="chevron" onClick={() => setOpenService(!openService)}>
              {openService ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openService}>
            <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, 
              que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
          </Collapse>
        </article>
        <article> {/* Valeur : Sécurité */}
          <div className="bannerValeurs">
            Sécurité
            <button className="chevron" onClick={() => setOpenSecurite(!openSecurite)}>
              {openSecurite ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openSecurite}>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
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
