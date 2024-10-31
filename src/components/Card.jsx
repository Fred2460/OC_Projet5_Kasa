import PropTypes from "prop-types"
import "../styles/main.scss"

function HandleClick(id) {
  window.location.href=`/FLogement/${id}`
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

function Card({ id = "", cover = "", title = "" }) {
  
  return (
    <div className="gallery__card" onClick={() => HandleClick(id)}>
      <img src={cover} className="gallery__card--cover" alt="Bord de mer" />
      <p className="gallery__card--title">{title}</p>
    </div>
  )
}

export default Card
