import {createStore, applyMiddleware} from "redux"
import {persistStore} from "redux-persist"

import thunk from "redux-thunk"

import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./rootReducer"

const initState = {}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
