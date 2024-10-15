import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../styles/colors'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.textMain};
  background-color: ${colors.backgroundMain};
  font-type: 'Montserrat';
  margin: 50px;
  gap: 60px;
`

const ErrorTitle = styled.h1`
  font-size: 288px;
  font-weight: 700;
  margin: 0;
`

const ErrorSubtitle = styled.h2`
  font-weight: 500;
`

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.textLow};
  text-decoration: underline;
  font-size: 18px;
  text-align: center;
`

function Erreur() {
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

export default Erreur
