import styled from 'styled-components'
import WhiteLogo from '../assets/Logo_KasaWhite.png'
import colors from '../styles/colors'

const FooterLogo = styled.img`
  height: 40px;
  margin-top: 50px;
`

const FooterContainer = styled.footer`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.textFooter};
  background-color: ${colors.backgroundFooter};
  font-size: 24px;
  font-weight: 500;
`

function Footer() {
    return (
      <FooterContainer>
        <FooterLogo src={WhiteLogo} />
        <p>© 2020 Kasa. All rights reserved</p>
      </FooterContainer>
    )
  }
  
  export default Footer
  