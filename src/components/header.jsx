import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PinkLogo from '../assets/Logo_KasaPink.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`
/*
const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `text-decoration: underline;`
  }
*/

/* <StyledLink to="/" $isFullLink>Accueil</StyledLink> 
function Header(props) {*/
function Header() {
  return (
    <NavContainer>
        <HomeLogo src={PinkLogo} />
        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/APropos">A-Propos</StyledLink>
        </div>
    </NavContainer>
  )
}

export default Header
