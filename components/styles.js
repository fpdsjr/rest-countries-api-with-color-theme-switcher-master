import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  height: 80px;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  box-shadow: 2px 1px 3px 1px #00000020;
  & h1 {
    font-size: 24px;
  }

  & button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 15px;
  }

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

export const ImageWrap = styled.span`
  & > span {
    filter: ${(props) => props.theme.colors.svg};
    position: relative;
    top: 5px;
    right: 5px;
  }
`;

export const HeaderSizer = styled.div`
  display: flex;
  width: 1273px;
  justify-content: space-between;
`;

export const DarkModeDiv = styled.div`
  cursor: pointer;
`;
