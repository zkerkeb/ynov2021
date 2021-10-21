import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const CharacterDetails = () => {
    const [character, setCharacter] = useState({})
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://gateway.marvel.com/v1/public/characters/${id}`,
            params: {
                ts: 1,
                apikey: "61c8a7fcda8ea4460ae3153ca1634e06",
                hash: "18095a47f8255dd67eda41da8f63d7e2"
            }
        }).then(function (response) {
            const item = response.data.data.results[0]
            console.log("🚀 ~ file: Character.js ~ line 20 ~ useEffect ~ item", item)
            setCharacter(item)
        }).catch(function (error) {
            console.log(error);
        })
    },[])


    return (
        <div>
            <p onClick={() => history.goBack()}> retour</p>
                 <p>details</p>
                <img src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}></img>
                <p>{character.name}</p>
                {/* <button onClick={() => window.open('')}/> */}

        </div>
    );
};

export default CharacterDetails;