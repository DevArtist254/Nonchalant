import ADD_ALERT from "./alert.types"

const initState = {}

const alertReducer = (state = initState, actions) => {
  const {type, payload} = actions

  switch (type) {
    case ADD_ALERT:
      return {...state, payload}
    default:
      return state
  }
}

export default alertReducer
