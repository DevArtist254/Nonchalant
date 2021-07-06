import "./cart-item.styles.scss"

const CartItems = ({item: {imageUrl, name, price, quantity}}) => (
  <div className="cart-item">
    <img alt={name} src={imageUrl} className="img" />
    <div className="item-details">
      <h2 className="name">{name}</h2>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
)
export default CartItems
