import PropTypes from "prop-types"
import "../styles/main.scss"

function HandleClick(id) {
  window.location.href=`/FLogement/${id}`
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
  
}

function Card({ id = "", title = "", cover = "" }) {
  
  return (
    <div className="gallery__card" onClick={() => HandleClick(id)}>
      <p className="gallery__card--title">{title}</p>
      <img src={cover} className="gallery__card--cover" alt="Bord de mer" />
    </div>
  )
}

export default Card
