import { combineReducers } from "redux";
import robots from "./store/robots/reducer";

export default combineReducers({
    robots: robots
});