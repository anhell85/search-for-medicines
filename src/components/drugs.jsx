/* eslint-disable react/prop-types */
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDetails } from '../hooks/useDetails'
import { useState, useEffect } from 'react'

export function Drugs({ drugs }) {

  const { getDetails } = useDetails()
  const selectedIndex = 0
  const Item = styled('div')(() => ({
    marginTop: '10px',
  }));
  
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(()=> {
      if (typeof drugs === 'undefined') {
        setIsEmpty(true)
      }
  },[drugs])


  const ListOfdrugs = ({ listDrugs }) => {
    return (
      <List component="nav" aria-label="main mailbox folders"
      sx={{
        maxHeight: 600,
        overflow: 'auto',
      }}>
        {
          listDrugs && listDrugs.length > 20 &&
          <ListSubheader component="div" id="nested-list-subheader">
            Existen mas de 20 resultados
          </ListSubheader>
        }
        {
          listDrugs?.map(drug => (
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
  const NoDrugsResult = () => {
    return (
      <p style={{textAlign: 'center', fontWeight: 'bold'}}>No se encontraron resultados </p>
    )
  }
  
  const handleListItemClick = (event, information) => {
    getDetails(information)
  }

  return (
    !isEmpty 
    ? <ListOfdrugs  listDrugs={drugs}/>
    : <NoDrugsResult/>
  )
}