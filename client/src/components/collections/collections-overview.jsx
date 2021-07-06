import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCollections} from "../../redux/shopData/data.selector"
import Collections from "./collections"

import "./collections.styles.scss"

const CollectionsOverview = ({data}) => {
  return (
    <div className="shop-page">
      {data.map((data) => (
        <Collections key={data.id} data={data} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)
