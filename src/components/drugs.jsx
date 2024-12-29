/* eslint-disable react/prop-types */

function ListOfdrugs({listDrugs}) {
  return (
    <ul>
    { 
    listDrugs.map(drug => (
      <li key={drug.id}>{drug.openfda.brand_name}</li>
      
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
  console.log(responseDrugs.results)
  const listDrugs = responseDrugs.results
  const hasDrugs = listDrugs && listDrugs.length>0
  return (
    hasDrugs 
    ? <ListOfdrugs listDrugs={listDrugs}/>
    : <NoDrugsResult/>
  )
}