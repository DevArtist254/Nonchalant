//bring in react router dom and set it up
import {connect} from "react-redux"
import axios from "axios"
import {getHomeData} from "./redux/home/home.actions"
import {loadUser} from "./redux/user/user.actions"
import React from "react"
import {Component} from "react"
import {Switch, Route} from "react-router-dom"

import Homepage from "./pages/homepage/homepage"
import Nav from "./components/nav/nav"
import Registers from "./pages/register/register"
import Shop from "../src/pages/shop/shop"
import CheckoutPage from "./pages/checkout/checkout"

class App extends Component {
  unsub = null
  token = null

  async componentDidMount() {
    const {loadUser, getHomeData} = this.props

    this.token = localStorage.getItem("token")

    try {
      const res = await axios.get("http://localhost:5000/api/homeData")

      this.unsub = getHomeData(res.data)

      loadUser(this.token)
    } catch (error) {
      console.log(error)
    }
  }

  componentWillUnmount() {
    this.unsub = null
  }

  render() {
    return (
      <div>
        <Nav auth={this.props.isAuthenticated} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Registers} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
})

export default connect(mapStateToProps, {getHomeData, loadUser})(App)
