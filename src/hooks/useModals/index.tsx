import React, { useState } from 'react';
import Modal, { ModalProps } from '../../components/molecures/Modals/Modal';

const useModals = () => {
  const [visible, setVisible] = useState(false);

  const openModal = (modal: React.ReactNode) => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const DefaultModal = (props: ModalProps) => {
    <Modal {...props} />;
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModals;
