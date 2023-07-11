import React from "react";

const Stars = ({ rating }) => {
  const getStars = () => {
    const stars = [];
    const starSize = "2.5rem";
    const starColor = "#ff6060";

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} style={{ fontSize: starSize, color: starColor }}>
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} style={{ fontSize: starSize, color: starColor }}>
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div>
      <div>
        <div>{getStars()}</div>
      </div>
    </div>
  );
};

export default Stars;
