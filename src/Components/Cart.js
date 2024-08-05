import React from 'react';
import ItemList from './ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Utils/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(clearCart());
    toast.success("Cart deleted successfully");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.card.info.price ? parseInt(item.card.info.price / 100) : parseInt(item.card.info.defaultPrice / 100);
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="flex gap-10 bg-[#E8E4C9] mt-5">
      <div className="w-full max-w-3xl p-6 bg-white text-center rounded-lg shadow-lg ml-[15%]">
        <h1 className="font-bold text-3xl mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="mt-6 text-xl font-semibold">No items in the cart.</p>
        ) : (
          <div>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg mt-2 hover:bg-red-700 transition duration-300"
              onClick={handleDelete}
            >
              Clear Cart
            </button>
            <div className="w-full mt-4 p-4 bg-[#F5F5DC] rounded-md shadow-md">
              <ItemList items={cartItems} incart={true} />
            </div>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className='bg-white rounded-md w-[20vw] text-center p-4 flex flex-col justify-start items-center shadow-lg self-start'>
          <h1 className='font-semibold text-2xl mt-2 border-b-2 border-zinc-300 pb-2'>Bill Amount</h1>
          {cartItems.map((item, index) => {
            const price = item.card.info.price ? parseInt(item.card.info.price / 100) : parseInt(item.card.info.defaultPrice / 100)
            return (
            <div key={index} className='flex justify-between w-full my-2 text-zinc-400'>
              <span>{item.quantity}x {price}</span>
              <span className='text-black font-medium'>{item.quantity * price}</span>
            </div>);
            })}
          <div className='flex justify-between w-full mt-4 text-lg font-bold border-t-2 border-zinc-300 pt-2'>
            <span>Total:</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
