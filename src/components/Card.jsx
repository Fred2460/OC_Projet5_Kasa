import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../styles/colors'
import { Link } from 'react-router-dom'
import '../styles/accueil.css';
import { useState } from 'react'
//import FLogement from './pages/FLogement'

const CardTitle = styled.span`
  color: ${colors.textBlock};
  font-size: 18px;
  font-weight: 700;
  margin: 20px;
  text-align: left;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${colors.backgroundBlock};
  border-radius: 10px;
  /*width: 340px;*/
  height: 340px;
  width: 100%;
  transition: 200ms;
  background-color: #FF6060;
`


function handleClick(id,title) {
	alert(`Vous voulez visiter ${title} - ${id} ? Très bon choix 🌱✨`)
  window.localStorage.setItem("locationId", (id))
  console.log("LocalStorage=", (id))
  //updateCardId((id))
  
  const lien = "/FLogement/" + (id)
  console.log("Lien var=", lien)
}

function Card({ id, title }) {
  const [CardId, updateCardId] = useState(0)
  return (
    <CardWrapper onClick={() => updateCardId((id))}>
      <div>
        <p>{id}</p>
        <Link to="/FLogement" className="cardTitle">{title}</Link>
      </div>
    </CardWrapper>
  )
}
//    <CardWrapper onClick={() => handleClick(id, title)}>
//<button onClick={() => handleClick(id, title)}></button>       

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

Card.defaultProps = {
  id: '',
  title: ''
}

export default Card
