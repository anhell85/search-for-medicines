/* eslint-disable react/prop-types */

function ListOfdrugs({listDrugs}) {
  return (
    <ul className='drugs'>
    { 
    listDrugs.map(drug => (
      <li className="drug" key={drug.id}>{drug.name}</li>
      
    ))}
  </ul>
  )
}
function NoDrugsResult() {
  return (
    <p>No se encontraron resultados</p>
  )
}
export function Drugs({responseDrugs}) {
  const hasDrugs = responseDrugs && responseDrugs.length>0
  return (
    hasDrugs 
    ? <ListOfdrugs  listDrugs={responseDrugs}/>
    : <NoDrugsResult/>
  )
}