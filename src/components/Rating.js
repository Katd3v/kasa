import React from "react";

const Rating = ({ rating }) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src="/star-red.png" alt="Étoile pleine" />);
  }

  for (let i = 0; i < maxRating - rating; i++) {
    stars.push(<img key={rating + i} src="/star-gray.png" alt="Étoile vide" />);
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
