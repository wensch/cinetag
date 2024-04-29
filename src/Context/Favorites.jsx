import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favoritos"

export default function FavoritesProvider({children}) {
  
  const [favorite, setFavorite] = useState([])

  return(
    <FavoritesContext.Provider value={{favorite, setFavorite}}>
      {children}
    </FavoritesContext.Provider>
  )
  
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext)
  const favoriteSaved = localStorage.getItem('favoriteSaved') ? JSON.parse(localStorage.getItem('favoriteSaved')) : favorite 

  function addFavorite(newFavorite) {
    const sameFavorite = favoriteSaved.some(item => item.id === newFavorite.id)

    let list = [...favoriteSaved]

    if (!sameFavorite) {
      list.push(newFavorite)
      localStorage.setItem('favoriteSaved', JSON.stringify(list))
      return setFavorite(list)
    }

    list.splice(list.indexOf(newFavorite), 1)
    localStorage.removeItem('favoriteSaved')
    localStorage.setItem('favoriteSaved', JSON.stringify(list))
    return setFavorite(list)
  }

  return {
    favoriteSaved,
    addFavorite
  }
}