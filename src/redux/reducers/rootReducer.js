const initialState = {
  modalOn: false,
  momentumUpperButton:"1",
  momentumLowerButton:"1",
  stableUpperButton:"1",
  stableLowerButton:"1"
};

const rootReducer = (state = initialState, action) => {
    console.log("action은 뭘까?", action);
  switch (action.type) {
    case "SET_MODAL_OFF":
      return { ...state, modalOn: false };
    case "SET_MODAL_ON":
      return { ...state, modalOn: true };
    case "MOMENTUM_PROFIT":
      return { ...state, momentumUpperButton: "1"};
    case "MOMENTUM_INFO":
      return { ...state, momentumUpperButton: "2"};        
    case "MOMENTUM_ALL":
      return { ...state, momentumLowerButton: "1" };
    case "MOMENTUM_1Y":
      return { ...state, momentumLowerButton: "2"};
    case "MOMENTUM_6M":
      return { ...state, momentumLowerButton: "3" };
    case "MOMENTUM_3M":
      return { ...state, momentumLowerButton: "4" };
    case "STABLE_PROFIT":
      return { ...state, stableUpperButton: "1"};
    case "STABLE_INFO":
      return { ...state, stableUpperButton: "2"};        
    case "STABLE_ALL":
      return { ...state, stableLowerButton: "1" };
    case "STABLE_1Y":
      return { ...state, stableLowerButton: "2"};
    case "STABLE_6M":
      return { ...state, stableLowerButton: "3" };
    case "STABLE_3M":
      return { ...state, stableLowerButton: "4" };
    default:
      return {...state};
  }
};

export default rootReducer;