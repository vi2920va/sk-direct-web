import { check } from 'prettier';
import React from 'react';
import styled from 'styled-components';
import CHECK_ICON from '../../../assets/icons/check.svg';
import CHECKED_ICON from '../../../assets/icons/checked.svg';

interface CheckBoxProps {
  isChecked?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked }) => {
  return (
    <StyledLabel htmlFor="inputCheckbox" value={isChecked}>
      <StyledInput type={'checkbox'} id="inputCheckbox" checked={isChecked} />
    </StyledLabel>
  );
};
export default CheckBox;

const StyledInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;

  overflow: hidden;
`;

const StyledLabel = styled.label<{ value?: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background: center/cover url(${(props) => (props.value ? CHECKED_ICON : CHECK_ICON)});
  vertical-align: middle;
  stroke: black;
`;
