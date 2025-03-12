import { useState } from "react";
import { Wheel } from 'react-custom-roulette';
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "../styles/ChallengeWheel.css";
import { Sparkles, PartyPopper, Gift } from "lucide-react";

const theme = {
  darkText: "#222222",
  lightText: "#ffffff",
  medium: "#EA61F5",
  hard: "#372492",
  easy: "#04F0FF",
};

const categories = [
  { option: "Fácil", shots: 1, exercises: 10, icon: <Sparkles size={16} />, color: "from-pink-500 to-purple-500" },
  { option: "Intermedio", shots: 2, exercises: 20, icon: <PartyPopper size={16} />, color: "from-blue-500 to-cyan-500" },
  { option: "Difícil", shots: 3, exercises: 30, icon: <Gift size={16} />, color: "from-purple-500 to-indigo-500" },
  { option: "Fácil", shots: 1, exercises: 10, icon: <Sparkles size={16} />, color: "from-pink-500 to-purple-500" },
  { option: "Intermedio", shots: 2, exercises: 20, icon: <PartyPopper size={16} />, color: "from-blue-500 to-cyan-500" },
  { option: "Difícil", shots: 3, exercises: 30, icon: <Gift size={16} />, color: "from-purple-500 to-indigo-500" }
];

const ChallengeWheel = ({ onCategorySelected, spinning, setSpinning }) => {
  const [prizeNumber, setPrizeNumber] = useState(0);

  const spinWheel = () => {
    const newPrizeNumber = Math.floor(Math.random() * categories.length);
    setPrizeNumber(newPrizeNumber);
    onCategorySelected(categories[newPrizeNumber]);
    setSpinning(true);
  };

  return (
    <motion.div 
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1}}
      transition={{ delay: 0.5 }}
      className="wheel-container"
    >
      <div className="neon-glow"></div> {/* Fondo neón */}

      <Wheel
        mustStartSpinning={spinning}
        prizeNumber={prizeNumber}
        data={categories}
        backgroundColors={[theme.easy, theme.medium, theme.hard]}
        textColors={[theme.darkText, theme.lightText, theme.lightText]}
        onStopSpinning={() => {
          setSpinning(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }}
        spinDuration={0.5}  
        innerBorderWidth={8}
        outerBorderWidth={8}
        radiusLineWidth={8}
        innerRadius={20}
        radiusLineColor={theme.lightText}
        outerBorderColor={theme.lightText}
        innerBorderColor={theme.lightText}
        fontSize={18}
        fontFamily="Poppins"
        fontWeight={300}
      />

      <motion.button 
        className="spin-btn" 
        onClick={spinWheel} 
        disabled={spinning}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      >
        🎰 Girar Ruleta
      </motion.button>
    </motion.div>
  );
};

export default ChallengeWheel;
