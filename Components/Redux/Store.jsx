import { configureStore } from "redux";
import { counterReducer } from "./Reducer";
const Store =  configureStore(counterReducer)