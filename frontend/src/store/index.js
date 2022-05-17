import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    todoModule: todoReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
