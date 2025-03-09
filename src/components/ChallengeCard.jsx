import "../styles/ChallengeCard.css";
import { motion } from "framer-motion";

const ChallengeCard = ({ challenge, setSelectedChallenge }) => {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="modal_container">
      <div className="modal">
        <div className="modal_header">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >{challenge.level} {challenge.emoji}</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >{challenge.text}</motion.p>
        </div>

        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="spin-btn" onClick={() => setSelectedChallenge(null)}
        >
          Salir
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
