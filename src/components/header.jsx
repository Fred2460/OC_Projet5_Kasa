import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import PinkLogo from '../assets/logo_KasaPink.png'

const HomeLogo = styled.img`
  height: 70px;

  @media(min-width: 480px) and (max-width: 1024px) {
    height: 58px;
  }
  
  @media(max-width: 480px) {
    height: 47px;
  }
`

const NavContainer = styled.nav`
  padding: 45px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin-left: 100px;
  margin-right: 100px;
  
  @media(min-width: 480px) and (max-width: 1024px) {
    padding: 30px 0;
    margin-left: 50px;
    margin-right: 50px;
  }

  @media(max-width: 480px) {
    padding: 20px 0;  
    margin-left: 20px;
    margin-right: 20px;
  }  
`
const NavBlock = styled.nav`
  display: flex;
  justify-content: right;
  gap: 57px;
 
  @media(min-width: 480px) and (max-width: 1024px) {
    gap: 35px;
  }

  @media(max-width: 480px) {
    gap: 20px;
  }
`

const StyledLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  &.active { 
    text-decoration: underline;
  }

  @media(min-width: 480px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media(max-width: 480px) {
    font-size: 12px;
    text-transform: uppercase;
  }  
`

function Header() {
  return (
    <NavContainer>
        <HomeLogo src={PinkLogo} />
        <NavBlock>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/APropos">A-Propos</StyledLink>
        </NavBlock>
    </NavContainer>
  )
}

export default Header
