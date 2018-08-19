import { combineReducers } from "redux";
import robots from "./store/robots/reducer";
import currentFilter from "./store/current-filter/reducer";

export default combineReducers({
    robots: robots,
    currentFilter: currentFilter
});