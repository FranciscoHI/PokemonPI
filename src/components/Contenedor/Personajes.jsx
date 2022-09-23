import React, {useEffect,useState } from 'react'
import CardPersonaje from "../Card/CardPersonaje";
import {getAll} from '../../redux/actions/index';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'


export default function Personajes() {
    const dispatch = useDispatch();

    const personajes = useSelector((state) => state.personajes);

    const [buscar, setBuscar] = useState(""); // filtro ""
    const [filtrar, setFiltrar] = useState([]); // []

  

    const handleInput = (e) => {
      setBuscar(e.target.value);
    };

    //Ciclo de vida
    
    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    useEffect(() => {
      if (personajes.length > 0) {
        setFiltrar(personajes.filter((p) => p?.name?.includes(buscar)));
      }
    }, [buscar, personajes]);
    return (
    <>

        <h1>The Rick and Morty</h1>
        <LabelStyled htmlFor="buscar">Buscar: </LabelStyled>
      <InputStyled
       
        id="buscar"
        name="buscar"
        type="search"
        placeholder="Buscar personaje..."
        onChange={handleInput}
      />

                       
          <ContenedorStyled>
         {filtrar.length > 0
         ? filtrar.map((p) => (
          <CardPersonaje key={crypto.randomUUID} {...p} onClose={()=> alert(p.name)} />
          ))            
         : personajes.length > 0 &&
         personajes.map((p) => (
           <CardPersonaje key={crypto.randomUUID} {...p} onClose={()=> alert(p.name)} />               
               ))
            } 
            </ContenedorStyled>
          </>
         )
       }


   const ContenedorStyled= styled.div`
   display:flex;
   flex-direction:row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   align-content: center;  
   background-color: OldLace;
   margin-top: 0px;
   `;    



 
 const LabelStyled = styled.label`
  margin-right: 1rem;
  color: #992b2b;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-left: 1rem;
  
  
  
`;

const InputStyled = styled.input`
  width: 400px;
  height: 30px;  
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 2px solid #e6576e;
  outline: none;
  font-size:13px;
 background-color: #f8d99f;
 
  `;
  