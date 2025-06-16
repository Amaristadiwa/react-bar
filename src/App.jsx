import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import TravelCard from "../src/components/Travelcard";
import travelCardsData from "../src/components/Travelcard/TravelCardData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {travelCardsData.map(card => (
          <TravelCard
            key={card.id}
            destination={card.destination}
            description={card.description}
            imageUrl={card.imageUrl}
            duration={card.duration}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;