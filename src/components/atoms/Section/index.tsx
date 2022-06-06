import React from "react";
import styled from "styled-components";

interface SectionProps {
  color?: string;
  children: React.ReactNode;
  textAlign?: string;
  bottom?: number;
}

const Section: React.FC<SectionProps> = ({
  color,
  children,
  textAlign,
  bottom,
}) => {
  return (
    <StyledSection color={color} bottom={bottom} textAlign={textAlign}>
      {children}
    </StyledSection>
  );
};
export default Section;

const StyledSection = styled.section<{
  background?: string;
  textAlign?: string;
  bottom?: number;
}>`
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.bottom}% 0;
  background: ${(props) => {
    switch (props.color) {
      case "lightGray":
        return "#F8F8F7";
      case "apricot":
        return "#F5EDE7";
      case "gray":
        return "#E5E5E5";
    }
  }};
`;
