import React from 'react';
import styled from 'styled-components';
import Section from '../../atoms/Section';
import PC_POLSTA_BANNER_PNG from '../../../assets/images/pc/pc_banner.png';
import TABLET_BANNER_PNG from '../../../assets/images/tablet/tablet_banner.png';
import MOBILE_BANNER_PNG from '../../../assets/images/mobile/mobile_banner.png';
const Banner: React.FC = () => {
  return (
    <Section>
      <StyledBanner />
    </Section>
  );
};
export default Banner;

const StyledBanner = styled.div`
  width: 100%;
  height: 804px;
  background: center/cover url(${PC_POLSTA_BANNER_PNG});

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 900px;
    background: center/cover url(${TABLET_BANNER_PNG});
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    height: 583px;
    background: center/cover url(${MOBILE_BANNER_PNG});
  }
`;
