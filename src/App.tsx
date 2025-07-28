import React from "react";
import { useState, useEffect } from "react";
import allAnimals, { Animal } from "./data";

const App = () => {
  const [searchingText, setSearchingText] = useState<string>("");
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const animalFilter = allAnimals.filter((oneAnimal) =>
      oneAnimal.name.toLowerCase().includes(searchingText.toLowerCase())
    );
    setFilteredAnimals(animalFilter);
  }, [searchingText]);

  return (
    <div className="animal-box">
      <h1>Plyšoví kamarádi</h1>
      <form>
        <input
          type="text"
          placeholder="Hledání"
          onChange={(e) => setSearchingText(e.target.value)}
        />
      </form>
      <div className="all-animals">
        {filteredAnimals.map((oneAnimal) => {
          const { id, name, image, description, price } = oneAnimal;
          return (
            <div key={id} className="one-animal">
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p>{description}</p>
              <p>Cena: {price} Kč</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
