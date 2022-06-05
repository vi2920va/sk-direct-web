import React from 'react';
import styled from 'styled-components';
import Portal from '../Portal';

interface AlertModalProps {
  visible?: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({ visible }) => {
  return (
    <>
      {visible && (
        <Portal>
          <StyledAlertModal>index</StyledAlertModal>
        </Portal>
      )}
      ;
    </>
  );
};
export default AlertModal;

const StyledAlertModal = styled.div``;
