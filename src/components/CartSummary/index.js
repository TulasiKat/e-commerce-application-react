// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.map(each => {
        totalPrice += each.price * each.quantity
        return totalPrice
      })
      console.log('summary')
      return (
        <>
          <h1 className="summary-heading">
            Order Total:{' '}
            <span className="summary-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="summary-para">
            {cartList.length} {cartList.length > 1 ? 'items' : 'item'} in cart
          </p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
