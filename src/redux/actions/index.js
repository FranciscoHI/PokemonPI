import axios from "axios";

export const GET_ALL_CHARACTER = "GET_ALL_CHARACTER";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getAll = () => async (dispatch) => {
  try {
    const {data} = await axios.get(API_URL);

    const personajes = [];
    for (const personaje of data?.results) {
      const {data} = await axios.get(personaje?.url);
      const p = {
        id: data?.id,
        name: data?.name,
        image: data?.image
        //species:data?.species,
        //status: data?.status,
       
      };
      personajes.push(p);
    }
    dispatch({
      type: "GET_ALL_CHARACTER",
      payload: personajes,
    });
  } catch (error) {
    return console.log(error);
  }
};
