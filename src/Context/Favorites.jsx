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

  function addFavorite(newFavorite) {
    const sameFavorite = favorite.some(item => item.id === newFavorite.id)

    let list = [...favorite]

    if (!sameFavorite) {
      list.push(newFavorite)
      return setFavorite(list)
    }

    list.splice(list.indexOf(newFavorite), 1)
    return setFavorite(list)
  }

  return {
    favorite,
    addFavorite
  }
}