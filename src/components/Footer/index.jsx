import styled from "styled-components"

const FooterStyle = styled.footer`

  display: flex;
  justify-content: center;
  background-color: #0C120C;
  padding-block: 15px;

  h2 {
    font-weight: 400;
    font-size: 18px;
    color: #fff;
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <h2>Desenvolvido por Mateus Wensch.</h2>
    </FooterStyle>
  )
}

export default Footer