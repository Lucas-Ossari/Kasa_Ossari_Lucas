import React from "react";

import { NavLink } from "react-router-dom";

import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";

import data from "../donnees/annonces.json";

const Accueil = () => {
  return (
    <div>
      <main>
        <Header />
        <Section
          texte="Chez vous, partout et ailleurs"
          sectionClass="accueil"
        />

        <section className="cards-container">
          <div className="cards-content">
            {data.map((value, index) => {
              return (
                <NavLink
                  key={index}
                  to={`fiche/${value.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Card coverURL={value.cover} title={value.title} />
                </NavLink>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accueil;
