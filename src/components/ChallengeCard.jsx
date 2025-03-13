import "../styles/ChallengeCard.css";
import { motion } from "framer-motion";

const ChallengeCard = ({ challenge, setSelectedChallenge }) => {
  const exerciseOptions = ["sentadillas", "burpees", "abdominales"];
  const randomExercise = exerciseOptions[Math.floor(Math.random() * exerciseOptions.length)];

  // Definir la cantidad de castigo según la dificultad
  const penalty = challenge.level === "Fácil" ? 1 : challenge.level === "Intermedio" ? 2 : 3;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="modal_container">
      
      <div className="modal">
        <div className="modal_header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {challenge.level} {challenge.emoji}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {challenge.text}
          </motion.p>

          <motion.div 
            className="penalty-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p><strong>Si no cumples:</strong></p>
            <p className="penalty">
              🍻 {penalty} {penalty === 1 ? "shot" : "shots"} <br /> 
              o <br /> 
              💪 {penalty * 10} {randomExercise}
            </p>
          </motion.div>

          <motion.p className="warning">
            📢 Muestra tu celular antes de leer el reto o la verdad en voz alta
          </motion.p>
        </div>

        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="spin-btn"
          onClick={() => setSelectedChallenge(null)}
        >
          Salir
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
