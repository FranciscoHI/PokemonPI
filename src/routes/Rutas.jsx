import React from 'react'
import { Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from '../components/Nav/Nav'
import About from '../pages/About'
import Details from '../pages/Details'





export default function Rutas() {
  return (
    <>
        <Nav />
        <Route path='/home' component={Home} />
        <Route path="/about" component={About} />
        <Route path='/details/:id'> <Details />
        </Route>
    </>
  )
  };