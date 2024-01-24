import { useState, createContext, useEffect } from "react";

const WindowContext = createContext();

const WindowContextProvider = ({ children }) => {
  // get the current height and width of window page
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    // update window height and width on resize
    const handleWindowResize = () => {
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
