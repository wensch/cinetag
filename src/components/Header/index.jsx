import { Link } from "react-router-dom"
import logo from "./logo.png"
import HeaderLink from "./HeaderLink"
import styled from "styled-components"

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1em 20em;
  background-color: #0C120C;

  @media (max-width: 1200px) {
    padding-inline: 40px;
  }

  @media (max-width: 719px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="/favorites">Favoritos</HeaderLink>
      </nav>
    </HeaderStyle>
  )
}

export default Header