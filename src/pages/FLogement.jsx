import '../styles/flogement.css';
import Logements from '../datas/logements.json'
import { useState } from 'react'

function FLogement() {
  const [Card, updateCard] = useState(0)

  const Id = window.localStorage.getItem("locationId")
  console.log("locationId=", Id)
  console.log("Card=", Card)
  console.log("Logements=", Logements)
  console.log("Logements.Id=", Logements.Id)

  let idLoc = 0
  for (let i=0; i < Logements.length; i++) {
    if (Logements[i].id === Id) {
      idLoc = i
      window.localStorage.setItem("idLoc", idLoc)
      break
    } else {
      i++
    }
  }

  console.log("idLoc après boucle=", idLoc)
  const selectLoc = Logements[idLoc]
  console.log("selectLoc=", selectLoc)

  return (
    <div key={Id} className="flogement">
      <div className="carousel">
      </div>
      <div className="title">
        <p>Id= {Id}</p>
        <p>Logements[idLoc].id= {Logements[idLoc].id}</p>
        <p>selectLoc= (selectLoc)</p>
      </div>
      <div className="host">
        <p>host= (Logements[idLoc].host)</p>
      </div>
      <div className="rating">
      <p>rating= (Logements[idLoc].rating)</p>
      </div>
      <div className="tags">
      </div>
      <div className="details">
      </div>
    </div>
  );
}
  
  export default FLogement;
  