import "./App.css";
import { createContext, useState, useEffect } from "react"; //imported git

import Homepage from "../pages/Homepage/Homepage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

// context to check window width on resize, for use in Cards component
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
      {/* <Homepage /> */}
      <DashboardPage />
    </WindowContext.Provider>
  );
}

export default App;
