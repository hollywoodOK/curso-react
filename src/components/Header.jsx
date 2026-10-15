import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegación principal">
        <Link className="navbar-brand" to="/">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span>T de Tienda</span>
        </Link>
        <div className="nav-links">
          <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/productos">
            Productos
          </NavLink>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default Header;
