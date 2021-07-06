import CollectionItem from "../collections-item/collections-item"
import "./collections.styles.scss"

const Collections = (data) => {
  const {title, items} = data.data
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Collections
