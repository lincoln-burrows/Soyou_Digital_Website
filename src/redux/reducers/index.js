import { combineReducers } from "redux";
import momentumReducer from "./momentumReducer";
import legacyReducer from "./legacyReducer";

export default combineReducers({
    momentumData : momentumReducer, 
    legacy : legacyReducer,
})