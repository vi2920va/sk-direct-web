import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import Section from '../../components/atoms/Section';
import Banner from '../../components/molecures/Banner';
// PC IMG
import PC_POLESTAT_PNG from '../../assets/images/pc/pc_snow.png';
import PC_MAGNESIUM_PNG from '../../assets/images/pc/pc_magnesium.png';
import PC_VOID_PNG from '../../assets/images/pc/pc_void.png';
import PC_BANK_PNG from '../../assets/images/pc/pc_bank.png';
import PC_CHECK_PNG from '../../assets/images/pc/pc_check.png';
import PC_CALENDAR_PNG from '../../assets/images/pc/pc_calendar.png';
import PC_BATTERY_PNG from '../../assets/images/pc/pc_battery.png';
import PC_MEMO_PNG from '../../assets/images/pc/pc_memo.png';
import PC_TACK_PNG from '../../assets/images/pc/pc_tack.png';
import PC_PROGRESS_PNG from '../../assets/images/pc/pc_progress.png';
import PC_SHIPPING_PNG from '../../assets/images/pc/pc_shipping.png';

// TABELT IMG
import TABLET_SNOW_PNG from '../../assets/images/tablet/tablet_snow.png';
import TABLET_MAGNESIUM_PNG from '../../assets/images/tablet/tablet_magnesium.png';
import TABLET_BANK_PNG from '../../assets/images/tablet/tablet_bank.png';
import TABLET_CHECK_PNG from '../../assets/images/tablet/tablet_check.png';
import TABLET_CALENDAR_PNG from '../../assets/images/tablet/tablet_calendar.png';
import TABLET_BATTERY_PNG from '../../assets/images/tablet/tablet_battery.png';
import TABLET_MEMO_PNG from '../../assets/images/tablet/tablet_memo.png';
import TABLET_TACK_PNG from '../../assets/images/tablet/tablet_tack.png';
import TABLET_PROGRESS_PNG from '../../assets/images/tablet/tablet_progress.png';
import TABLET_SHIPPING_PNG from '../../assets/images/tablet/tablet_shipping.png';

import MOBILE_SNOW_PNG from '../../assets/images/mobile/tablet_snow.png';
import MOBILE_MAGNESIUM_PNG from '../../assets/images/mobile/tablet_magnesium.png';
import MOBILE_BANK_PNG from '../../assets/images/mobile/tablet_bank.png';
import MOBILE_CHECK_PNG from '../../assets/images/mobile/tablet_check.png';
import MOBILE_CALENDAR_PNG from '../../assets/images/mobile/tablet_calendar.png';
import MOBILE_BATTERY_PNG from '../../assets/images/mobile/tablet_battery.png';
import MOBILE_MEMO_PNG from '../../assets/images/mobile/tablet_memo.png';
import MOBILE_TACK_PNG from '../../assets/images/mobile/tablet_tack.png';
import MOBILE_PROGRESS_PNG from '../../assets/images/mobile/tablet_progress.png';
import MOBILE_SHIPPING_PNG from '../../assets/images/mobile/tablet_shipping.png';

interface PolstaProps {}

const POLESTAT_LIST = [
  {
    name: 'snow',
    image: PC_POLESTAT_PNG,
  },
  {
    name: 'magnesium',
    image: PC_MAGNESIUM_PNG,
  },
  {
    name: 'void',
    image: PC_VOID_PNG,
  },
];

const ICON_LIST = [
  {
    name: '보조금 소진 전\n치량확보',
    image: PC_BANK_PNG,
  },
  {
    name: "복잡한 전기차\n'보조금 신정절차'는\n SK렌터카 대신!",
    image: PC_CHECK_PNG,
  },
  {
    name: "SK 렌터카만의\n'빠른차량 출고'",
    image: PC_CALENDAR_PNG,
  },
  {
    name: '구매시,\n 1년 무료 충전 혜택',
    image: PC_BATTERY_PNG,
  },
];
const CARD_LIST = [
  {
    name: 'step1',
    image: PC_MEMO_PNG,
  },
  {
    name: 'step2',
    image: PC_TACK_PNG,
  },
  {
    name: 'stp3',
    image: PC_PROGRESS_PNG,
  },
  {
    name: 'step4',
    image: PC_SHIPPING_PNG,
  },
];
const NOTICE_LIST = [
  {
    title: '폴스타 사전예약 등록',
    contents: [
      '풀스타 사전예약 등록 · 사전예약 등록 : 2022.03.03 ~ 03.17',
      '사전예약 차종 : Polestar 2 Long Range Single Motor',
      '사전예약 등록해 주신 고객님 대상으로 신청 순서에 따라 계약 가능 시점에 SK렌터카에서 연락드립니다.',
    ],
  },
  {
    title: '혜택 관련 안내',
    contents: ['SK렌터카 구매 고객을 대상으로 1년 무료 충전 혜택 제공'],
  },
  {
    title: '기타 안내사항',
    contents: [
      '차량별 렌탈료 등은 제조사 가격 및 지자체 보조금 등이 확정되는 시점 이후 안내 가능합니다.',
      '개인/개인사업자 및 법인의 신용도에 따라 계약 가능 여부 및 렌탈료의 변동이 있을 수 있습니다.',
      '정부 및 지자체 보조금 정책과 제조사 사정에 따라서 차량 별 보조금 지급 여부 및 예상 인도 일정이 변경될 수 있습니다.',
      '본 사전계약은 대상 차량 재고 소진 시 또는 차량 제조사 사정에 따라 조기 마감 및 혜택 변동 가능합니다.',
      '렌탈료는 계약 시 선택하는 조건(차량 옵션, 보험, 담보 등)에 따라 차이가 발생할 수 있습니다.',
      '사전예약 신청 고객수를 고려하여 사전 고지없이 조기마감될 수 있습니다.',
    ],
  },
];

const Polestat: React.FC<PolstaProps> = () => {
  const [screenWidth, setsScreenWidth] = useState(window.innerWidth);
  const [polestatList, setPolestatList] = useState(POLESTAT_LIST);
  const [iconList, setIconList] = useState(ICON_LIST);
  const [cardList, setCardList] = useState(CARD_LIST);
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
      setPolestatList([
        {
          name: 'snow',
          image: TABLET_SNOW_PNG,
        },
        {
          name: 'magnesium',
          image: TABLET_MAGNESIUM_PNG,
        },
      ]);

      setIconList([
        {
          name: '보조금 소진 전\n치량확보',
          image: TABLET_BANK_PNG,
        },
        {
          name: "복잡한 전기차\n'보조금 신정절차'는\n SK렌터카 대신!",
          image: TABLET_CHECK_PNG,
        },
        {
          name: "SK 렌터카만의\n'빠른차량 출고'",
          image: TABLET_CALENDAR_PNG,
        },
        {
          name: '구매시,\n 1년 무료 충전 혜택',
          image: TABLET_BATTERY_PNG,
        },
      ]);
      setCardList([
        {
          name: 'step1',
          image: TABLET_MEMO_PNG,
        },
        {
          name: 'step2',
          image: TABLET_TACK_PNG,
        },
        {
          name: 'stp3',
          image: TABLET_PROGRESS_PNG,
        },
        {
          name: 'step4',
          image: TABLET_SHIPPING_PNG,
        },
      ]);
    } else {
      setPolestatList(POLESTAT_LIST);
    }
  }, [screenWidth]);

  return (
    <StyledMain>
      <Banner />
      <Section>
        <StyledArticle top={5} left={2} bottom={5}>
          <StyledBox>
            <StyledPolestatTitle textAlign="left" lineHeight={100} className="tablet__polestat-title">
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
            className="tablet__sk-title"
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
            className="tablet__way-title"
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
            className="tablet__reservation-title"
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

const StyledBox = styled.div``;

const StyledArticle = styled.article<{ top?: number; left?: number; bottom?: number }>`
  margin: 0 auto;
  padding: ${(props) => props.top}% ${(props) => props.left}% ${(props) => props.bottom}%;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 5%;
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

  .tablet__polestat-title {
    ${({ theme }) => theme.breakpoints.tablet} {
      margin-top: 7%;
      font-weight: 400;
      font-size: 80px;
      line-height: 100%;
    }
  }
  &.tablet__sk-title {
    ${({ theme }) => theme.breakpoints.tablet} {
      padding-top: 5%;
      font-weight: 700;
      font-size: 36px;
      line-height: 140%;
    }
  }
  &.tablet__reservation-title {
    ${({ theme }) => theme.breakpoints.tablet} {
      padding-top: 7%;
      font-size: 20px;
      line-height: 27px;
    }
  }

  &.tablet__way-title {
    ${({ theme }) => theme.breakpoints.tablet} {
      margin: 3% 0;
      font-weight: 700;
      font-size: 36px;
      line-height: 140%;
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
`;

const StyledReservationItem = styled.li`
  width: 243px;
  margin-right: 2%;
  text-align: center;

  &:last-of-type {
    margin-right: 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    img {
      width: 220px;
      width: 100%;
      margin-right: 2%;
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
`;

const StyledFooter = styled.footer`
  background: #050505;
  padding: 5% 0;
  text-align: center;
`;

const StyledAddress = styled.address`
  margin-bottom: 5px;
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #cdcdcd;
`;
