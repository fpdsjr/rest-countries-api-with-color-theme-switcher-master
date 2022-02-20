import styled from "styled-components";

const hello = "tmj";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export const CountryInfosSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 33px;
  }

  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

export default hello;
