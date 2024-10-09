import React, { createContext, useState, useContext } from 'react';

// Create a context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // For passing different modal content

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook for using the context
export const useModal = () => {
  return useContext(ModalContext);
};