import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Characters = props => {
    const [characters, setCharacters] = useState([])
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        getCharacters(offset)
    },[offset])

    useEffect(() => {
        console.log(characters)
    },[characters])
    

    const  getCharacters = (offsetLocal, isReset) => {
        console.log(offsetLocal)
        axios({
            method: 'GET',
            url: "http://gateway.marvel.com/v1/public/characters",
            params: {
                ts : 1,
                apikey : "e8ff93d2a4d12cc6faa5af1f68ef55c1",
                hash : "85d6365b85a155046e158aa832440b4a",
                offset: offsetLocal
            }}).then(res =>  {
                console.log(res.data.data.results);
                if(!isReset){
                setCharacters([...characters, ...res.data.data.results])
            } else{
                setCharacters([...res.data.data.results])
            }
            }).catch(err => {
                console.error(err);
            })
    }

    const onEnd = () => {
        console.log('ace')
        setOffset(offset + limit)
    }

    return (
        <div>
            <p>Characters</p>
            {/* {characters.map(character => {
                return (
                    <div>
                        <img style={{width: "200px"}} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} ></img>
                        <p>{character.name}</p>
                    </div>
                )
            })} */}
            <InfiniteScroll
  dataLength={characters.length} //This is important field to render the next data
  next={onEnd}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={() => getCharacters(0, true)}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>
  {characters.map((character) => 
  <div> <p>wesh</p>
      <p key={character?.id}>{character?.name}</p>
      <img style={{width: "200px"}} src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} ></img>
      </div>
  )}
</InfiniteScroll>
        </div>

    );
};

Characters.propTypes = {
    
};

export default Characters;