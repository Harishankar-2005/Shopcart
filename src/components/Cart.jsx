import {FiShoppingCart} from "react-icons/fi";
import Styles from './styles/Cart.module.css'


let Cart = () => {
  return(
    <div className={Styles.cart}>
      <FiShoppingCart/>
      <span>Add to Cart</span>
    </div>
)
}

export default Cart;