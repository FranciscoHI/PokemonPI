import React, {useEffect} from 'react'
import { getCharacterId } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import styled  from 'styled-components';
import { useParams } from 'react-router-dom';


 const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const personaje = useSelector((state) => state.personaje);  
  
  
  useEffect(() => {
    dispatch(getCharacterId((params.id)));
    }, [dispatch, params.id]);


  return (
    <CardStyled>
<h3>Hola soy el Detalle!</h3>
{personaje? (
<div>

  <img src={personaje?.image} alt={personaje?.name} />
  <h5>Id: {personaje?.id}</h5>  
  <h5>Name: {personaje?.name}</h5>
  <h5>Status: {personaje?.status}</h5>
  <h5>Species: {personaje?.species}</h5>
  <h5>Gender: {personaje?.gender}</h5>
  <h5>Origen: {personaje?.origin}</h5>
  <h5>Location: {personaje?.location}</h5>
  
</div>
) : (
<img src='https://acegif.com/wp-content/uploads/loading-4.gif' alt='loading' />

)}
 
 </CardStyled>  
  

  )
  
};

export default Details;


const CardStyled = styled.div`
display: flex;
flex-direction: column;
width: 400px;
margin: 40px auto;

box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
border-radius:5px;
padding: 8px;




cursor: pointer;
&:hover {
    transform:scale(1.1);
}
`
