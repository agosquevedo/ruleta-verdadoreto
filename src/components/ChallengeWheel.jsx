import { useEffect, useState } from "react";
import { Wheel } from 'react-custom-roulette';
import { motion } from "framer-motion";
import "../styles/ChallengeWheel.css";

import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const theme = {
  darkText: "#222222",
  lightText: "#e9ecef",
  medium: "#7b2cbf",
  hard: "#3c096c",
  easy: "#c77dff",
};

const ChallengeWheel = ({ onCategorySelected, spinning, setSpinning }) => {

  const categories = [
    { option: "Fácil", shots: 1, exercises: 10 },
    { option: "Intermedio", shots: 2, exercises: 20 },
    { option: "Difícil", shots: 3, exercises: 30 },
    { option: "Fácil", shots: 1, exercises: 10 },
    { option: "Intermedio", shots: 2, exercises: 20},
    { option: "Difícil", shots: 3, exercises: 30 },
    { option: "Fácil", shots: 1, exercises: 10 },
    { option: "Intermedio", shots: 2, exercises: 20 },
    { option: "Difícil", shots: 3, exercises: 30 }
  ];

  const [prizeNumber, setPrizeNumber] = useState(0);

  useEffect(() => {
    socket.on("spinning", () => {
      setSpinning(true);
    });

    socket.on("result", (data) => {
      console.log(data);
      setSpinning(false);
    });

    return () => {
      socket.off("spinning");
      socket.off("result");
    };
  }, []);

  const spinWheel = () => {
    socket.emit("spin");
    const newPrizeNumber = Math.floor(Math.random() * categories.length);
    setPrizeNumber(newPrizeNumber);
    onCategorySelected(categories[newPrizeNumber]);
    setSpinning(true);
  };

  return (
    <motion.div 
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1}}
      transition={{ delay: 2 }}
      className="wheel-container"
    >

      <Wheel
        mustStartSpinning={spinning}
        prizeNumber={prizeNumber}
        data={categories}
        backgroundColors={[theme.easy, theme.medium, theme.hard]}
        textColors={[theme.darkText, theme.lightText, theme.lightText]}
        onStopSpinning={() => {
          socket.emit("result", `Prize ${prizeNumber}`);
          setSpinning(false);
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

      <button className="spin-btn" onClick={spinWheel} disabled={spinning}>
        🎰 Girar Ruleta
      </button>

    </motion.div>
  );
};

export default ChallengeWheel;