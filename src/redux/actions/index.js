import axios from "axios";

export const GET_ALL_CHARACTER = "GET_ALL_CHARACTER";
export const GET_CHARACTER_ID = "GET_CHARACTER_ID";

const API_URL = "https://rickandmortyapi.com/api/character";
const API_URL2 = "https://rickandmortyapi.com/api/character";

export const getAll = () => async (dispatch) => {
  try {
    const { data } = await axios.get(API_URL);

    const personajes = [];
    for (const personaje of data?.results) {
      const { data } = await axios.get(personaje?.url);
      const p = {
        id: data?.id,
        name: data?.name,
        image: data?.image,
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

export const getCharacterId = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL2}/${id}`);
    console.log("data", data);
    const personaje = {
      id: data?.id,
      name: data?.name,
      image: data?.image,
      species: data?.species,
      status: data?.status,
      gender: data?.gender,
      origin: data?.origin?.name,
      location: data?.location.name,
    };
    dispatch({
      type: "GET_CHARACTER_ID",
      payload: personaje,
    });
  } catch (error) {
    return console.log(error);
  }
};
