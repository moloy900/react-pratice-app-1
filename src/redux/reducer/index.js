import { combineReducers } from "redux";
import CounterReducer from "./reducer";

const rootReducer = combineReducers({
  CounterReducer,
});

export default rootReducer