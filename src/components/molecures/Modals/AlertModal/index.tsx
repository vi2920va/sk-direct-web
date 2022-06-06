import React from 'react';
import styled from 'styled-components';
import Portal from '../Portal';

export interface AlertModalProps {
  title: string;
  width?: number;
  contents: string | React.ReactNode;
  footer?: React.ReactElement;
  okText?: string;
  isDanger?: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({ width, title }) => {
  alert('111');
  return (
    <>
      <Portal>
        <StyledAlertModal width={width}>
          <h3>{title}</h3>
        </StyledAlertModal>
      </Portal>
    </>
  );
};
export default AlertModal;

const StyledAlertModal = styled.div<{ width?: number }>`
  width: 500px;
  height: 500px;
  background-color: orange;
`;
