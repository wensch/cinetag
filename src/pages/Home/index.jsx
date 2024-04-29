import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import videos from "../../json/db.json"
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`

const Home = () => {
  return(
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Container>
        {videos.map((item) => {
          return <Card key={item.id} id={item.id} title={item.titulo} photo={item.capa} link={item.link} />
        })}
      </Container>
    </>
  )
}

export default Home;