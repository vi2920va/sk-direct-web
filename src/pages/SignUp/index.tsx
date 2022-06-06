import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../components/atoms/CheckBox";
import Section from "../../components/atoms/Section";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputProess = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhoneNumber(
      value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "")
    );
  };
  return (
    <Section color="gray" textAlign="center">
      <StyledTitle>회원가입</StyledTitle>
      <StyledBox>
        <StyledForm>
          <StyledBorder>
            <StyledBorderTitle>잠깐! 만 14세 이상 인가요?</StyledBorderTitle>
            <StyledBorderContent>
              <CheckBox /> (필수) 만 14세 이상만 회원 가입이 가능함을 확인
              합니다.
            </StyledBorderContent>
          </StyledBorder>
          <StyledFormTitle>
            회원 확인을 위하여
            <br />
            휴대폰 인증을 진행주세요. (최초 1회)
          </StyledFormTitle>
          <StyledFormBox>
            <StyledLable htmlFor="PhoneNumber">휴대폰 번호</StyledLable>
            <input
              type="type"
              id="PhoneNumber"
              value={phoneNumber}
              onChange={handleInputProess}
            />
          </StyledFormBox>
        </StyledForm>
      </StyledBox>
    </Section>
  );
};
export default SignUp;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  padding-top: 5%;
  padding-bottom: 3%;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 568px;
  height: 606px;
  padding: 56px 40px 40px;
  border-radius: 16px;
  background: #ffffff;
`;

const StyledBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 488px;
  height: 104px;
  padding: 24px;
  border: 1px solid #ededf0;
  border-radius: 16px;
`;

const StyledBorderTitle = styled.b`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #3a3a3c;
`;

const StyledBorderContent = styled.p`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #77777a;
`;

const StyledFormTitle = styled.h3`
  display: flex;
  text-align: left;
  margin-top: 10%;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  color: #262628;
`;

const StyledFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLable = styled.label``;
