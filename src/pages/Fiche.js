import React from "react";
import { useParams } from "react-router-dom";
import Data from "../donnees/annonces.json";
import Header from "../components/Header/Header";

import Carousel from "../components/Carousel/Carousel";
import Collapse from "../components/Collapse/Collapse";
import Label from "../components/Label/Label";

import Footer from "../components/Footer/Footer";
import Stars from "../components/Stars/Stars";

const Fiche = () => {
  const { id } = useParams();
  const data_id = Data.find((x) => x.id === id);

  if (!data_id) return (window.location.href = "/error");
  return (
    <div>
      <main>
        <Header />

        <Carousel images={data_id.pictures} />

        <div className="description-container">
          <div className="description-content">
            <div className="description-titre">
              <h2>{data_id.title}</h2>
              <span>{data_id.location}</span>
            </div>

            <div className="description-label">
              {data_id.tags.map((value, index) => {
                return <Label key={index} content={value} />;
              })}
            </div>
          </div>

          <div className="description-content-host">
            <div className="description-host">
              <span>{data_id.host.name}</span>
              <img src={data_id.host.picture} alt="Host" />
            </div>

            <div className="description_stars">
              <Stars rating={data_id.rating} />
            </div>
          </div>
        </div>

        <div className="collapses-container">
          <Collapse title="Description">{data_id.description}</Collapse>

          <Collapse title="Equipements">
            <ul className="equipments-list">
              {data_id.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fiche;
