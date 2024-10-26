import '../styles/flogement.scss'
import Error from './Erreur'
import logementsData from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
// pour le carrousel
//import { FontAwesomeIcon } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
// pour l'affichage du détails des informations du logement
import chevronDown from '../assets/chevronDown.png'
import chevronUp from '../assets/chevronUp.png'
import { Collapse } from 'react-bootstrap'

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

      {/* carrousel */}
      <div className='carousel'>
        <button className='carousel__previousButton' onClick={prevImage}>
          <IoChevronBackSharp className='carousel__previousButton--icone' /> {/* chevron précédent */}
        </button>
        <img className='carousel__picture' src={logement.pictures[currentIndex]} alt='carousel' />
        <p className='carousel__slideIndex'>{currentIndex+1}/{logement.pictures.length}</p>
        <button className='carousel__nextButton' onClick={nextImage}>
          <IoChevronForwardSharp className='carousel__nextButton--icone' /> {/* chevron suivant */}
        </button>
      </div>

      {/* informations principales du logement */}
      <div className="infoBlock">
        <div className='identification'> 
          <h1 className='identification__title'>{logement.title}</h1>
          <p className='identification__location'>{logement.location}</p>
          <div className='identification__tags'> {/* tags du logement */}
            {logement.tags.map((tag, index) => (
              <p key={index} className={tag !== undefined ? 'identification__tags--tag' : ''}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* complément: host et rating */}
        <div className="additional">
          <div className='additional__host'> {/* identification host */}
            <p className='additional__host--name'>{logement.host.name}</p>
            <img className='additional__host--img' src={logement.host.picture} alt='Host avatar' />
          </div>
          <div className='additional__rating'>
            <div className='additional__rating--stars'> {/* rating du logement */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={parseInt(logement.rating) >= index + 1 ? 'additional__rating--stars active' : 'additional__rating--stars inactive'} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* informations détaillées du logement */}
      <div className="details">

        {/* Description */}
        <article className="details__block">
          <div className="details__block__banner">
            Description
            <button className="details__block__banner--chevron" onClick={() => setOpenDescription(!openDescription)}>
              {openDescription ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openDescription}>
            <p className="details__block--description">{logement.description}</p>
          </Collapse>
        </article>
        
        {/* Equipements */}
        <article className="details__block">
          <div className="details__block__banner">
            Équipements
            <button className="details__block__banner--chevron" onClick={() => setOpenEquipments(!openEquipments)}>
              {openEquipments ? <img src={chevronDown} alt="Chevron fermé" /> : <img src={chevronUp} alt="Chevron ouvert" />}
            </button>
          </div>
          <Collapse in={openEquipments}>
            <ul className="details__block--listEquipment">
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
  