import {useState, useRef} from 'react'
// import withResult from '../mocks/listDrugs.json'
// import withoutResult from '../mocks/noResult.json'
import { searchDrugs } from '../services/drugs.service'

export function useDrugs({search}) {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const previusSearch = useRef(search)


  const getDrugs = async () => {
    if(search ===previusSearch.current) return
    try {
      setLoading(true)
      previusSearch.current = search
      const newDrugs = await searchDrugs({search})
      setDrugs(newDrugs)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
    
  }
    
  return {drugs, getDrugs, loading, setDrugs}
}