import { useLocation } from "react-router-dom"
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from "react-router-dom";


export function Details () {
  const navigate = useLocation()
  const information = Object.entries(navigate.state.information);

  return (
    <section>
      <div className="hd__details">
        <h1>Detalles del producto -- {navigate.state.information.generic_name}</h1>
        <Link to={'/'}>
          <Button variant="contained">Atras</Button>
        </Link>
      </div>
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
    </section>
  )
}