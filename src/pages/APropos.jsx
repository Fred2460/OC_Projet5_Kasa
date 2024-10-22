import pictureAPropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import '../styles/accueil.css'
import { useState } from 'react'
import chevronDown from '../assets/ChevronDown.png'
import chevronUp from '../assets/ChevronUp.png'
import { Collapse } from 'react-bootstrap'

function APropos() {
  /*gestion du détails des informations sur le logement - boutons 'collapse' */
  const [openFiabilite, setOpenFiabilite] = useState(false)
  const [openRespect, setOpenRespect] = useState(false)
  const [openService, setOpenService] = useState(false)
  const [openSecurite, setOpenSecurite] = useState(false)

  return (
    <div className="accueil">
      <div className="banner bannerAPropos">
        <img src={pictureAPropos} className="bannerPicture" alt="Bord de mer" />
      </div>
      <div className="valeurs">
        <article> {/* Valeur : Fiabilité */}
          <button className="btnValeurs" onClick={() => setOpenFiabilite(!openFiabilite)}>
            Fiabilite
            {openFiabilite ? <chevronUp size={20} /> : <chevronDown size={20} />}
          </button>
          <Collapse in={openFiabilite}>
            <div>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
              et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
          </Collapse>
        </article>
        <article> {/* Valeur : Respect */}
          <button className="btnValeurs" onClick={() => setOpenRespect(!openRespect)}>
            Respect
            {openRespect ? <chevronUp size={20} /> : <chevronDown size={20} />}
          </button>
          <Collapse in={openRespect}>
            <div>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
                 du voisinage entraînera une exclusion de notre plateforme</p>
            </div>
          </Collapse>
        </article>
        <article> {/* Valeur : Service */}
          <button className="btnValeurs" onClick={() => setOpenService(!openService)}>
            Service
            {openService ? <chevronUp size={20} /> : <chevronDown size={20} />}
          </button>
          <Collapse in={openService}>
            <div>
              <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, 
              que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
            </div>
          </Collapse>
        </article>
        <article> {/* Valeur : Sécurité */}
          <button className="btnValeurs" onClick={() => setOpenSecurite(!openSecurite)}>
            Securite
            {openSecurite ? <chevronUp size={20} /> : <chevronDown size={20} />}
          </button>
          <Collapse in={openSecurite}>
            <div>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
              aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela 
              permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur 
              la sécurité domestique pour nos hôtes.</p>
            </div>
          </Collapse>
        </article>
      </div>
    </div>
  )
}

export default APropos
