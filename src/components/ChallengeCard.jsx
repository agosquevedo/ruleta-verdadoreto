import { memo, useMemo } from "react";
import "../styles/ChallengeCard.css";
import { motion } from "framer-motion";

const ChallengeCard = memo(({ challenge, setSelectedChallenge }) => {
  // Definir opciones de castigo
  const exerciseOptions = useMemo(() => ["sentadillas", "burpees", "abdominales"], []);
  const randomExercise = useMemo(
    () => exerciseOptions[Math.floor(Math.random() * exerciseOptions.length)],
    [exerciseOptions]
  );

  // Determinar el castigo según el nivel de dificultad
  const penalty = useMemo(() => {
    return challenge.level === "Fácil" ? 1 : challenge.level === "Intermedio" ? 2 : 3;
  }, [challenge.level]);

  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="modal_container"
    >
      <div className="modal">
        <div className="modal_header">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
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

          {/* Advertencia de lectura en voz alta */}
          <motion.p 
            className="warning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            📢 Muestra tu celular antes de leer el reto o la verdad en voz alta
          </motion.p>
        </div>

        {/* Botón para salir */}
        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="spin-btn"
          onClick={() => setSelectedChallenge(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Salir
        </motion.button>
      </div>
    </motion.div>
  );
});

export default ChallengeCard;
