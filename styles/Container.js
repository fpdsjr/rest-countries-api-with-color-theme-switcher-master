import styled from "styled-components";

export const Container = styled.section`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
