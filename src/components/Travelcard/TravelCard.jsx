import React from 'react';
import './TravelCard.css';

const TravelCard = ({ destination, description, imageUrl, duration, rating }) => {
  return (
    <div className="travel-card">
      <div className="travel-card-image">
        <img src={imageUrl} alt={destination} />
      </div>
      <div className="travel-card-content">
        <h3 className="travel-card-title">{destination}</h3>
        <p className="travel-card-description">{description}</p>
        
        <div className="travel-card-details">
          <span className="travel-card-duration">⏱️ {duration}</span>
          <span className="travel-card-rating">⭐ {rating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;