import React from "react";
import styled from "styled-components"


export default function CardPersonaje({ id, name,species,status, image,onClose}) {

    return(
        <CardStyled>     
        <ButtonStyled onClick={onClose}> X </ButtonStyled>   
        <ImageStyled src={image} alt={name}></ImageStyled>
        <TitleStyled>               
        {id}: {name}
       </TitleStyled>
        </CardStyled>

    )
}


const CardStyled = styled.div`
display: flex;
flex-direction: column;
width: 230px;
margin:1rem;
margin-left: 1rem;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
border-radius:5px;
padding: 8px;


cursor: pointer;
&:hover {
    transform:scale(1.1);
}
`
const ButtonStyled = styled.button`
border-radius: 5px;
margin-bottom: 5px; 
background-color: #e6576e;
color: white;
border: none;
width: 30px;

&:hover{
    background-color: red;
}

`



const TitleStyled = styled.h1`
font-size: 1rem;
text-align: center;
`


const ImageStyled = styled.img`
object-fit: cover;
width: 230px;

`