import { thunk } from "redux-thunk"
import { rootReducer } from "./reducer"
import { createStore, applyMiddleware } from 'redux'


export const configurestore =() =>{
    const store = createStore(rootReducer, applyMiddleware(thunk))

    return store
}