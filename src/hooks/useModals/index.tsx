import React, { useState } from 'react';
import Modal, { ModalProps } from '../../components/molecures/Modals/Modal';

const useModals = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const defaultModal = (props: ModalProps) => {
    visible && <Modal {...props} />;
  };

  return {
    visible,
    setVisible,
    openModal,
    closeModal,
  };
};

export default useModals;
