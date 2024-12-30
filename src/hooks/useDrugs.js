import {useState, useRef} from 'react'
// import withResult from '../mocks/listDrugs.json'
// import withoutResult from '../mocks/noResult.json'
import { searchDrugs } from '../services/petitionDrugs'

export function UseDrugs({search}) {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const previusSearch = useRef(search)


  const getDrugs = async () => {
    if(search ===previusSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search
      const newDrugs =await searchDrugs({search})
      setDrugs(newDrugs)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
    
  }
    
  return {drugs, getDrugs, loading}
}