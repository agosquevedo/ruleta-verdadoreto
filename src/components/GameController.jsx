import { useState } from "react";
import ChallengeWheel from "../components/ChallengeWheel";
import challenges from "../data/challenges.json";
import ChallengeCard from "./ChallengeCard";

const GameController = () => {
  const [spinning, setSpinning] = useState(false);
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
    const filteredChallenges = challenges[type].filter(ch => ch.level === category.option);
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
      <ChallengeWheel onCategorySelected={handleCategorySelected} spinning={spinning} setSpinning={setSpinning}/>

      {category && !selectedChallenge && !spinning && (
        <div className="button-container">
          <button onClick={handleTruth} className="truth-btn">Verdad</button>
          <button onClick={handleDare} className="dare-btn">Reto</button>
        </div>
      )}

      {selectedChallenge && (
        <ChallengeCard challenge={selectedChallenge} setSelectedChallenge={setSelectedChallenge}/>
      )}
    </div>
  );
};

export default GameController;
