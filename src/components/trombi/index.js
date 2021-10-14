import { useEffect, useState } from "react"
import axios from 'axios'
 
const HarryPotter = (props) => {
console.log("🚀 ~ file: index.js ~ line 4 ~ HarryPotter ~ props", props)
    const [apiData, setApiData] = useState([])
    
    const eleve = {
       name: 'yanis',
        numero: '1',
        classe: 'm1'
    }

    const {name: nameTwo} = eleve
    console.log("🚀 ~ file: index.js ~ line 15 ~ HarryPotter ~ name", nameTwo)


    useEffect(() => {
      const test = axios.get(props.api)
      console.log(test)
      axios.get(props.api).then((response) => {
        console.log(response.data)
        setApiData(response.data)
      })
    }, [])
  
    // console.log(apiData)
  
    return (
      <div className="App">
        {apiData.map(item => 
        <div>
          <img src={item.image}/>
          <h1>{item.name}</h1>
          {/* <h3>{item.alternate_names &&  typeof item.alternate_names === 'array' && item.alternate_names[0] !== '' ? item?.alternate_names.map(x => x) : ''}</h3> */}
          <h2>Date de naissance: {item.dateOfBirth}</h2>
          <p>Espèce: {item.species}</p>
          <p>Maison: {item.house}</p>
          <hr/>
        </div>
        )
        }
        </div>
      )
    }

    HarryPotter.defaultProps = {
        api: 'cuicui'
    }

    export default HarryPotter