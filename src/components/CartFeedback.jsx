import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function CartFeedback() {
  const { feedback, setFeedback } = useCart();

  useEffect(() => {
    if (!feedback) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setFeedback(null), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [feedback, setFeedback]);

  if (!feedback) {
    return null;
  }

  return (
    <div className="cart-feedback" role="status" aria-live="polite">
      <span className="feedback-check" aria-hidden="true">✓</span>
      <div className="feedback-copy">
        <strong>Agregado al carrito</strong>
        <span>{feedback.productName}</span>
      </div>
      <Link className="feedback-link" to="/carrito" onClick={() => setFeedback(null)}>
        Ver carrito
      </Link>
      <button
        className="feedback-close"
        type="button"
        aria-label="Cerrar aviso"
        onClick={() => setFeedback(null)}
      >
        x
      </button>
    </div>
  );
}

export default CartFeedback;
