import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import FavoritesProvider from "./Context/Favorites"
import { Outlet } from "react-router-dom"

const PageDefault = () => {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  )
}

export default PageDefault