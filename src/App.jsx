import { useEffect, useState } from 'react';
import './App.scss'
import responseDrugs from './mocks/listDrugs.json'
import { Drugs } from './components/drugs';

const DRUGS_ENDPOINT = 'https://api.fda.gov/drug/label.json?search=openfda.brand_name:%22ava%22&limit=2';

function App() {
  
  //  const [drugs, setDrugs] = useState()
   useEffect(()=> {
    // fetch(DRUGS_ENDPOINT)
    //   .then(res => res.json())
    //   // .then(data =>  setDrugs(data.results))
    //   .then(data =>
    //     console.log(data)

    //   )
    // setDrugs(listDrugs.results)
    },[])
  return (
    <section className='App'>
      <header>
        <h1>Buscador de medicamentos</h1>
        <form className='form'>
          <input type="text" placeholder='introduce el nombre del medicamento' />
          <button type='submit'> Buscar</button>
        </form>
      </header>
      <main>
        <Drugs responseDrugs={responseDrugs}></Drugs>
      </main>
    </section>
  )
}

export default App
