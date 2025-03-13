import { useMemo } from "react";
import "../styles/ChallengeCard.css";
import { motion } from "framer-motion";

const ChallengeCard = ({ challenge, setSelectedChallenge }) => {
  const randomExercise = useMemo(() => {
    const exerciseOptions = ["sentadillas", "burpees", "abdominales"];
    return exerciseOptions[Math.floor(Math.random() * exerciseOptions.length)];
  }, []);

  const penalty = useMemo(() => 
    challenge.level === "Fácil" ? 1 : challenge.level === "Intermedio" ? 2 : 3, 
    [challenge.level]
  );

  const closeChallenge = () => {
    setTimeout(() => setSelectedChallenge(null), 100);
  };

  return (
    <motion.div 
      className="modal_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="modal">
        <motion.div 
          className="modal_header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1>{challenge.level} {challenge.emoji}</h1>
          <p>{challenge.text}</p>
        </motion.div>

        <motion.div 
          className="penalty-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p><strong>Si no cumples:</strong></p>
          <p className="penalty">
            🍻 {penalty} {penalty === 1 ? "shot" : "shots"} <br /> 
            o <br /> 
            💪 {penalty * 10} {randomExercise}
          </p>
        </motion.div>

        <p className="warning">
          📢 Muestra tu celular antes de leer el reto o la verdad en voz alta
        </p>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="spin-btn"
          onClick={closeChallenge}
        >
          Salir
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
