import {connect} from "react-redux"
import {clearItem, reduceItem, addItem} from "../../redux/cart/cart.actions"
// import {selectCartItems} from "../../redux/cart/cart.selector"
// import {createStructuredSelector} from "reselect"
import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem, removedItem, reduceItem, addItem}) => {
  const {name, imageUrl, price, quantity} = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container ">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => reduceItem(cartItem)}>
          {" "}
          &#10094;{" "}
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          {" "}
          &#10095;{" "}
        </span>
      </span>
      <span className="price">$ {price}</span>
      <span className="remove-button " onClick={() => removedItem(cartItem)}>
        {" "}
        &#10005;{" "}
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removedItem: (item) => dispatch(clearItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
