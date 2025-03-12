import { useState } from "react";
import { motion } from "framer-motion";
import ChallengeWheel from "../components/ChallengeWheel";
import challenges from "../data/challenges.json";
import ChallengeCard from "./ChallengeCard";
import "../styles/GameController.css";

const GameController = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [category, setCategory] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [spinning, setSpinning] = useState(false);

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
      {/* Botón para volver a abrir las instrucciones */}
      <button className="open-instructions-btn" onClick={() => setShowInstructions(true)}>📜 Instrucciones</button>

      {showInstructions && (
      <motion.div 
        className="instructions-container"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        >
          <div className="instructions">
            <h2>📜 Instrucciones</h2>
            <p>1️⃣ Gira la ruleta para elegir la dificultad.</p>
            <p>2️⃣ Escoge entre <strong>Verdad</strong> o <strong>Reto</strong>.</p>
            <p>3️⃣ <strong>LEE EN VOZ ALTA</strong> el reto y muestra tu celular al grupo.</p>
            <p>4️⃣ Si no lo cumples, prepárate para el castigo.</p>
            <button className="close-btn" onClick={() => setShowInstructions(false)}>Entendido</button>
          </div>
        </motion.div>
      )}

      <ChallengeWheel onCategorySelected={handleCategorySelected} spinning={spinning} setSpinning={setSpinning} />

      {category && !selectedChallenge && !spinning && (
        <div className="button-container">
          <button onClick={handleTruth} className="truth-btn">Verdad</button>
          <button onClick={handleDare} className="dare-btn">Reto</button>
        </div>
      )}

      {selectedChallenge && (
        <ChallengeCard challenge={selectedChallenge} setSelectedChallenge={setSelectedChallenge} />
      )}
    </div>
  );
};

export default GameController;
