import { useState, createContext } from "react";

const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return <ModalContext.Provider value={{ modalOpen, handleModalToggle }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalContextProvider };
