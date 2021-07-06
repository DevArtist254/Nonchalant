import {START_FETCH_DATA} from "./data.types"
import {SUCCESS_FETCH_DATA} from "./data.types"
import {FAIL_FETCH_DATA} from "./data.types"
import {collectionsToMap} from "../../db/db.utilis"
import axios from "axios"

export const startGettingData = () => ({
  type: START_FETCH_DATA,
})

export const successDataFetching = (data) => ({
  type: SUCCESS_FETCH_DATA,
  payload: data,
})

export const failDataFetching = (errorMessage) => ({
  type: FAIL_FETCH_DATA,
  payload: errorMessage,
})

export const startDataFecthing = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:5000/api/data")
      dispatch(startGettingData())
      const currentData = collectionsToMap(res.data)
      dispatch(successDataFetching(currentData))
    } catch (error) {
      dispatch(failDataFetching(error.message))
    }
  }
}
