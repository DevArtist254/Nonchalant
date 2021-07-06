import {SET_HOMEDATA} from "./home.types"

const INIT_STATE = {
  homeData: [],
}

const homeReducer = (state = INIT_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_HOMEDATA:
      return {
        //old update
        ...state,
        //new update
        homeData: payload,
      }
    default:
      return state
  }
}

export default homeReducer
