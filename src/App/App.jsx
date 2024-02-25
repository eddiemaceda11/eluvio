import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage/Homepage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import FinancialsPage from "../pages/Financials/Financials";

import { ModalContextProvider } from "../context/ModalContext";
import { WindowContextProvider } from "../context/WindowContext";

function App() {
  return (
    <WindowContextProvider>
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
          <Route
            path="/financials"
            element={<FinancialsPage />}
          />
        </Routes>
      </ModalContextProvider>
    </WindowContextProvider>
  );
}

export default App;
