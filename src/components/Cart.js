import { useDispatch, useSelector } from "react-redux";
import ItemList from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatcher = useDispatch();
  const clear = () => {
    dispatcher(clearCart());
  };
  return (
    <div className='w-6/12 mx-auto mt-5 text-center'>
      <span className='font-bold text-2xl'>Cart</span>
      <button className='bg-black text-white p-2 ml-2' onClick={() => clear()}>
        {" "}
        Clear Cart
      </button>
      <ItemList items={cartItems} page='cart'></ItemList>
    </div>
  );
};

export default Cart;
