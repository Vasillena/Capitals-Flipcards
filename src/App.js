import "./App.css";
import FlashcardList from "./components/FlashcardList";
import { FLASHCARDS } from "./data";

function App() {
  return (
    <div className="container">
      <FlashcardList flashcards={FLASHCARDS} />
    </div>
  );
}

export default App;
