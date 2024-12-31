import { useLocation } from "react-router-dom"
import {Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'

export function Details () {
  const navigate = useLocation()
  const information = Object.entries(navigate.state.information);

  return (
    <div>
      {<h1>Detalles del producto -- {navigate.state.information.generic_name}</h1> }
      {
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Parametro</TableCell>
                <TableCell align="right">Información</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { Object.values(information).map(([key,info],i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th" scope="row"> {key} </TableCell>
                  { <TableCell align="right">{typeof info === 'string' 
                    ? info
                    : 'not avaible'}
                  </TableCell> }
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
        // Object.values(information).map(([key,info],i) =>(
        //   <div key={i}>
        //   <p>{key}</p>
        //   {typeof info === 'string' 
        //     ? <p>{info}</p> 
        //     : <p>not avaible</p>}
        //   </div>
        // ))
      }
    </div>
  )
}