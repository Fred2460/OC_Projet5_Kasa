import '../styles/flogement.css';
import logementsData from '../datas/logements.json'
import { useParams } from 'react-router-dom';

function FLogement() {
  const { id } = useParams()
  const logement = logementsData.find((logement) => logement.id === id)
  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }

  return (
    <div>
        <p>title= {logement.title}</p>
        <p>location= {logement.location}</p>
        <p>host.name= {logement.host.name}</p>
        <p>host.picture= {logement.host.picture}</p>
        <p>rating= {logement.rating}</p>
        <p>tags[ ]= {logement.tags}</p>
        <p>description= {logement.description}</p>
        <p>equipments[ ]= {logement.equipments}</p>
    </div>
  );
}

export default FLogement;
  