import React from "react";
import { Link } from "react-router-dom";  
import "../Style/Auth.css";

export default function Auth() {
  return (
    <div className="auth-container">
      <h2>Connexion</h2>
      <form>
        <label>Nom d'utilisateur :</label>
        <input type="text" placeholder="Entrez votre nom" />

        <label>Mot de passe :</label>
        <input type="password" placeholder="Entrez votre mot de passe" />

        <button type="submit">Se connecter</button>
      </form>

      <div className="auth-footer">
        <p>
          Pas encore inscrit ?{" "}
          <Link to="/register">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
}
