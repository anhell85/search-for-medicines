import {Button, TextField } from '@mui/material';
// import { styled } from '@mui/material/styles';
import '../App.scss'

import { Drugs } from '../components/drugs';
import { useDrugs } from '../hooks/useDrugs.js';
import { useSearch } from '../hooks/useSearch.js'

export function Home() {
  const { search, updateSearch, error } = useSearch()
  const { drugs, loading, getDrugs } = useDrugs({search});
  
  const handleChange = (event) => {
    const newSearch = event.target.value
    if(newSearch.startsWith(' ')) return
    updateSearch(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateSearch( search )
    if(!error) {
      getDrugs(search);
    }
  }  
   
  return (
    <section className='App'>
      <header>
        <h1>Buscador de medicamentos</h1>
        <form className='form' onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={search}
            id="outlined-basic"
            name="search"
            type="search" 
            placeholder='introduce el nombre del medicamento'
            required
            size="small"
          />
          <Button variant="contained" type="submit">Buscar</Button>
        </form>
        {error && <p style={{ color:'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <h3>Cargando...</h3> : <Drugs drugs={drugs}></Drugs>}
      </main>
    </section>
  )
}