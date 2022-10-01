import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";


// const thunkMiddleware = (store) => (next) => (action) => {
//     return typeof action === "function"
//         ? action(store.dispatch, store.getState)
//         : next(action);
// };

// const composeEnhancers =
//     (typeof window !== "undefined" &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export const store = createStore(reducer);