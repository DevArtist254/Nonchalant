import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import CartIcon from "../cart-item/cart-icon"
import "./nav.styles.scss"

function Nav({hidden, auth}) {
  const signOut = () => {
    //Clear local storage if their is any token
    localStorage.removeItem("token")
  }

  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <ul className="options">
        <li className="option">
          <Link to="./shop">Shop</Link>
        </li>
        <li className="option">
          <Link to="./about">About</Link>
        </li>
        <li className="option">
          {auth ? (
            <Link
              to="/"
              onClick={() => {
                signOut()
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link to="./register">Sign In</Link>
          )}
        </li>
        <li className="option">
          <CartIcon />
        </li>
        {hidden ? null : <CartDropdown />}
      </ul>
    </div>
  )
}

const mapPropsToDispatch = ({cart: {hidden}}) => ({
  hidden,
})

export default connect(mapPropsToDispatch)(Nav)
