import {useState} from 'react'
// import withResult from '../mocks/listDrugs.json'
// import withoutResult from '../mocks/noResult.json'
import { searchDrugs } from '../services/petitionDrugs'

export function UseDrugs({search}) {
  const [drugs, setDrugs] = useState([]);


  const getDrugs = async () => {
    const newDrugs =await searchDrugs({search})
    setDrugs(newDrugs)
  }
    
  return {drugs, getDrugs}
}