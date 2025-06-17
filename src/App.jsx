import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import TravelCard from './components/Travelcard/TravelCard';
import travelCardsData from './components/Travelcard/TravelCardData';
import "./App.css";
import Video from '/Videos/bali.mp4';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cards-grid">
        {travelCardsData.map(card => (
          <TravelCard key={card.id} {...card} />
        ))}
      </div>
        <VideoPlayer
        src={Video}
        title="My Bali Adventure"
        description="Beautiful sunset at Uluwatu Beach during our summer trip"
      />
      <Footer />
    </div>
  );
}

export default App;
