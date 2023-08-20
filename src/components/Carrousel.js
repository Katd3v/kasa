import React, { useState } from "react";

const Carrousel = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-carrousel">
      <img
        className="image-appartement"
        src={images[currentImageIndex]}
        alt={`Image de l'appartement ${title}`}
      />
      {images.length > 1 && (
        <div>
          <div className="buttons">
            <button className="button-left" onClick={handlePreviousImage}>
              <img src="./arrow_left.png" alt="Précédent" />
            </button>
            <button className="button-right" onClick={handleNextImage}>
              <img src="./arrow_right.png" alt="Suivante" />
            </button>
          </div>
          <div>
            <span>
              {currentImageIndex + 1}/{images.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
