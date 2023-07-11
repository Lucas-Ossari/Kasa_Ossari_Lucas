import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {images.map((value, index) => {
          return (
            <div
              key={index}
              className="carousel-img"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              <img src={value} alt={index + 1} />
            </div>
          );
        })}

        {images.length > 1 && (
          <div className="carousel-nav">
            <div className="carousel-nav-arrow">
              <span className="carousel-nav-arrow-left" onClick={prevClick}>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                </svg>
              </span>
              <span className="carousel-nav-arrow-right" onClick={nextClick}>
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                </svg>
              </span>
            </div>
            <div className="carousel-counter">
              {currentIndex + 1}/{images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
