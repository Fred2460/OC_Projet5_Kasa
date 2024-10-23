import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import PinkLogo from '../assets/logo_KasaPink.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin-left: 100px;
  margin-right: 100px;
`

const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  color: #000000;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  &.active { 
    text-decoration: underline;
  }
`

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
