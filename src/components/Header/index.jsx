import { Link } from "react-router-dom"
import logo from "./logo.png"
import HeaderLink from "./HeaderLink"
import styled from "styled-components"

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1em 20em;
  background-color: var(--preto);
`

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="/favoritos">Favoritos</HeaderLink>
      </nav>
    </HeaderStyle>
  )
}

export default Header