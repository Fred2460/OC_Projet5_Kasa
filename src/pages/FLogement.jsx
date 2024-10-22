import '../styles/flogement.css'
import logementsData from '../datas/logements.json'
import { useParams } from 'react-router-dom'
// pour le carrousel
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import chevronLeft from '../assets/chevronLeft.png'
import chevronRight from '../assets/chevronRight.png'
// pour l'affichage du détails des informations du logement
import chevronDown from '../assets/ChevronDown.png'
import chevronUp from '../assets/ChevronUp.png'
import { Collapse } from 'react-bootstrap'
import Error from './Erreur'

function FLogement() {
  /* récupération de l'id et des informations du logement sélectionné */
  const { id } = useParams()
  const logement = logementsData.find((logement) => logement.id === id)

  /* gestion du carrousel */
  const [currentIndex, setCurrentIndex] = useState(0)
  
  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length)
  }

  function prevImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    )
  }

  /*gestion du détails des informations sur le logement - boutons 'collapse' */
  const [openDescription, setOpenDescription] = useState(false);
  const [openEquipments, setOpenEquipments] = useState(false);

  /* gestion du cas où le logement de l'id sélectionné n'existe pas */
  if (!logement) {
    return <Error />
  }

  return (
    <div className='info'>
      <div className='carouselContainer'> {/* carrousel */}
        <button className='previousButton' onClick={prevImage}>
          <img src={chevronLeft} alt='Chevron précédent' /> {/* chevron précédent */}
        </button>
        <img className='carouselPicture' src={logement.pictures[currentIndex]} alt='carousel' />
        <p className='slideIndex'>{currentIndex+1}/{logement.pictures.length}</p>
        <button className='nextButton' onClick={nextImage}>
          <img src={chevronRight} alt='Chevron suivant' /> {/* chevron suivant */}
        </button>
      </div>
      <div className='title'> {/* informations principales du logement */}
        <h1 className='title--main'>{logement.title}</h1>
        <div className='title--host'>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt='Host avatar' />
        </div>
      </div>
      <div className='location'>
        <p>{logement.location}</p>
      </div>
      <div className='tagsrating'>
        <div className='tagsrating__tags'> {/* tags du logement */}
          {logement.tags.map((tag, index) => (
            <p key={index} className={tag !== undefined ? 'tagsrating__tags--tag' : ''}>
              {tag}
            </p>
          ))}
        </div>
        <div className='tagsrating__stars'> {/* rating du logement */}
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className={parseInt(logement.rating) >= index + 1 ? 'tagsrating__stars--star active' : 'tagsrating__stars--star inactive'} />
          ))}
        </div>
      </div>
      <div className="details"> {/* informations détaillées du logement */}
        <article className="description"> {/* Description */}
          <div className="bannerDetails">
            Description
            <button className="chevron" onClick={() => setOpenDescription(!openDescription)}>
              {openDescription ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openDescription}>
            <p>{logement.description}</p>
          </Collapse>
        </article>
        <article className="equipments"> {/* Equipements */}
          <div className="bannerDetails">
            Équipements
            <button className="chevron" onClick={() => setOpenEquipments(!openEquipments)}>
              {openEquipments ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openEquipments}>
            <ul className="listEquipment">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </article>
      </div>
    </div>
  )
}

export default FLogement
  