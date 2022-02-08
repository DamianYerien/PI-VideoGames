


const initialState = {
    juegos : []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_JUEGOS':
            return{
                ...state,
                juegos : action.payload
            }
        case 'FILTER_GENRE':
            const allGames = state.juegos;
            const statusFiltered = 0; // ver como hacer
        return{

        }
            default:
                return state;
    }
}

export default rootReducer;