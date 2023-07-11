import React from "react";

const Section = ({ texte, sectionClass }) => {
  return (
    <section className={`section_container section_${sectionClass}`}>
      <h2>{texte}</h2>
    </section>
  );
};

export default Section;
