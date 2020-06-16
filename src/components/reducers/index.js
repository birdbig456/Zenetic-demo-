import { combineReducers } from "redux";
import addressReducer from "./Address.reducer"
import addDepartReducer from "./AddDepart.reducer"
import addPositionReducer from "./AddPosition.reducer"
export default combineReducers({addressReducer,addDepartReducer,addPositionReducer})