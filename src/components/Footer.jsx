import styled from 'styled-components'
import WhiteLogo from '../assets/logo_KasaWhite.png'

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
  color: #FFFFFF;
  background-color: #000000;
  font-size: 24px;
  font-weight: 500;
  gap: 30px;

  @media(max-width: 480px) {
    font-size: 12px;
    gap: 10px;
  }
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
  