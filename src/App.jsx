import { useRoutes } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { Home } from "./pages/home.jsx"
import { Details } from "./pages/details.jsx"
import { NotFound } from "./pages/notFound.jsx"

const routes = [
  { 
    path: '/',
    element: <Navigate to="/drugs" replace />
  },
  { 
    path: '/drugs',
    element:  <Home/> 
  },
  { 
    path: 'drugs/details',
    element: <Details/>
  },
  { 
    path: '*',
    element: <NotFound/>
  },
]

export default function App () {
  const elemento = useRoutes(routes)
  
  return (
    <main className='page'>
      { elemento }
    </main>
  )
}