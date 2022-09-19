import React, {useEffect } from 'react'
import CardPersonaje from "../Card/CardPersonaje";
import {getAll} from '../../redux/actions/index';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'


export default function Personajes() {
    const dispatch = useDispatch();

    const personajes = useSelector((state) => state.personajes);

    //Ciclo de vida
    
    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);


    return (
    <>
         <TitleStyled>
          <h1>The Rick and Morty</h1>
          </TitleStyled>
                   
          <ContenedorStyled>
         {personajes.length > 0 &&
         personajes.map((p) => (
           <CardPersonaje key={crypto.randomUUID} {...p} />               
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
   `;    


  const TitleStyled = styled.h1`
  text-align:center;    
  background-color: OldLace;
  `