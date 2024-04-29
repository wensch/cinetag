import Favorites from "./pages/Favorites"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Payler from "./pages/Player"
import NotFound from "./pages/NotFound"
import PageDefault from "./pages/PageDefault"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path=":id" element={<Payler />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes