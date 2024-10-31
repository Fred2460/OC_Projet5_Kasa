import pictureAPropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import '../styles/main.scss'
import Collapse from '../components/Collapse'

function APropos() {

  return (
    <div className="main">
      <div className="banner banner__APropos">
        <img src={pictureAPropos} className="banner__Picture" alt="Bord de mer" />
      </div>
      
      <div className="valeurs">

        <article>
          <Collapse title="Fiabilité">
            <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
              et toutes les informations sont régulièrement vérifiées par nos équipes.</span>
          </Collapse>
        </article>

        <article>
          <Collapse title="Respect">
            <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation 
              du voisinage entraînera une exclusion de notre plateforme.</span>
          </Collapse>
        </article>
        
        <article>
          <Collapse title="Service">
            <span>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, 
              que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</span>
          </Collapse>
        </article>
        
        <article>
          <Collapse title="Sécurité">
            <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
              aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela 
              permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur 
              la sécurité domestique pour nos hôtes.</span>
          </Collapse>
        </article>
      </div>
    </div>
  )
}

export default APropos
