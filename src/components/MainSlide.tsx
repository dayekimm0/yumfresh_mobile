import styled from "styled-components";
import Main from "../imgs/mainBg.png";

const Container = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainTxt = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-40%, -50%);
  color: var(--sub);
  display: flex;
  flex-direction: column;
  align-items: start;
  p {
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 2.7rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const MainSlide = () => {
  return (
    <Container>
      <img src={Main} alt="main" />
      <MainTxt>
        <p>냠프레시 회원에게 드리는 특별한 추석맞이 혜택</p>
        <h2>냠프레시는</h2>
        <h1>쌀・잡곡도 산지직송</h1>
        <p>지금 바로 구매하러 가기</p>
      </MainTxt>
    </Container>
  );
};

export default MainSlide;
