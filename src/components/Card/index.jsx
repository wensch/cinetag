import styled from "styled-components";
import iconFavorite from "./favorite.png"
import { useFavoriteContext } from "../../Context/Favorites";
import iconUnfavorite from "./unfavorite.png"
import { Link } from "react-router-dom";

 
const CardStyle = styled.div`
  padding: 0 0 1em 0;
  margin-top: .5em;
  width: 282px;
  background-color: var(--cinza);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    padding: 0 1em;
    color: var(--preto);
    text-align: left;
  }

  a {
    text-decoration: none;
  }
  `

const Cover = styled.img`
  width: 100%;
`

const Favorite = styled.img`
  padding: 0 1em;
  width: 25px;
`


const Card = ({id, title, photo}) => {
  const {favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some(item => item.id === id)

  return (
    <CardStyle>
      <Link to={`/${id}`}>
        <Cover src={photo} alt={title} />
      </Link>
        <h2>{title}</h2>
      <Favorite src={ isFavorite ? iconUnfavorite : iconFavorite} alt="Favoritar icone" onClick={() => addFavorite({id, title, photo})} />
    </CardStyle>
  )
}

export default Card