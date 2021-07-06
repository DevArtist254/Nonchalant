import {START_FETCH_DATA} from "./data.types"
import {FAIL_FETCH_DATA} from "./data.types"
import {SUCCESS_FETCH_DATA} from "./data.types"

const INIT_STATE = {
  isFecthing: false,
  shopDatas: null,
  errorMessage: undefined,
}

const shopReducer = (state = INIT_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case START_FETCH_DATA:
      return {
        ...state,
        isFecthing: true,
      }
    case SUCCESS_FETCH_DATA:
      return {
        ...state,
        isFecthing: false,
        shopDatas: payload,
      }
    case FAIL_FETCH_DATA:
      return {
        ...state,
        isFecthing: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}

export default shopReducer
