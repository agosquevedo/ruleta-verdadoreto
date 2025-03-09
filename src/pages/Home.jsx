import GameController from "../components/GameController";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <div className="container">
      <div className="title_container">
        <motion.h1 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ delay: 1.3 }}
            className="title"
          >
            Verdad o Reto
          </motion.h1>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            transition={{ delay: 1.5 }}
            className="info"
          >
            ¡Gira la ruleta, elige entre Verdad o Reto y cumple el desafío!
          </motion.p>
        </div>
      <GameController />
    </div>
  );
};

export default Home;
