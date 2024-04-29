import Favorites from "./pages/Favorites"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container"
import FavoritesProvider from "./Context/Favorites"
import Payler from "./pages/Player"
import NotFound from "./pages/NotFound"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/:id" element={<Payler />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes