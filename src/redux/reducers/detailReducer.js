const INITIAL_STATE = {
    details: {},
}


export const detailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_DETAIL":
            return {...state, details: action.payload}
       
        default:
            return state
    }
}