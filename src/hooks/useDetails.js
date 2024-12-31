import { useNavigate } from 'react-router-dom';

export function useDetails() {
  const navigate = useNavigate()
  
  const getDetails = (information) => {
    navigate('/drugs/details', {state:{information}})
  }
    
  return { getDetails }
}