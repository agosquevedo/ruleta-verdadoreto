import GameController from "../components/GameController";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container">
      <div className="title_container">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title"
        >
          Verdad o Reto
        </motion.h1>

        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="info"
        >
          Gira la ruleta para ver la dificultad, elige <strong>Verdad</strong> o <strong>Reto</strong> y atrévete a jugar.
        </motion.p>
      </div>

      <GameController />
    </div>
  );
};

export default Home;
