import React from "react";
import styled from "styled-components";
import Portal from "../Portal";
import Button from "../../../atoms/Button";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/close.svg";

interface LoginModalProps {
  visible?: boolean;
  onClose?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onClose }) => {
  return (
    <>
      {visible && (
        <Portal>
          <StyledLoginModal>
            <StyledLoginModalHeader>
              <Button className="button-close" onClick={onClose}>
                <CloseIcon />
              </Button>
            </StyledLoginModalHeader>
            <StyledLoginModalBorader></StyledLoginModalBorader>
          </StyledLoginModal>
        </Portal>
      )}
    </>
  );
};
export default LoginModal;

const StyledLoginModal = styled.section`
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  border-radius: 16px;
  width: 568px;
  height: 748px;
  z-index: 999;
  margin: 0 auto;
  background: #fff;
`;

const StyledLoginModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px 30px;
  margin-left: auto;

  button svg {
    font-size: 24px;
  }
`;

const StyledLoginModalBorader = styled.div`
  margin: 0 auto;
  padding: 24px;
  width: 488px;
  height: 143px;
  border: 1px solid #ededf0;
  border-radius: 16px;
`;
