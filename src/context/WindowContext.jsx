import { useState, createContext, useEffect } from "react";

const WindowContext = createContext();

const WindowContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      console.log(windowSize[0]);
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return <WindowContext.Provider value={{ windowSize }}>{children}</WindowContext.Provider>;
};

export { WindowContext, WindowContextProvider };
