let initialState = {
    momentumData: {},
    momentumIndex: {},
}

function momentumReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case "GET_MOMENTUM_DATA":
            return {
                ...state, 
                momentumData: payload.momentumData,
                momentumIndex: payload.momentumIndex,
            };
            default:
            return {...state};
    }
    
}

export default momentumReducer;