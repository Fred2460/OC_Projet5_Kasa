import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../styles/colors'

const CardTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 700;
  align-self: left;
  margin: 5px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  background-color: ${colors.backgroundBlock};
  border-radius: 10px;
  /*width: 340px;*/
  height: 340px;
  width: 100%;
  transition: 200ms;
  background-color: #FF6060;
/*box-sizing: border-box;*/
position: relative;
overflow: hidden;
aspect-ratio: 1 / 1;
justify-content: left;
align-items: bottom;
`


function Card({ title }) {
  return (
    <CardWrapper>
      <CardTitle>Titre</CardTitle>        
    </CardWrapper>
  )
}
//<CardTitle>{title}</CardTitle>

Card.propTypes = {
  title: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: '',
}

export default Card
