import styled from "styled-components"

const Cover = styled.div`
  background-image: ${props => `url(/images/banner-${props.$imageUrl}.png)`};
  width: 100%;
  height: 347px;
  background-size: cover;
  background-repeat: no-repeat;
  
  @media (max-width: 1200px) {
    height: 240px;
    background-position-x: center;
  }
`

const Banner = ({image}) => { 
  return (
    <Cover $imageUrl={image}></Cover>
  ) 
}

export default Banner