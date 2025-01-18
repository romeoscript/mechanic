import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MechanicWorkshop from "./components/mech";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MechanicWorkshop />
    </>
  );
}

export default App;
