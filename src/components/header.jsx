import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../styles/colors'
import PinkLogo from '../assets/Logo_KasaPink.png'
import activeUrl from './ActivePath'

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
//activeUrl = 
console.log("activeUrl=", activeUrl);
const actuelUrl = window.location.pathname;
console.log("windows.location.pathname=", actuelUrl);
//console.log("activePath=", activePath);

/*function Header(props) {*/
function Header() {
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

export default Header
