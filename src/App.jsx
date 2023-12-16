import "./App.css";
import { createContext, useState, useEffect } from "react"; //imported git

import Homepage from "./pages/Homepage/Homepage";

export const WindowContext = createContext();

function App() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize[0]);

  return (
    <WindowContext.Provider value={windowSize}>
      <Homepage />
    </WindowContext.Provider>
  );
}

export default App;
