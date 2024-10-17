import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../styles/colors'
import PinkLogo from '../assets/Logo_KasaPink.png'
//import { useState, useEffect } from 'react'
//import { useLocation } from 'react-router-dom'

const HomeLogo = styled.img`
  height: 70px;

`

const NavContainer = styled.nav`
  padding: 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundMain};
  margin-left: 100px;
  margin-right: 100px;
`

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.textLow};
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  ${(props) =>
    props.$isFullLink && 
    `text-decoration: underline;`}
`

let activeUrl = window.location.pathname
console.log("activeUrl=", activeUrl)

/*function Header(props) {*/
function Header({ Path, updatePath}) {
  return (
    <NavContainer>
        <HomeLogo src={PinkLogo} />
        <div>
          {activeUrl === "/" && (
            <div>
              <StyledLink to="/"  $isFullLink>Accueil</StyledLink>
              <StyledLink to="/APropos">A-Propos</StyledLink>
            </div>
          )}
          {activeUrl === "/APropos" && (
            <div>
              <StyledLink to="/">Accueil</StyledLink>
              <StyledLink to="/APropos"  $isFullLink>A-Propos</StyledLink>
            </div>
          )}
          {(activeUrl !== "/" && activeUrl !== "/APropos") && (
            <div>
              <StyledLink to="/">Accueil</StyledLink>
              <StyledLink to="/APropos">A-Propos</StyledLink>
            </div>
          )}
        </div>

    </NavContainer>
  )
}
/* ************ autre test de path actif (non fonctionnel) *****************
<div>
  {activeUrl === "/",
    activeUrl === "/APropos"
    ? 
    <div>
      <StyledLink to="/"  $isFullLink>Accueil</StyledLink>
      <StyledLink to="/APropos">A-Propos</StyledLink>
    </div>
    : 
      ?
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/APropos"  $isFullLink>A-Propos</StyledLink>
      </div>
      :
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/APropos">A-Propos</StyledLink>
      </div>
  }
</div>
*/
export default Header
