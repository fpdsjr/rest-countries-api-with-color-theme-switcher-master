import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  height: 80px;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;

  & h1 {
    font-size: 24px;
  }

  & button {
    border: none;
    background: none;
    font-size: 15px;
  }
`;

export const ImageWrap = styled.span`
  & > span {
    position: relative;
    top: 5px;
    right: 5px;
  }
`;

export const HeaderSizer = styled.div`
  display: flex;
  width: 1283px;
  justify-content: space-between;
`;
