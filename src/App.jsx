import { useRoutes } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { Home } from "./pages/home.jsx"

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
    path: '/search',
    element: <h1> search</h1>
  },
  { 
    path: '*',
    element: <h1> 404 page not found</h1>
  },
]

export default function App () {
  const elemento = useRoutes(routes)
  console.log(elemento);
  
  return (
    <main>
      <h1> el elemento es </h1>
      { elemento }
    </main>
  )
}