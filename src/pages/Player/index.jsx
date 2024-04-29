import Title from "../../components/Title"
import Banner from "../../components/Banner"
import styled from "styled-components"
import videos from "../../json/db.json"
import { useParams } from "react-router-dom"
import NotFound from "../NotFound"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  
  iframe {
    height: 80vh;
  }
`

const Payler = () => {
  const params = useParams();
  const video = videos.find(item => item.id === Number(params.id))
  
  if (!video) {
    return <NotFound />
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <Container>

        <iframe width="100%" src={video.link} title={video.titulo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Container>
    </>
  )
}

export default Payler