import React, { useState } from "react";
import styled from "styled-components";
import Portal from "../Portal";
import Button from "../../../atoms/Button";
import { RENTAL_DESCRIPTION } from "../constants";
import close from "../../../../assets/icons/close.svg";
import MODAL_BANNER_PNG from "../../../../assets/images/pc/modal_banner.png";
import CheckBox from "../../../atoms/CheckBox";
import useModals from "../../../../hooks/useModals";
import { AlertModalProps } from "../AlertModal";

export interface ModalProps {
  error?: boolean;
  title?: string;
  footer?: React.ReactNode;
  width?: number;
  okButton?: React.ReactNode;
  okText?: string;
  cancleButton?: React.ReactNode;
  cancleText?: string;
  isOneBtn?: boolean;
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
  handleButtonProess?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  width,
  footer,
  visible,
  onClose,
}) => {
  const [error, setError] = useState(true);
  const { openModal } = useModals();

  const handleButtonProess = () => {
    openModal();
  };

  return (
    <>
      {visible && (
        <Portal>
          <StyledModal>
            <StyledModalHeader>
              <Button className="button-close" onClick={onClose}>
                <img src={close} alt="close" />
              </Button>
            </StyledModalHeader>
            <StyledModalBody>
              <StyledModalTitle fontSize={22} lineHeight={140} bottom={30}>
                {title}
              </StyledModalTitle>
              <StyledModalBanner />
              <StyledRentalDescList>
                {RENTAL_DESCRIPTION.map((desc, index) => (
                  <StyledRentalDescItem key={index}>
                    {desc}
                  </StyledRentalDescItem>
                ))}
              </StyledRentalDescList>
              <Styledhr />
              <StyledModalTitle
                fontSize={18}
                lineHeight={140}
                top={30}
                bottom={5}
              >
                오직 <StyledTopintText>사전예약자 </StyledTopintText>분들에게만{" "}
                <br /> 계약 가능한 시점에 연락을 드릴 예정이에요.
              </StyledModalTitle>
              <StyledPrecautions bottom={40}>
                ※ 사전예약을 완료하신 분들만 사전예약자 계약기간에 계약하실 수
                있습니다.
              </StyledPrecautions>
              <StyledModalBox>
                <CheckBox isChecked={false} />
                (필수)사전 예약 및 개인정보 수집, 이용에 관환 동의
              </StyledModalBox>
              <StyledTable>
                <StyledTableRow>
                  <StyledTableth>활용 황목</StyledTableth>
                  <StyledTableth>이용목적</StyledTableth>
                  <StyledTableth>보유기간</StyledTableth>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTabletd>성명, 휴대폰, 번호</StyledTabletd>
                  <StyledTabletd>
                    <ul>
                      <li>사전예약 신청 확인</li>
                      <li>사전예약 알림 및 판매 안내</li>
                    </ul>
                  </StyledTabletd>
                  <StyledTabletd>
                    사전 예약 종료 후 판매 시작 시 까지
                  </StyledTabletd>
                </StyledTableRow>
              </StyledTable>
              <StyledPrecautions>
                ※ 고객님께서는 사전예약 참여를 위한 개인 정보 수집 및 이용에
                동의하지 않을 수 있습니다. <br />
                단, 동의를 하지 않은 경우에는 사전예약 참여가 불가합니다.
              </StyledPrecautions>
            </StyledModalBody>
            <StyledModalFooter>
              <Button
                width={488}
                height={56}
                className="button-reservation"
                onClick={handleButtonProess}
              >
                <span>사전예약 신청하기</span>
              </Button>
            </StyledModalFooter>
          </StyledModal>
        </Portal>
      )}
    </>
  );
};
export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 568px;
  border-radius: 16px;
  padding: 5% 40px;
  margin: 0 auto;
  box-sizing: content-box;
  background: #fff;
  font-family: "Noto Sans KR";
  z-index: 1000;
`;

const StyledModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
`;

const StyledModalBody = styled.section`
  width: 527px;
  padding: 0 20px;
`;

const StyledModalBanner = styled.div`
  width: 494px;
  height: 102px;
  background: center/cover url(${MODAL_BANNER_PNG});
`;

const StyledModalTitle = styled.h2<{
  fontSize?: number;
  lineHeight: number;
  top?: number;
  bottom?: number;
}>`
  margin-top: ${(props) => (props.top ? props.top + "px" : 0)};
  margin-bottom: ${(props) => props.bottom}px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}%;
  color: #262628;
`;
const StyledTopintText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #f2434a;
`;

const StyledRentalDescList = styled.ul`
  padding: 20px 0;
`;

const StyledRentalDescItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #77777a;
  &::before {
    content: "•";
    margin-right: 5px;
  }
`;

const Styledhr = styled.hr`
  border: 1px solid #ededf0;
`;

const StyledPrecautions = styled.p<{ bottom?: number; top?: number }>`
  margin-bottom: ${(props) => (props.bottom ? props.bottom + "px" : "0")};
  margin-top: ${(props) => (props.top ? props.top + "px" : "0")};
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #77777a;
`;

const StyledModalBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #3a3a3c;
`;

const StyledTable = styled.table`
  width: 456px;
  border: 1px solid #e9eaef;
  margin-bottom: 30px;
`;

const StyledTableRow = styled.tr`
  height: 34px;
  line-height: 34px;
`;

const StyledTableth = styled.th`
  height: 34px;
  font-weight: 700;
  font-size: 12px;
  background: #f5f5f7;
  text-align: center;
  color: #77777a;
`;

const StyledTabletd = styled.td`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #77777a;
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;

  &:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
  }

  &:nth-of-type(2) {
    width: 216px;
    text-align: left;

    li {
      &:first-child {
        margin-top: 10px;
      }
      &::before {
        content: "•";
        margin-right: 5px;
      }
    }
  }
`;

const StyledModalFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
