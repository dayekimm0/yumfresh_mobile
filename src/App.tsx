import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Header from "./components/Header";
import MainSlide from "./components/MainSlide";

const Container = styled.div`
  width: 390px;
  height: 844px;
  margin-top: 78px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <MainSlide />
      </Container>
    </>
  );
}

export default App;
