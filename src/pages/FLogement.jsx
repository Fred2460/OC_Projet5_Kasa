import '../styles/flogement.scss'
import Error from './Erreur'
import logementsData from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'

function FLogement() {
  /* récupération de l'id et des informations du logement sélectionné */
  const { id } = useParams()
  const logement = logementsData.find((logement) => logement.id === id)

  /* gestion du cas où le logement de l'id sélectionné n'existe pas */
  if (!logement) {
    return <Error />
  }

  return (
    <div className='info'>

      {/* Carrousel de photos */}
      <Carousel className="carousel" pictures={logement.pictures} />

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
          <article className="details__block">
            <Collapse title="Description">
              <span>{logement.description}</span>
            </Collapse>
          </article>

          <article  className="details__block">
            <Collapse title="Équipements">
              <span>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </span>
            </Collapse>
          </article>
      </div>
    </div>
  )
}

export default FLogement
  