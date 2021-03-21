import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { eatReducer } from "./testReducer"

const rootReducer = combineReducers({
    eat: eatReducer
})

export type RootState = ReturnType<typeof rootReducer>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export default store