import '../styles/flogement.css';
//import Logements from '../datas/logements.json'


function FLogement({ id }) {
    return (
      <div key={id} className="flogement">
        <div className="carousel">

        </div>
        <div className="title">
          <h1>{id.title}</h1>
          <h2>{id.location}</h2>
        </div>
        <div className="host">

        </div>
        <div className="rating">

        </div>
        <div className="tags">

        </div>
        <div className="details">

        </div>
      </div>
    );
  }
  
  export default FLogement;
  