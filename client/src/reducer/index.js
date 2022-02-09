
const initialState = {
    juegos: [],
    allGenres: [],
    juegosFilt: [],
    
    
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_JUEGOS':
            return {
                ...state,
                juegos: action.payload,
                juegosFilt: action.payload
            };
        
        case 'GET_NAME_GAME':
            return {
                ...state, 
                juegos: action.payload

            };

            case 'POST_GAME':
            return {
                ...state,
                
            }
        
        case 'ORDER_BY_NAME':
            let sortArr = action.payload === 'A-Z' ?
                state.juegos.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.juegos.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 11;
                    }
                    return 0;
                })
            return {
                ...state,
                juegos: sortArr
            };

        case 'ORDER_BY_RATING':
            let sortArray = action.payload === 'rat-max' ?
                state.juegos.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return 1;
                    }
                    if (b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                }) :
                state.juegos.sort(function (a, b) {
                    if (a.rating > b.rating) {
                        return -1;
                    }
                    if (b.rating > a.rating) {
                        return 11;
                    }
                    return 0;
                })
            return {
                ...state,
                juegos: sortArray
            };

        case "GET_ALL_GENRES":
            return {
                ...state,
                allGenres: action.payload
            };

            case "FILTER_BY":
                const copyForFilter = [...state.juegosFilt]
                let filteredBy =[];
                let allGenres = [...state.allGenres];

                switch (action.payload){
                    case 'all': filteredBy = copyForFilter; break;
                    case 'created':filteredBy = copyForFilter.filter(e => e.createdInDb); break;
                    case "api": filteredBy = copyForFilter.filter(e => !e.createdInDb); break;
                    default: filteredBy = allGenres.includes(action.payload)
                ? copyForFilter.filter(game => game.genres.some(el => el.name === action.payload))
                : copyForFilter; break;
                }

            return {
                ...state,
                juegos: filteredBy.length === 0 ?[] : filteredBy 
            }
        default:
            return state;
    }
}

export default rootReducer;