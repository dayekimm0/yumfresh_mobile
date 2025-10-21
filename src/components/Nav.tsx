import styled from "styled-components";
import Logo from "../imgs/Logo.svg";
import searchIcon from "../imgs/search.svg";

const Container = styled.div`
  width: 390px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light);
`;

const Icon = styled.div`
  width: 68px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  img {
    width: 20px;
    cursor: pointer;
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    background: none;
    font-family: "GmarketSans";
    font-size: 1rem;
    cursor: pointer;
    &:first-of-type {
      border-right: 1px solid #000;
    }
  }
`;

const Nav = () => {
  return (
    <Container>
      <Icon>
        <img src={Logo} alt="logo" />
      </Icon>
      <NavIcon>
        <Btns>
          <button>냠프레시</button>
          <button>냠직구</button>
        </Btns>
        <img src={searchIcon} alt="search" />
      </NavIcon>
    </Container>
  );
};

export default Nav;
