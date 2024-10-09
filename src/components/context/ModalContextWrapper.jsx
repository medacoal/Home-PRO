import React from 'react';
import Modal from "../cards/Modal";
import { useModal } from './ModalContext';
import AuthForm from '../../pages/auth/AuthForm';

const ModalWrapper = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  const openAuthModal = () => {
    openModal(<AuthForm />);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isModalOpen && <AuthForm />}
      </Modal>
    </>
  );
};

export default ModalWrapper;