import styled, { keyframes } from "styled-components";
import Nav from "./Nav";

const Container = styled.div`
  width: 390px;
  height: 78px;
  position: fixed;
  z-index: 1000;
  background: var(--light);
`;

const RollingBar = styled.div`
  width: 100%;
  height: 23px;
  background: var(--accent);
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
`;

const marquee = keyframes`
  0% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-50%);
  }
`;

const RollingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  color: var(--light);
  font-weight: 300;
  font-size: 0.8rem;

  & > span {
    display: inline-block;
    padding-right: 200px;
  }

  animation: ${marquee} 10s linear infinite;
`;

const Header = () => {
  return (
    <Container>
      <RollingBar>
        <RollingText>
          <span>1초 회원가입하고 냠픽쿠폰받기</span>
          <span>1초 회원가입하고 냠픽쿠폰받기</span>
        </RollingText>
      </RollingBar>
      <Nav />
    </Container>
  );
};

export default Header;
