import {createSelector} from "reselect"

export const selectData = (state) => state.shop

export const selectShop = createSelector([selectData], (shop) => shop.shopDatas)

export const selectCollections = createSelector([selectShop], (shopDatas) =>
  shopDatas ? Object.keys(shopDatas).map((keys) => shopDatas[keys]) : []
)

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShop], (shopDatas) =>
    shopDatas ? shopDatas[collectionUrlParam] : null
  )

export const isDataFecthing = createSelector(
  [selectData],
  (shop) => shop.isFecthing
)

export const isCollectionLoaded = createSelector(
  [selectData],
  (shop) => !!shop.shopDatas
)
