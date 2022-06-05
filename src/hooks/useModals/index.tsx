import React, { useState } from 'react';
import AlertModal from '../../components/molecures/Modals/AlertModal';
import Modal, { ModalProps } from '../../components/molecures/Modals/Modal';

const useModals = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const openAlertModal = () => {
    visible && <AlertModal />;
  };

  const defaultModal = (props: ModalProps) => {
    visible && <Modal {...props} />;
  };

  return {
    visible,
    setVisible,
    openModal,
    closeModal,
    openAlertModal,
  };
};

export default useModals;
