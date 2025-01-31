import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/Redux/cartSlice";


const Cart = () => {
   
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store?.cart?.items)
   
  
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="text-center m-10 p-10">
          <h1 className="font-bold text-2xl">Cart</h1>
          <div>
            <button className="m-4 p-3 font-bold bg-black text-white rounded-lg"
               onClick={handleClearCart}
            >
                Clear Cart
                </button>
            {cartItems && cartItems?.length > 0 ? (
              <ItemList items={cartItems} />
            ) : (
              <p className="font-bold text-2xl">Cart is empty. Add Items to the Card</p>
            )}
          </div>
        </div>
      );
      
};


export default Cart;