export const searchDrugs = async ({search}) => {
  if(search==='') return
  try {
    const response = await fetch(`https://api.fda.gov/drug/ndc.json?search=generic_name:"${search}"&limit=100`)
    const json = await response.json()
    
    //TODO seria necesario mapear la informacion por si cambia la API solamente cambiarlo en este archivo.
    // return json.results?.map(drug => ({
    //   id: drug.product_id,
    //   name: drug.generic_name,
    //   label: drug.labeler_name
    // })) 
    return json.results
   
  } 
  // eslint-disable-next-line no-unused-vars
  catch (e) {
    throw new Error('Error searching drug')
  }
}

export const searchDrugsById = async ({ id }) => {
  try {
    const response = await fetch(`https://api.fda.gov/drug/ndc.json?search=product_id:"${id}"`)
    const json = await response.json()

    const allInformation = json.results
    const results = json.results?.[0].map(drug => ({
      name: drug.generic_name,
      labelerName: drug.labeler_name
    }))

    return {allInformation, results}
  } 
  // eslint-disable-next-line no-unused-vars
  catch (e) {
    throw new Error('Error searching drug')
  }
}
