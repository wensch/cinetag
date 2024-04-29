import Title from "../../components/Title"
import Banner from "../../components/Banner"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import NotFound from "../NotFound"
import { useEffect, useState } from "react"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  
  iframe {
    height: 80vh;
  }
`

const Payler = () => {
  const params = useParams();
  const [video, setVideo] = useState([])

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/wensch/cinetag-api/videos/${params.id}`)
      .then(response => response.json())
      .then(data => setVideo(data))
  }, [params])
  
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