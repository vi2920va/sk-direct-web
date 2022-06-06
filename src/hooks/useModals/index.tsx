import React, { useState } from 'react';
import AlertModal, { AlertModalProps } from '../../components/molecures/Modals/AlertModal';

const useModals = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  // TODO 함수 실행 안되는 이유 다니엘에게 물어보기
  const addModal = (action: React.ReactNode | React.ReactElement) => ({
    action,
  });

  const openAlertModal = (props: AlertModalProps) => {
    addModal(<AlertModal {...props} />);
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
