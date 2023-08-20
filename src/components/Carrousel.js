import React, { useState } from "react";

const Carrousel = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.lenght - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.lenght - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`Image de l'appartement ${title}`}
      />
      {images.lenght > 1 && (
        <div>
          <button onClick={handlePreviousImage}>
            <img
              className="arrow-left"
              src="./arrow_left.png"
              alt="Précédent"
            />
          </button>
          <span>
            {currentImageIndex + 1}/{images.length}
          </span>
          <button onClick={handleNextImage}>
            <img
              className="arrow-right"
              src="./arrow_right.png"
              alt="Suivante"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
