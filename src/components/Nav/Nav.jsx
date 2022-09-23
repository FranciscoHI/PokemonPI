import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



export default function Nav() {
  return (
   
   <NavStyled>
    <nav>
    {/* <img src="logo192.png" alt="Logo"/> */}
      <ul> 
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
       
     </ul>
    </nav>
    </NavStyled>
   
  )
}


const NavStyled = styled.nav`
background-color: #0e0c0cef;
display:flex;
position: relative;


a {
  text-decoration: none;
  color: pink;
  margin: 10px;
}

a:hover {  
  background-color:#467fe7;  
  border-radius: 3px;
  color:white;
  text-decoration:none;
  padding:8px
  
  
  
}

ul {
  display:flex;
  list-style:none;
  
  
}

li {
  margin:0.5rem;
  
  
}

img{
width:30px;
height:30px;
margin-left:15px;
margin-top:15px;
align-items:center




}




`
