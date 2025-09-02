import { combineReducers } from "redux";
import { CounteReducer } from "../Counter_redux/Reducer";
import { myReducer } from "./Reducer";
export const Rootreducer = combineReducers({
    counter: CounteReducer,
    todo:myReducer
});
