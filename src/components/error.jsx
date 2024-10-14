import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../styles/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  color: ${colors.primary};
  background-color: ${colors.backgroundMain};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-size: 288px;
  font-weight: 700;
`

const ErrorSubtitle = styled.h2`
  font-weight: 500;
`

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: black;
  text-decoration: underline;
  font-size: 18px;
  text-align: center;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <StyledLink to="/">Retournez sur la page d'accueil</StyledLink>
    </ErrorWrapper>
  )
}

export default Error
