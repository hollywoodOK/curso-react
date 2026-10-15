import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [feedback, setFeedback] = useState(null);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
    setFeedback((currentFeedback) => ({
      productName: product.name,
      id: currentFeedback ? currentFeedback.id + 1 : 1,
    }));
  }

  function removeFromCart(productIndex) {
    setCart((currentCart) => currentCart.filter((_, index) => index !== productIndex));
  }

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, feedback, setFeedback }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
