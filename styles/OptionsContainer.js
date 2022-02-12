import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 28px;
  width: 1283px;

  & input {
    width: 480px;
    height: 56px;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 5px;
    padding: 0px 50px;
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.text};
  }

  & select {
    padding: 0px 20px;
    margin-right: 5px;
    width: 200px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    border-radius: 5px;
    border: none;
  }
`;

export const SearchIconWrapper = styled.span`
  & > span {
    position: relative;
    right: 755px;
    top: 20px;
  }
`;
