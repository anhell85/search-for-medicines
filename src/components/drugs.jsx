/* eslint-disable react/prop-types */
import {List, ListItemButton, ListItemText} from '@mui/material';
import { styled } from '@mui/material/styles';
const handleListItemClick = () => {
  console.log('hola');
}
const selectedIndex = 0
const Item = styled('div')(() => ({
  marginTop: '10px',
}));
function ListOfdrugs({listDrugs}) {
  return (
    <List component="nav" aria-label="main mailbox folders"
    sx={{
      maxHeight: 600,
      overflow: 'auto',
    }}>
      { 
        listDrugs.map(drug => (
          <Item key={drug.id}>

            <ListItemButton
            className="drug"
            key={drug.id}
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>
              <ListItemText primary={drug.name} />
            </ListItemButton>
          </Item>
        ))
      }
    </List>
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