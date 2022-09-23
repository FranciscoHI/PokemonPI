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
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path= "/details/:id" component={Details} />
    </>
  )
  };