import {connect} from "react-redux"
import CollectionItem from "../../components/collections-item/collections-item"
import {selectCollection} from "../../redux/shopData/data.selector"
import "./collection.styles.scss"

const Collection = ({collection}) => {
  const {title, items} = collection
  console.log(collection)
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.catergoryId)(state),
})

export default connect(mapStateToProps)(Collection)
