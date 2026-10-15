import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="container home-content">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">OBJETOS PARA DISFRUTAR CADA DÍA</p>
          <h1>Pequeños detalles,<br />grandes momentos.</h1>
          <p className="hero-description">
            Una selección simple de cosas útiles y bonitas para acompañar tu rutina.
          </p>
          <Link className="button button-primary" to="/productos">Explorar productos <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="hero-sparkle sparkle-one">☆</span>
          <span className="hero-emoji">☕</span>
          <span className="hero-sparkle sparkle-two">☆</span>
          <span className="hero-caption">cosas que hacen bien</span>
        </div>
      </section>
      <section className="welcome-note">
        <span aria-hidden="true">★</span>
        <p>Compra fácil, sin complicaciones. Agrega tus favoritos al carrito y revisa tu selección cuando quieras.</p>
      </section>
    </main>
  );
}

export default Home;