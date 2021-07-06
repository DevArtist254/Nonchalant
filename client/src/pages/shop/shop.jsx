import {Component} from "react"
import {Route} from "react-router-dom"
import withSpinner from "../../components/spinnerHOC/spinner.HOC"

import {connect} from "react-redux"
import {startDataFecthing} from "../../redux/shopData/data.actions"
import {createStructuredSelector} from "reselect"
import {
  isDataFecthing,
  isCollectionLoaded,
} from "../../redux/shopData/data.selector"

import CollectionsOverview from "../../components/collections/collections-overview"
import Collection from "../collection/collection"

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionWithSpinner = withSpinner(Collection)

class Shop extends Component {
  componentDidMount() {
    const {startDataFecthing} = this.props
    startDataFecthing()
  }

  render() {
    const {match, loading, loaded} = this.props
    console.log(loading)
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:catergoryId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={!loaded} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loading: isDataFecthing,
  loaded: isCollectionLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  startDataFecthing: () => dispatch(startDataFecthing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
