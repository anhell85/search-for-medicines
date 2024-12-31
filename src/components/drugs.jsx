/* eslint-disable react/prop-types */
import { List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDetails } from '../hooks/useDetails'


export function Drugs({ drugs }) {
  const selectedIndex = 0

  const Item = styled('div')(() => ({
    marginTop: '10px',
  }));
  const { getDetails } = useDetails()
  

  const ListOfdrugs = ({ listDrugs }) => {
    return (
      <List component="nav" aria-label="main mailbox folders"
      sx={{
        maxHeight: 600,
        overflow: 'auto',
      }}>
        { 
          listDrugs.map(drug => (
            <Item key={drug.product_id}>
              <ListItemButton
                className="drug"
                key={drug.product_id}
                selected={selectedIndex === 0}
                onClick={(e)=>{handleListItemClick(e,drug)}}
              >
                <ListItemText primary={`${drug.generic_name} - ${drug.labeler_name}`} />
              </ListItemButton>
            </Item>
          ))
        }
      </List>
    )
  }
  
  const handleListItemClick = (event, information) => {
    getDetails(information)
  }
 
  // const NoDrugsResult = () => {
  //   return (
  //     <p>No se encontraron resultados pollo</p>
  //   )
  // }
  const hasDrugs = drugs && drugs.length>0
  return (
    hasDrugs 
    ? <ListOfdrugs  listDrugs={drugs}/>
    : <empty/>
  )
}