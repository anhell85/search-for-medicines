export const searchDrugs = async ({search}) => {
  if(search==='') return
  try {
    const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${search}"&limit=1000`)
    const json = await response.json()
    
    const drugs = json.results
    
    return drugs?.map(drug => ({
      id: drug.id,
      name: drug.openfda.brand_name
    }))
  } 
  // eslint-disable-next-line no-unused-vars
  catch (e) {
    throw new Error('Error searching drugs')
  }
}