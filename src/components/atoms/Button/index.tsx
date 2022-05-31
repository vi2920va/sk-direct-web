import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  width?: number;
  height: number;
  fontSize: number;
  lineHeight?: number;
  children?: string | React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ width, height, children, fontSize, ...resetProps }) => {
  return (
    <StyledButton {...resetProps} width={width} height={height} fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.button<{ width?: number; height?: number; fontSize?: number; lineHeight?: number }>`
  width: ${(props) => props.width}px;
  height: ${(porps) => porps.height}px;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  font-family: 'Noto Sans';
  font-weight: 700;
  text-align: center;
  background: #ff7402;
  color: #fff;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 600px;
    height: 80px;
    font-size: 24px;
    line-height: 26px;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 335px;
    height: 56px;
    font-size: 18px;
    line-height: 24px;
  }
`;
