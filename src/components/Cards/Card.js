import React from "react";

const Card = ({ coverURL, title }) => {
  return (
    
    <article className="card-case">
      <img src={coverURL} alt="" />
      <div className="card-content">
        <span>{title}</span>
      </div>
    </article>
   
  );
};

export default Card;
