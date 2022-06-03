import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  width?: number;
  height?: number;
  fontSize?: number;
  lineHeight?: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ width, height, children, fontSize, onClick, ...resetProps }) => {
  const { className } = resetProps;
  return (
    <StyledButton
      {...resetProps}
      className={className}
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.button<{
  width?: number;
  height?: number;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
}>`
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

  &.button-close {
    display: inline-block;
    text-align: right;
    background: transparent;

    img {
      height: 14px;
      width: 14px;
    }
  }
  &.button-reservation {
    margin-top: 30px;
    border-radius: 8px;
    background: #f2434a;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
