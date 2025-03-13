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
      {/* 📌 Botón flotante para abrir instrucciones nuevamente */}
      {!showInstructions && (
        <div className="instructions-btn-container">
          <motion.button 
            className="open-instructions-btn" 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setShowInstructions(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            📜 Instrucciones
          </motion.button>

          <motion.p 
            className="made-by"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Hecho por Chuka & Agos
          </motion.p>
        </div>
      )}

      {/* 📜 Instrucciones sobre la ruleta, pero sin ocultarla */}
      {showInstructions && (
        <motion.div 
          transition={{ delay: 0.3 }}
          className="instructions-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="instructions">
            <h2>📜 Instrucciones</h2>
            <p>1️⃣ Gira la ruleta para elegir la dificultad.</p>
            <p>2️⃣ Escoge entre <strong>Verdad</strong> o <strong>Reto</strong>.</p>
            <p>3️⃣ Muestra tu celular al grupo y luego lee el reto o verdad <strong>EN VOZ ALTA</strong>.</p>
            <p>4️⃣ Si no lo cumples, prepárate para el castigo.</p>
            <motion.button 
              className="close-btn" 
              onClick={() => setShowInstructions(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Entendido
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* 🎡 Ruleta y botones SIEMPRE visibles */}
      <ChallengeWheel 
        onCategorySelected={handleCategorySelected} 
        spinning={spinning} 
        setSpinning={setSpinning} 
      />

      {category && !selectedChallenge && !spinning && (
        <motion.div 
          className="button-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button onClick={handleTruth} className="truth-btn">Verdad</button>
          <button onClick={handleDare} className="dare-btn">Reto</button>
</motion.div>

      )}

      {selectedChallenge && (
        <ChallengeCard challenge={selectedChallenge} setSelectedChallenge={setSelectedChallenge} />
      )}
    </div>

  );
};

export default GameController;
