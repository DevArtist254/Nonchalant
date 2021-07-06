import {createSelector} from "reselect"

export const selectUsers = (state) => state.user

export const selectCurrentUser = createSelector(
  [selectUsers],
  (user) => user.currentUser
)
