import "./App.css";
import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage/Homepage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

import { ModalContextProvider } from "../context/ModalContext";

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
      <ModalContextProvider>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
        </Routes>
      </ModalContextProvider>
    </WindowContext.Provider>
  );
}

export default App;
