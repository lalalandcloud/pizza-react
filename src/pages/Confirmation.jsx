import { Link } from "react-router-dom";
import "./confirmation.css";

export default function Confirmation() {
  return (
    <div className="confirmation-container text-center p-4">
      <h2>Merci pour votre commande !</h2>
      <p>Votre pizza arrive bientôt.</p>
      <Link to="/" className="btn btn-success mt-3">
        Retour à l'accueil
      </Link>
    </div>
  );
}
