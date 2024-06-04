import { useState, createContext } from "react";

type ModalContextProps = {
  modalOpen: boolean;
  handleModalToggle: () => void;
};

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return <ModalContext.Provider value={{ modalOpen, handleModalToggle }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalContextProvider };
