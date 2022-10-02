import { applyMiddleware, compose, createStore, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const thunkMiddleware = (store) => (next) => (action) => {
 console.log(action)
    return typeof action === "function"
        ? action(store.dispatch, store.getState)
        : next(action);
};

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store =legacy_createStore(reducer,enhancer);