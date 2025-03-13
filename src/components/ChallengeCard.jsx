import { memo } from "react";
import "../styles/ChallengeCard.css";
import { motion } from "framer-motion";

const ChallengeCard = memo(({ challenge, setSelectedChallenge }) => {
  // Opciones de castigo
  const exerciseOptions = ["sentadillas", "burpees", "abdominales"];
  const randomExercise = exerciseOptions[Math.floor(Math.random() * exerciseOptions.length)];

  // Determinar el castigo según el nivel de dificultad
  const penalty = challenge.level === "Fácil" ? 1 : challenge.level === "Intermedio" ? 2 : 3;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="modal_container"
    >
      <div className="modal">
        <div className="modal_header">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {challenge.level} {challenge.emoji}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {challenge.text}
          </motion.p>

          <motion.div 
            className="penalty-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <p><strong>Si no cumples:</strong></p>
            <p className="penalty">
              🍻 {penalty} {penalty === 1 ? "shot" : "shots"} <br /> 
              o <br /> 
              💪 {penalty * 10} {randomExercise}
            </p>
          </motion.div>

          {/* Advertencia de lectura en voz alta */}
          <motion.p 
            className="warning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            📢 Muestra tu celular antes de leer el reto o la verdad en voz alta
          </motion.p>
        </div>

        {/* Botón para salir */}
        <motion.button 
          className="spin-btn"
          onClick={() => setSelectedChallenge(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Salir
        </motion.button>
      </div>
    </motion.div>
  );
});

export default ChallengeCard;
