import axios from 'axios';


export function getGames() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: 'GET_JUEGOS',
            payload: json.data
        })
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload
    }
}

export function getAllGenres() {
    return async (dispatch) => {
        let json = await axios.get('http://localhost:3001/genres')
        return dispatch({
            type: "GET_ALL_GENRES",
            payload: json.data.map(genre => genre.name),
        })
    }
}

export function filterBy(payload) {
    return {
        type: "FILTER_BY",
        payload
    }
}

export function getName(name) {
    return async function (dispatch) {
        try {
            var gameName = await axios.get('http://localhost:3001/videogames?name=' + name);
            return dispatch({
                type: 'GET_NAME_GAME',
                payload: gameName.data //.slice(0, 15)
            })
        }
        catch (error) {
            return error
        }
    }
}

export function postGame(payload) {
    return async (dispatch) => {
        let response = await axios.post('http://localhost:3001/videogameSum', payload)
        return response
    }
}