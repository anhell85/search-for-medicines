/* eslint-disable react/prop-types */

function ListOfdrugs({listDrugs}) {
  return (
    <ul>
    { 
    listDrugs.map(drug => (
      <li key={drug.id}>{drug.name}</li>
      
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
    ? <ListOfdrugs listDrugs={responseDrugs}/>
    : <NoDrugsResult/>
  )
}