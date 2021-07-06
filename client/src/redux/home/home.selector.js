import {createSelector} from "reselect"

export const selectHome = (state) => state.home

export const selectDirectory = createSelector(
  [selectHome],
  (home) => home.homeData
)
