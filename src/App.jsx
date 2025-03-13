import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react"; 
import "./styles/styles.css";

function App() {
  return (
    <div className="app">
      <Home />
      <Analytics /> 
    </div>
  );
}

export default App;
