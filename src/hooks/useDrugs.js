import responseDrugs from '../mocks/listDrugs.json'

export function UseDrugs() {
  const mappedDrugs = responseDrugs?.results?.map(drug => ({
    id: drug.id,
    name: drug.openfda.brand_name
  }))
    
  return {listOfDrugs:mappedDrugs}
}