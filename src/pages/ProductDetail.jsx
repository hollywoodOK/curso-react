import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useProducts } from "../hooks/useProducts";

function ProductDetail() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const product = products.find((item) => String(item.id) === id);

  if (loading) {
    return <main className="container page-content"><p className="status-message">Cargando producto...</p></main>;
  }

  if (error) {
    return <main className="container page-content"><p className="status-message error-message" role="alert">{error}</p></main>;
  }

  if (!product) {
    return (
      <main className="container page-content">
        <div className="empty-cart">
          <h1>Producto no encontrado</h1>
          <p>Ese producto no está en nuestro catálogo.</p>
          <Link className="button button-primary" to="/productos">Volver a productos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container page-content">
      <Link className="back-link" to="/productos">← Volver a productos</Link>
      <article className="detail-card">
        <div className="detail-icon" aria-hidden="true">{product.icon}</div>
        <div className="detail-info">
          <p className="eyebrow">DETALLE DEL PRODUCTO</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <strong className="detail-price">${product.price.toLocaleString("es-CL")}</strong>
          <button className="button button-primary" onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </article>
    </main>
  );
}

export default ProductDetail;
