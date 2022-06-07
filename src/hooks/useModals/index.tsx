import { useState } from "react";

const useModals = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return {
    visible,
    setVisible,
    openModal,
    closeModal,
  };
};

export default useModals;
