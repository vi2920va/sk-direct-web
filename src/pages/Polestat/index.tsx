import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import Section from '../../components/atoms/Section';
import Banner from '../../components/molecures/Banner';
import {
  POLESTAT_LIST_PC,
  POLESTAT_LIST_TABLET,
  ICON_LIST_PC,
  ICON_LIST_TABLET,
  CARD_LIST_PC,
  CARD_LIST_TABELT,
  NOTICE_LIST,
  POLESTAT_LIST_MOBILE,
  ICON_LIST_MOBILE,
  CARD_LIST_MOBILE,
} from './constants';

interface PolstaProps {}

const Polestat: React.FC<PolstaProps> = () => {
  const [screenWidth, setsScreenWidth] = useState(window.innerWidth);
  const [polestatList, setPolestatList] = useState(POLESTAT_LIST_PC);
  const [iconList, setIconList] = useState(ICON_LIST_PC);
  const [cardList, setCardList] = useState(CARD_LIST_PC);
  useEffect(() => {
    const handleWindowSize = () => {
      setsScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.addEventListener('remove', handleWindowSize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth <= 768) {
      setPolestatList(POLESTAT_LIST_TABLET);
      setIconList(ICON_LIST_TABLET);
      setCardList(CARD_LIST_TABELT);
    } else {
      setPolestatList(POLESTAT_LIST_PC);
    }

    if (screenWidth <= 375) {
      setPolestatList(POLESTAT_LIST_MOBILE);
      setIconList(ICON_LIST_MOBILE);
      setCardList(CARD_LIST_MOBILE);
    }

    if (screenWidth >= 768 && screenWidth >= 375) {
      setPolestatList(POLESTAT_LIST_PC);
      setIconList(ICON_LIST_PC);
      setCardList(CARD_LIST_PC);
    }
  }, [screenWidth]);

  return (
    <StyledMain>
      <Banner />
      <Section>
        <StyledArticle top={5} left={2} bottom={5} className="polestat__artice">
          <StyledBox>
            <StyledPolestatTitle textAlign="left" lineHeight={100} className="polestat__title-tablet">
              PoleStar 2
            </StyledPolestatTitle>
            <StyledSubTitle>Long Range Single Motor</StyledSubTitle>
            <StyledPolestatList>
              {polestatList.map((polestat, index) => (
                <StyledPolestatItem key={index}>
                  <img src={polestat.image} alt={polestat.name} />
                </StyledPolestatItem>
              ))}
            </StyledPolestatList>
          </StyledBox>
        </StyledArticle>
      </Section>
      <Section color="lightGray">
        <StyledArticle top={5} left={2} bottom={2}>
          <StyledPolestatTitle
            textAlign="center"
            fontSize="medium"
            fontWight={700}
            lineHeight={61}
            className="sk__title-tablet"
          >
            PoleStar SK 렌터카에서 <br />
            사전 예약을 해야하는 이유!
          </StyledPolestatTitle>
          <StyledReservationList>
            {iconList.map((icon, index) => (
              <StyledReservationItem key={index}>
                <img src={icon.image} alt={icon.name} />
              </StyledReservationItem>
            ))}
          </StyledReservationList>
          <StyledReservationContent>
            ※ 사전 예약 순서대로 게약 가능 시점에 SK 렌터카에서 연락드립니다.
          </StyledReservationContent>
        </StyledArticle>
      </Section>
      <Section>
        <StyledArticle top={5} left={2} bottom={5}>
          <StyledPolestatTitle
            textAlign="center"
            fontSize="medium"
            fontWight={700}
            lineHeight={61}
            className="way__title-tablet"
          >
            사전 예약 방법
          </StyledPolestatTitle>
          <StyleCardList>
            {cardList.map((card, index) => (
              <StyledCardItem key={index}>
                <img src={card.image} alt={card.name} />
              </StyledCardItem>
            ))}
          </StyleCardList>
        </StyledArticle>
      </Section>
      <Section color="apricot">
        <StyledArticle top={5} bottom={5} left={15}>
          <StyledPolestatTitle
            textAlign="center"
            fontSize="small"
            fontWight={700}
            lineHeight={44}
            bottom={2}
            className="reservation__title-tablet"
          >
            유의사항
          </StyledPolestatTitle>
          <StyledHr />
          <StyledNoticeList>
            {NOTICE_LIST.map((notice, index) => (
              <StyledNoticeItem key={index} className="notices__title">
                <StyledNoticeTitle>{notice.title}</StyledNoticeTitle>
                <StyledNoticeList>
                  {notice.contents.map((content, index) => (
                    <StyledNoticeItem key={index}>{content}</StyledNoticeItem>
                  ))}
                </StyledNoticeList>
              </StyledNoticeItem>
            ))}
          </StyledNoticeList>
        </StyledArticle>
      </Section>
      <StyledFooter>
        <StyledAddress>
          주소 : 서울특별시 구로구 서부샛길 822(구로동) ㅣ 상호명 : SK렌터카(주) ㅣ 대표이사 : 황일문 ㅣ 사업자번호 :
          113-81-32864 ㅣ통신판매업신고 : 구로구청 제2006-03389 ㅣ TEL : 1599-9111
        </StyledAddress>
        <StyledAddress>Copyright ⓒ SK렌터카 AII Rights Reserved</StyledAddress>
      </StyledFooter>
      <Section textAlign="center" bottom={1}>
        <Button width={600} height={80} lineHeight={26} fontSize={24}>
          사전예약 참여하기
        </Button>
      </Section>
    </StyledMain>
  );
};

export default Polestat;

const StyledMain = styled.main``;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 820px;
  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 340px;
  }
`;

const StyledArticle = styled.article<{ top?: number; left?: number; bottom?: number }>`
  margin: 0 auto;
  padding: ${(props) => props.top}% ${(props) => props.left}% ${(props) => props.bottom}%;
  &.polestat__artice {
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 5%;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledPolestatTitle = styled.h1<{
  fontSize?: string;
  lineHeight?: number;
  fontWight?: number;
  textAlign?: string;
  bottom?: number;
}>`
  font-family: 'Polestar Unica77 TT';
  font-weight: ${(props) => props.fontWight};
  font-size: 100px;
  line-height: ${(props) => props.lineHeight}px;
  letter-spacing: -0.02em;
  color: #101820;
  text-align: ${(props) => props.textAlign};
  margin-bottom: ${(props) => props.bottom}%;

  font-size: ${(props) => {
    switch (props.fontSize) {
      case 'medium':
        return '45px';
      case 'small':
        return '32px';
    }
  }};

  &.polestat__title-tablet {
    ${({ theme }) => theme.breakpoints.tablet} {
      margin-top: 7%;
      font-weight: 400;
      font-size: 80px;
      line-height: 100%;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: 7%;
      font-weight: 400;
      font-size: 50px;
      line-height: 100%;
    }
  }

  &.sk__title-tablet {
    ${({ theme }) => theme.breakpoints.tablet} {
      padding-top: 5%;
      font-weight: 700;
      font-size: 36px;
      line-height: 140%;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: 7%;
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
    }
  }

  &.way__title-tablet {
    ${({ theme }) => theme.breakpoints.tablet} {
      margin: 3% 0;
      font-weight: 700;
      font-size: 36px;
      line-height: 140%;
    }
    ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: 7%;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
  }

  &.reservation__title-tablet {
    ${({ theme }) => theme.breakpoints.tablet} {
      padding-top: 7%;
      font-size: 20px;
      line-height: 27px;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
      margin-top: 7%;
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

const StyledHr = styled.hr`
  border: 0.3px solid #dcd5cf;
`;

const StyledSubTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #52565a;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
  }
`;

const StyledPolestatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  overflow-y: hidden;
`;

const StyledPolestatItem = styled.li`
  padding: 10px;
  overflow: hidden;
`;

const StyledReservationList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2% 0 0 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 768px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 275px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StyledReservationItem = styled.li`
  width: 243px;
  margin-right: 2%;
  text-align: center;

  &:last-of-type {
    margin-right: 0;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 130px;
    margin-right: 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    img {
      width: 220px;
      margin-right: 2%;
    }

    &:last-of-type {
      margin-left: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    img {
      width: 100%;
      margin-right: 1%;
    }

    &:last-of-type {
      margin-left: 0;
    }
  }
`;

const StyledReservationContent = styled.p`
  margin: 3% 0 2% 0;
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #52565a;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 5% 0 5% 0;
    font-size: 16px;
    line-height: 23px;
  }
`;

const StyleCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3%;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding-right: 2%;
    margin-bottom: 5%;
  }
`;

const StyledCardItem = styled.li`
  padding: 0.5%;
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 3%;
  }
`;

const StyledNoticeList = styled.ul``;

const StyledNoticeItem = styled.li`
  padding: 10px 0 5px 10px;
  font-weight: normal;
  font-size: 20px;
  color: #646464;

  &.notices__title {
    margin-bottom: 10px;
    list-style: none;
    &::before {
      content: '';
    }
  }

  &::before {
    content: '•';
    margin-right: 5px;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 3px 0;
    font-size: 14px;
    line-height: 20px;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 3px 0;
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledNoticeTitle = styled.h3`
  padding: 5px 0 0 0;
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;
  color: #101820;
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledFooter = styled.footer`
  background: #050505;
  padding: 5% 0;
  text-align: center;
  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
  }
`;

const StyledAddress = styled.address`
  margin-bottom: 5px;
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #cdcdcd;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 12px;
    line-height: 16px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 10px;
    line-height: 14px;
  }
`;
