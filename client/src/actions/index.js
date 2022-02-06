import axios from 'axios';


export function getGames(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: 'GET_JUEGOS',
            payload: json.data
        })
    }
}