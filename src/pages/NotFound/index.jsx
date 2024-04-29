import styled from "styled-components"
import Title from "../../components/Title"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  
  h2 {
    font-size: 60px;
  }
`

const NotFound = () => {
  return (
    <Container >
      <Title>
        <h2>¯\_(ツ)_/¯</h2>
        <p>O conteúdo que você procura não foi encontrado!</p>
      </Title>
    </Container>
  )
}

export default NotFound