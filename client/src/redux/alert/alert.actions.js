import ADD_ALERT from "./alert.types"

export const setAlert = (msg, alertType) => (dispatch) => {
  dispatch({
    type: ADD_ALERT,
    payLoad: {msg, alertType},
  })
}
