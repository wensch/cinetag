import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/wensch/cinetag-api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

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