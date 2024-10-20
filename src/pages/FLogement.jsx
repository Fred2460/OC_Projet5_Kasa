import '../styles/flogement.css';
import logementsData from '../datas/logements.json'
import { useParams } from 'react-router-dom';
import activeStar from '../assets/star-active.png'
import inactiveStar from '../assets/star-inactive.png'

function FLogement() {
  const { id } = useParams()
  const logement = logementsData.find((logement) => logement.id === id)
  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }

  return (
    <div className='info'>
      <div className='title'>
        <h1 className='title--main'>{logement.title}</h1>
        <p>{logement.host.name}</p>
      </div>
      <div className='location'>
        <p>{logement.location}</p>
      </div>
      <div className='tagsrating'>
        <div className='tagsrating__tags'>
          <p className={logement.tags[0] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[0]}</p>
          <p className={logement.tags[1] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[1]}</p>
          <p className={logement.tags[2] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[2]}</p>
          <p className={logement.tags[3] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[3]}</p>
          <p className={logement.tags[4] !== undefined ? 'tagsrating__tags--tag' : ''}>{logement.tags[4]}</p>
        </div>
      </div>
    </div>
  );
}
/*
      
      
      
      
      
      
      
      
        <div className='tagsrating__stars'>
          <src>{logement.rating >=0 ? {activeStar} : {inactiveStar}} </src>
          <src>{logement.rating >=1 ? {activeStar} : {inactiveStar}} </src>
          <src>{logement.rating >=2 ? {activeStar} : {inactiveStar}} </src>
          <src>{logement.rating >=3 ? {activeStar} : {inactiveStar}} </src>
          <src>{logement.rating >=4 ? {activeStar} : {inactiveStar}} </src>
        </div>
      </div>

        <p>host.picture= {logement.host.picture}</p>


        <p>description= {logement.description}</p>
        <p>equipments[ ]= {logement.equipments}</p>
*/
export default FLogement;
  