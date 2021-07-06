import {SET_HOMEDATA} from "./home.types"

export const getHomeData = (items) => async (dispatch) => {
  dispatch({
    type: SET_HOMEDATA,
    payload: items,
  })
}
