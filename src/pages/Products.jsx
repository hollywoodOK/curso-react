import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

function Products() {
  const { products, loading, error } = useProducts();

  return (
    <main className="container page-content">
      <div className="section-heading">
        <p className="eyebrow">NUESTRA SELECCIÓN</p>
        <h1>Productos</h1>
        <p>Encuentra tus favoritos y agrégalos al carrito.</p>
      </div>
      {loading && <p className="status-message">Cargando productos...</p>}
      {error && <p className="status-message error-message" role="alert">{error}</p>}
      {!loading && !error && <ProductList products={products} />}
    </main>
  );
}

export default Products;
