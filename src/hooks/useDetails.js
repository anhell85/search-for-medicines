import { useNavigate } from 'react-router-dom';
import { searchDrugsById } from '../services/drugs.service'

export function useDetails() {
  const navigate = useNavigate()
  
  const goToDetails = (information) => {
    navigate(`/drugs/${information.product_id}`, {state:{information}})
  }
  const getDetailsId = async (id) =>{
    try {   
      const result = await searchDrugsById({id})
      console.log(result[0]);
      return result[0]
    } 
    catch (error) {
      throw new Error(error)
    } 
  }
  
  
    
    
  return { goToDetails, getDetailsId }
}