import React, { useState } from "react";

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front-container">
        <div className="front">{flashcard.country}</div>
        <div className="front">{flashcard.continent}</div>
      </div>
      <div className="back">{flashcard.city}</div>
    </div>
  );
}
