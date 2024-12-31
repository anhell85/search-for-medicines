import { useEffect, useState, useRef } from 'react';

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=> {
    if (isFirstInput.current) {
      isFirstInput.current = search ===''
      return
    }
    if (search === '') {
      setError('No se puede realizar una busqueda vacia')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede realizar una busqueda con un numero')
      return
    }
    if (search.length < 3) {
      setError('No se puede realizar una busqueda con al menos dos caracteres')
      return
    }
    setError(null)
    },[search])
  
  
  return { search, updateSearch, error }
}