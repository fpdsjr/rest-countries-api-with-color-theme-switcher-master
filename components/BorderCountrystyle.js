import styled from "styled-components";

export const BorderCountryButton = styled.button`
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  margin-right: 10px;
  height: 30px;
  width: 97px;
  border-radius: 5px;
  margin: 5px;
  font-weight: 300;
`;
