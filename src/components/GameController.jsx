import { useState } from "react";
import ChallengeWheel from "../components/ChallengeWheel";
import challenges from "../data/challenges.json";

const GameController = () => {
  const [category, setCategory] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [gameMode, setGameMode] = useState(null);

  const exerciseOptions = ["sentadillas", "burpees", "abdominales"];

  const handleCategorySelected = (cat) => {
    setCategory(cat);
    setSelectedChallenge(null);
    setGameMode(null);
  };

  const getRandomChallenge = (type) => {
    if (!category) return null;
    const filteredChallenges = challenges[type].filter(ch => ch.level === category.label);
    return filteredChallenges[Math.floor(Math.random() * filteredChallenges.length)];
  };

  const getRandomExercise = () => {
    return exerciseOptions[Math.floor(Math.random() * exerciseOptions.length)];
  };

  const handleTruth = () => {
    setGameMode("Verdad");
    setSelectedChallenge(getRandomChallenge("truths"));
  };

  const handleDare = () => {
    setGameMode("Reto");
    setSelectedChallenge(getRandomChallenge("dares"));
  };

  return (
    <div className="game-container">
      <ChallengeWheel onCategorySelected={handleCategorySelected} />

      {category && !selectedChallenge && (
        <div className="button-container">
          <button onClick={handleTruth} className="truth-btn">Verdad</button>
          <button onClick={handleDare} className="dare-btn">Reto</button>
        </div>
      )}

      {selectedChallenge && (
        <div className="challenge-result">
          <h2>{gameMode}: {selectedChallenge.text}</h2>
          <p>Si no cumples: {category.shots} shots o {category.exercises} {getRandomExercise()}</p>
        </div>
      )}
    </div>
  );
};

export default GameController;
