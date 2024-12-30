import { useEffect, useState, useRef } from 'react';
import './App.scss'

import { Drugs } from './components/drugs';
import { UseDrugs } from './hooks/useDrugs.js';
import { UseSearch } from './hooks/useSearch.js'
// import { UseSearch } from './hooks/useSearch';
// console.log(UseSearch)

function App() {
  const { search, updateSearch, error } = UseSearch()
  const { drugs, getDrugs } = UseDrugs({search});
  
  const handleChange = (event) => {
    const newSearch = event.target.value
    if(newSearch.startsWith(' ')) return
    updateSearch(newSearch)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateSearch( search )
    // if(!error) {
      getDrugs(search);
    // }
  }
  
   
   
  return (
    <section className='App'>
      <header>
        <h1>Buscador de medicamentos</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            onChange={handleChange}
            value={search}
            name="search"
            type="text" 
            placeholder='introduce el nombre del medicamento' />
          <button type='submit'> Buscar</button>
        </form>
        {error && <p style={{color:'red'}} >{error}</p>}
      </header>
      <main>
        <Drugs responseDrugs={drugs}></Drugs>
      </main>
    </section>
  )
}

export default App
