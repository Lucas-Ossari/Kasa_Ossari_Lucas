import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";

import Mentions from "../donnees/mentions.json";

const About = () => {
  return (
    <div>
      <main>
        <Header />
        <Section texte="" sectionClass="about" />

        <section className="collapses-container-about">
          {Mentions.map((mention, index) => (
            <Collapse key={index} title={mention.title}>
              {mention.content}
            </Collapse>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
