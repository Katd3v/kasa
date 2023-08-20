import React, { useState } from "react";

const Carrousel = ({ appartement }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === appartement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? appartement.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-carrousel">
      <img
        className="image-appartement"
        src={appartement.pictures[currentImageIndex]}
        alt={`Image de l'appartement ${appartement.title}`}
      />
      {appartement.pictures.length > 1 && (
        <div>
          <div className="buttons">
            <button onClick={handlePreviousImage}>
              <img src="/arrow_left.png" alt="Précédent" />
            </button>
            <button onClick={handleNextImage}>
              <img src="/arrow_right.png" alt="Suivante" />
            </button>
          </div>
          <div>
            <span>
              {currentImageIndex + 1}/{appartement.pictures.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
