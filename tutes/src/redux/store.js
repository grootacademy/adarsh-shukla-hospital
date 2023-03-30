import { legacy_createStore } from "redux";
import addReducer from "./reducer";

export default legacy_createStore(addReducer, {})