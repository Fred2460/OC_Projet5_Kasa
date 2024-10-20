import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../styles/colors'
import '../styles/accueil.css';

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
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%),
    #FF6060;
  border-radius: 10px;
  /*width: 340px;*/
  height: 340px;
  width: 100%;
  transition: 200ms;
  cursor: pointer;
`

function handleClick(id) {
  window.location.href=`/FLogement/${id}`
}

function Card({ id, title }) {
  return (
    <CardWrapper onClick={() => handleClick(id)}>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

Card.defaultProps = {
  id: '',
  title: ''
}

export default Card
