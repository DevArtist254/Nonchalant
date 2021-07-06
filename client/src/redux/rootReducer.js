import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/user.redux"
import homeReducer from "./home/home.redux"
import shopReducer from "./shopData/data.redux"
import cartReducer from "./cart/cart.reducer"

const config = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const rootReducer = combineReducers({
  users: userReducer,
  home: homeReducer,
  cart: cartReducer,
  shop: shopReducer,
})

export default persistReducer(config, rootReducer)
