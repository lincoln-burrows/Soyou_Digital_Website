const initialState = {
  modalOn: false,
};

const rootReducer = (state = initialState, action) => {
    console.log("action은 뭘까?", action);
  switch (action.type) {
    case "SET_MODAL_OFF":
      return { ...state, modalOn: false };
    case "SET_MODAL_ON":
      return { ...state, modalOn: true };
    default:
      return {...state};
  }
};

export default rootReducer;