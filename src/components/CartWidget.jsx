import { NavLink } from "react-router-dom";
import { useCart } from "../context/useCart";

function CartWidget() {
  const { cartCount } = useCart();
  const productLabel = cartCount === 1 ? "producto" : "productos";

  return (
    <NavLink
      className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      to="/carrito"
      aria-label={`Carrito, ${cartCount} ${productLabel}`}
    >
      Carrito <span className="cart-count">{cartCount}</span>
    </NavLink>
  );
}

export default CartWidget;
