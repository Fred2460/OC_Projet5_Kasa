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
  background-color: ${colors.backgroundBlock};
  border-radius: 10px;
  /*width: 340px;*/
  height: 340px;
  width: 100%;
  transition: 200ms;
`

function Card({ title }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: '',
}

export default Card
