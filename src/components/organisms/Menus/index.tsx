import React from "react";
import { NavLink } from "react-router-dom";
import { colums } from "./constants";
import LOGO_PNG from "../../../assets/images/pc/logo.png";
import styled from "styled-components";
import Button from "../../atoms/Button";

interface MenusProps {}

const Menus: React.FC<MenusProps> = () => {
  const handleButtonPross = () => {};
  return (
    <StyleMenuWrapper>
      <StyledTitleLogo />
      <MenuList>
        {colums.map((menu, index) => {
          return (
            <StyledLink to={menu.path} key={index}>
              <span>{menu.title}</span>
            </StyledLink>
          );
        })}
      </MenuList>
      <Button
        width={50}
        height={30}
        className="button-login"
        onClick={handleButtonPross}
      >
        로그인
      </Button>
    </StyleMenuWrapper>
  );
};
export default Menus;

const StyleMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px;
`;

const StyledTitleLogo = styled.h1`
  width: 238px;
  height: 50px;
  line-height: 50px;
  margin: 0 5%;
  background: center/cover url(${LOGO_PNG});
`;

const MenuList = styled.nav`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(NavLink)`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #262628;
  cursor: pointer;
`;
