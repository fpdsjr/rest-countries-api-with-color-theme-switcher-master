import styled from "styled-components";

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
`;
