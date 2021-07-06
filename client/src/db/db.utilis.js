//export const userAuth = () => {}
export const collectionsToMap = (collections) => {
  const transformedCollections = collections.map((collection) => {
    const {title, items} = collection

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: collection._id,
      title,
      items,
    }
  })

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}
