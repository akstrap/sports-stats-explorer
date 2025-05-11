import { useState } from "react";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import SearchBar from "./src/components/SearchBar";
import PlayerCard from "./src/components/PlayerCard";
import React from "react";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Header />
      <Hero />
      <SearchBar onSelect={setSelectedPlayer} />
      {selectedPlayer && <PlayerCard name={selectedPlayer} />}
    </div>
  );
}

export default App;
