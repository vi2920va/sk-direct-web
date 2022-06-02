import React, { useRef } from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import POLESTAT_PNG from '../../assets/images/mobile/mobile_banner.png';

const Observer: React.FC = () => {
  const ref = useRef(null);

  const isVisble = useIntersectionObserver({ root: null, rootMargin: '100px', threshold: 0.3, ref });

  return (
    <main>
      <StyledHeader>
        <h1>{!isVisble ? 'not in viewport' : 'in viewport'}</h1>
      </StyledHeader>
      <StyledSection>
        <StyledArtice>
          <img src={POLESTAT_PNG} ref={ref} alt="images" />
        </StyledArtice>
      </StyledSection>
    </main>
  );
};
export default Observer;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 50px;
  background: lightsteelblue;
  color: #fff;
  text-transform: uppercase;
`;

const StyledArtice = styled.article`
  img {
    width: 100%;
    height: 100%;
  }
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: darkslateblue;
`;
