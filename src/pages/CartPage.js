import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <p>Cart is empty</p> :
        <>
          {cartItems.map(item => <CartItem key={item.id} item={item} />)}
          <h2>Total: ₹{total}</h2>
        </>
      }
    </div>
  );
};

export default CartPage;
