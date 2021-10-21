import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Favorites = () => {
    const history = useHistory()
    const localStorageFavorite = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : []
    const [favorites, setFavorites] = useState(localStorageFavorite)
    console.log("🚀 ~ file: favorites.js ~ line 8 ~ Favorites ~ favorites", favorites)
    return (
        <div>
            <p>Favorites</p>
            {favorites.map(fav=> <p onClick={() => history.push(`/characters/${fav.id}`)}>{fav.name}</p>)}
        </div>
    );
};

export default Favorites;