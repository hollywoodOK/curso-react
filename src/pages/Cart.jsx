import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="container page-content">
      <div className="section-heading">
        <p className="eyebrow">TU COMPRA</p>
        <h1>Carrito</h1>
        <p>Revisa los productos que elegiste.</p>
      </div>
      {cart.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">🛍️</span>
          <h2>Tu carrito está esperando</h2>
          <p>Aún no has agregado productos. Puedes encontrar algo que te guste en nuestra tienda.</p>
          <Link className="button button-primary" to="/productos">Ver productos</Link>
        </section>
      ) : (
        <section className="cart-panel" aria-label="Productos en el carrito">
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li className="cart-item" key={`${item.id}-${index}`}>
                <span className="cart-item-icon" aria-hidden="true">{item.icon}</span>
                <span className="cart-item-name">{item.name}</span>
                <strong>${item.price.toLocaleString("es-CL")}</strong>
                <button className="remove-button" onClick={() => removeFromCart(index)} aria-label={`Quitar ${item.name} del carrito`}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total ({cart.length} {cart.length === 1 ? "producto" : "productos"})</span>
            <strong>${total.toLocaleString("es-CL")}</strong>
          </div>
          <Link className="button button-secondary" to="/productos">Seguir explorando</Link>
        </section>
      )}
    </main>
  );
}

export default Cart;
