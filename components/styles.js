import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  background: ${(props) => props.theme.colors.primary};

  & h1 {
    font-size: 26px;
  }

  & button {
    border: none;
    background: none;
    font-size: 16px;
  }
`;

export const ImageWrap = styled.span`
  & > span {
    position: relative;
    top: 5px;
    right: 10px;
    fill: red;
  }
`;
