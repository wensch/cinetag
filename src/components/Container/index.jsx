import styled from "styled-components"

const ContainerStyle = styled.section`
  section {
    max-width: 1200px;
    margin: 2em auto;
    text-align: center;
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