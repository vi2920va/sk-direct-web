import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  title: string;
  footer: React.ReactNode;
  width: number;
  okButton: React.ReactNode;
  okText: string;
  isOneBtn: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = () => {
  return <Styled>index</Styled>;
};
export default Modal;

const Styled = styled.div``;
