import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const CharacterDetails = () => {
    const [character, setCharacter] = useState({})
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] )
    const [isFavorite, setIsfavorite] = useState(false)
    console.log("🚀 ~ file: characterDetails.js ~ line 8 ~ CharacterDetails ~ favorites", favorites)
    const history = useHistory()
    const {id} = useParams()
    console.log("🚀 ~ file: characterDetails.js ~ line 12 ~ CharacterDetails ~ id", id)
    console.log("🚀 ~ file: characterDetails.js ~ line 12 ~ CharacterDetails ~ id", typeof id)

    useEffect(() => {
        isInFavorite(id)
    },[favorites])


    const isInFavorite = (id) => {
       const isFav = favorites.some(fav => fav.id === Number(id))
       setIsfavorite(isFav)
    }

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://gateway.marvel.com/v1/public/characters/${id}`,
            params: {
                ts: 1,
                apikey: "ec01ad7b93a43d40fd608bdcb376cf0f",
                hash: "dc018923f04f6ede8044fdbb36ed97d8"
            }
        }).then(function (response) {
            const item = response.data.data.results[0]
            console.log("🚀 ~ file: Character.js ~ line 20 ~ useEffect ~ item", item)
            setCharacter(item)
        }).catch(function (error) {
            console.log(error);
        })
    },[])

    const removeFavorite = (id) => {
    console.log("🚀 ~ file: characterDetails.js ~ line 44 ~ removeFavorite ~ id", id)
    console.log("🚀 ~ file: characterDetails.js ~ line 44 ~ removeFavorite ~ id", typeof id)
        const newFavorite = favorites.filter(fav => fav.id !== Number(id))
        console.log("🚀 ~ file: characterDetails.js ~ line 45 ~ removeFavorite ~ newFavorite", newFavorite)
        localStorage.setItem('favorites', JSON.stringify(newFavorite)) 
        setFavorites(newFavorite) 
    }

    const  addFavorite = (character) => {
        const newArray = [...favorites, character]
        localStorage.setItem('favorites', JSON.stringify(newArray)) 
        setFavorites(newArray) 

    }

    const handleFavorite = (character) => {
        isFavorite ? removeFavorite(character.id) :  addFavorite(character) 
    }


    return (
        <div>
            <p onClick={() => history.goBack()}> retour</p>
                 <p>details</p>
                <p>{character.name}</p>
                <button onClick={() => {handleFavorite(character)}}>{isFavorite ?"remove from favorite" : "add to favorite"}</button>
                <img src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}></img>
                {/* <img src={`${character && character.thumbnail && character.thumbnail.path}.${character?.thumbnail?.extension}`}></img> */}
                {/* <button onClick={() => window.open('')}/> */}

        </div>
    );
};

export default CharacterDetails;