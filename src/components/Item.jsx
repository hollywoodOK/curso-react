import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Item({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link className="product-card-link" to={`/producto/${product.id}`} aria-label={`Ver detalle de ${product.name}`}>
        <div className="product-icon" aria-hidden="true">{product.icon}</div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong className="product-price">${product.price.toLocaleString("es-CL")}</strong>
        </div>
      </Link>
      <button
        className="button button-primary add-button"
        onClick={() => addToCart(product)}
      >
        <span aria-hidden="true">+</span> Agregar al carrito
      </button>
    </article>
  );
}

export default Item;
