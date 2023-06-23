import React, { useState } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentCardIndex(0);
  };

  const filteredFlashcards = selectedCategory
    ? flashcards.filter((flashcard) => flashcard.continent === selectedCategory)
    : flashcards;

  const currentFlashcard = filteredFlashcards[currentCardIndex];

  return (
    <div className="card-flex">
      <select
        className="continent"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
      {currentFlashcard && (
        <Flashcard flashcard={currentFlashcard} key={currentFlashcard.id} />
      )}
      <button
        className="next-btn"
        onClick={handleNextCard}
        disabled={currentCardIndex === filteredFlashcards.length - 1}
      >
        NEXT
      </button>
    </div>
  );
}
