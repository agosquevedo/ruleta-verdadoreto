import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ChallengeWheel.css";

const ChallengeWheel = ({ onCategorySelected }) => {
  const categories = [
    { label: "Fácil", color: "#00C851", shots: 1, exercises: 10 },
    { label: "Intermedio", color: "#FFBB33", shots: 2, exercises: 20 },
    { label: "Difícil", color: "#CC0000", shots: 3, exercises: 30 }
  ];

  const [rotation, setRotation] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * categories.length);
    const category = categories[randomIndex];

    const extraSpins = 4 * 360;
    const sliceAngle = 360 / categories.length;
    const finalRotation = extraSpins + randomIndex * sliceAngle + sliceAngle / 2;

    setRotation(finalRotation);

    setTimeout(() => {
      setSelectedCategory(category);
      onCategorySelected(category);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="wheel-container">
      <div className="wheel-indicator"></div>

      <motion.div
        className="wheel"
        animate={{ rotate: rotation }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="wheel-segment"
            style={{
              transform: `rotate(${index * (360 / categories.length)}deg)`,
              backgroundColor: cat.color
            }}
          >
            <span className="segment-text">{cat.label}</span>
          </div>
        ))}
      </motion.div>

      <button className="spin-btn" onClick={spinWheel} disabled={spinning}>
        🎡 Girar Ruleta
      </button>

      {selectedCategory && (
        <p className="result-text">Categoría: {selectedCategory.label}</p>
      )}
    </div>
  );
};

export default ChallengeWheel;
