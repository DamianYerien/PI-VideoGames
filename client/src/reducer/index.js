


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
            default:
                return state;
    }
}

export default rootReducer;