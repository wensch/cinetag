import styled from "styled-components"

const ContainerStyle = styled.section`
  section {
    max-width: 1200px;
    margin: 2em auto;
    text-align: center;
    gap: 24px;

    @media (max-width: 1200px) {
      padding-inline: 40px;
      flex-wrap: wrap;
      row-gap: 24px;
    }
  }
`

const Container = ({children}) => {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}

export default Container