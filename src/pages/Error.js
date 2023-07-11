import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Error = () => {
  return (
    <div>
      <main>
        <Header />
        <div className="error-container">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <a href="/">Retourner sur la page d’accueil</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
