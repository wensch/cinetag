import { useState } from "react"
import { Outlet } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../../theme"
import FavoritesProvider from "../../Context/Favorites"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import GlobalStyles from "../../GlobalStyles"
import IconDarkMode from "../../Icons/IconDarkMode"
import IconLightkMode from "../../Icons/IconLightMode"

const PageDefault = () => {
  const [theme, setTheme] = useState("light")
  const [iconTheme, setIconTheme] = useState(IconDarkMode)

  const themeToggle =  () => {
    if (theme === "light") {
      setIconTheme(IconLightkMode)
      setTheme("dark")
    } else {
      setIconTheme(IconDarkMode)
      setTheme("light")
    }
    theme === "light" ? setTheme("dark") : setTheme("light")
    console.log(theme);
  }

  const Main = styled.main`
    color: ${props => props.theme.fontColor};
  `

  const Button = styled.button`
  cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 10px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: ${props => props.theme.fontColor};
    transition: background .3s;
    
    svg {
      fill: ${props => props.theme.body};
      transition: fill .3s;
    }
  `

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Main>
        <Header />
        <FavoritesProvider>
          <Container>
            <Outlet />
          </Container>
        </FavoritesProvider>
        <Footer />
      </Main>
      <Button onClick={() => themeToggle()}>
      {iconTheme}
      </Button>
    </ThemeProvider>
  )
}

export default PageDefault