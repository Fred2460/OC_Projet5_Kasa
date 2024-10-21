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
import { Collapse } from 'react-bootstrap';

function FLogement() {
  /* récupération de l'id et des informations du logement sélectionné */
  const { id } = useParams()
  const logement = logementsData.find((logement) => logement.id === id)

  /* gestion du carrousel */
  const [currentIndex, setCurrentIndex] = useState(0);
  
  console.log("images carrousel=",logement.pictures)

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  }

  function prevImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  }

  /*gestion du détails des informations sur le logement - boutons 'collapse' */
  const [openDescription, setOpenDescription] = useState(false);
  const [openEquipments, setOpenEquipments] = useState(false);


  /* gestion du cas où le logement de l'id sélectionné n'existe pas */
  if (!logement) {
    return <h2>Logement non trouvé</h2>;
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
          <p className={logement.tags[0] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[0]}</p>
          <p className={logement.tags[1] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[1]}</p>
          <p className={logement.tags[2] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[2]}</p>
          <p className={logement.tags[3] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[3]}</p>
          <p className={logement.tags[4] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[4]}</p>
        </div>
        <div className='tagsrating__stars'> {/* rating du logement */}
          <FontAwesomeIcon icon={faStar} className={parseInt(logement.rating) >= 1 ? 'tagsrating__stars--star active' : 'tagsrating__stars--star inactive'} />
          <FontAwesomeIcon icon={faStar} className={parseInt(logement.rating) >= 2 ? 'tagsrating__stars--star active' : 'tagsrating__stars--star inactive'} />
          <FontAwesomeIcon icon={faStar} className={parseInt(logement.rating) >= 3 ? 'tagsrating__stars--star active' : 'tagsrating__stars--star inactive'} />
          <FontAwesomeIcon icon={faStar} className={parseInt(logement.rating) >= 4 ? 'tagsrating__stars--star active' : 'tagsrating__stars--star inactive'} />
          <FontAwesomeIcon icon={faStar} className={parseInt(logement.rating) >= 5 ? 'tagsrating__stars--star active' : 'tagsrating__stars--star inactive'} />
        </div>
      </div>
      <div className='details'> {/* informations détaillées du logement */}
        <div className='description'>
          <button className="btnDetails" onClick={() => setOpenDescription(!openDescription)}>
            Description
            {openDescription ? <chevronUp size={20} /> : <chevronDown size={20} />}
          </button>
          <Collapse in={openDescription}>
            <div classname='detailsDescription'>
              {logement.description}
            </div>
          </Collapse>
        </div>
        <div className='equipments'>
          <button className="btnDetails" onClick={() => setOpenEquipments(!openEquipments)}>
            Équipements
            {openEquipments ? <chevronUp size={20} /> : <chevronDown size={20} />}
          </button>
          <Collapse in={openEquipments}>
            <div classname='detailsEquipments'>
              <ul className='listEquipment'>
                <li>{logement.equipments[0] !== undefined && logement.equipments[0]}</li>
                <li>{logement.equipments[1] !== undefined && logement.equipments[1]}</li>
                <li>{logement.equipments[2] !== undefined && logement.equipments[2]}</li>
                <li>{logement.equipments[3] !== undefined && logement.equipments[3]}</li>
                <li>{logement.equipments[4] !== undefined && logement.equipments[4]}</li>
                <li>{logement.equipments[5] !== undefined && logement.equipments[5]}</li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}


/*

<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
  <CollapsibleTrigger asChild>
    <Button variant="outline" className="w-full flex justify-between items-center">
      Toggle Content
      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="p-4 bg-gray-100 mt-2 rounded">
    <p>This is the collapsible content. It can be expanded or collapsed.</p>
  </CollapsibleContent>
</Collapsible>


<button className='btnDetails' onClick={() => setOpenDescription(!openDescription)}>
  <p>Description</p>
  {openDescription ? {chevronDown} : {chevronUp}}
</button>
<Collapse in={openDescription}>
  <div className='detailsDescription'>
    <p>{logement.description}</p>
  </div>
</Collapse>
<button className='btn' onClick={() => setOpenEquipments(!openEquipments)}>
  {openEquipments ? 'Masquer' : 'Afficher'}
</button>
<Collapse in={openEquipments}>
  <div className='detailsEquipments'>
    <ul>{logement.equipments}</ul>
  </div>
</Collapse>



        <p>description= {logement.description}</p>
        <p>equipments[ ]= {logement.equipments}</p>
*/

export default FLogement;
  