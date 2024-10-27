import PropTypes from "prop-types"
import "../styles/main.scss"

function HandleClick(id) {
  window.location.href=`/FLogement/${id}`
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

/*Card.defaultProps = {
  id: '',
  title: ''
}*/

function Card({ id = "", title = "" }) {
  
  return (
    <div className="gallery__card" onClick={() => HandleClick(id)}>
      <p className="gallery__card--title">{title}</p>
    </div>
  )
}

export default Card
