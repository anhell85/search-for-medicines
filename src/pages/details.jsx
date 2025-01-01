import { useLocation, useParams} from "react-router-dom"
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useDetails } from '../hooks/useDetails'

export function Details () {
  const navigate = useLocation()
  const params = useParams()
  const [information, setInformation] = useState([])
  const [name, setName] = useState()
  const { getDetailsId } = useDetails()

  const checkInformation = async () => {
    if(typeof navigate !== 'undefined'&& navigate.state !== null && navigate.state.information !== 'undefined') {
      setName(navigate?.state?.information.generic_name)
      setInformation(Object.entries(navigate?.state?.information));
    } else {
      const respuesta = await getDetailsId(params.id)
      setName(respuesta.generic_name)
      setInformation(Object.entries(respuesta));
    }
  }
  useEffect(()=>{
    checkInformation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <section>
      <div className="hd__details">
        <h1>Detalles del producto -- {name}</h1>
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
            { information.map(([key,info],i) => (
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