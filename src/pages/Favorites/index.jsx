import Title from "../../components/Title"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import styled from "styled-components"
import { useFavoriteContext } from "../../Context/Favorites"

const Container = styled.section`
  display: flex;
  justify-content: center;
`

const Favorites = () => {
  const {favoriteSaved} = useFavoriteContext();

  

  return (
    <>
      <Banner image="favoritos" />
      <Title>
        <h1>Meus Favoritos</h1>

      </Title>
      <Container>
        {favoriteSaved.length === 0 &&
          <h2>Nenhum favorito encontrado</h2>
        }
        {
          favoriteSaved.map((item) => {
            return <Card key={item.id} id={item.id} title={item.title} photo={item.photo}/>
          })
        }
      </Container>      
    </>
  )
}

export default Favorites