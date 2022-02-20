import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  gap: 145px;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 145px;
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    cursor: pointer;
    position: absolute;
    top: 145px;
    border: 0;
    background: ${(props) => props.theme.colors.primary};
    width: 135px;
    height: 41px;
    border-radius: 5px;
    font-size: 16px;
    box-shadow: 5px 0px 8px 8px #00000022;

    p {
      margin-left: 20px;
    }

    @media (max-width: 700px) {
      width: 140px;
      margin-left: 15px;
    }
  }
`;

export const ArrowContainer = styled.div`
  & > span {
    filter: ${(props) => props.theme.colors.svg};
    position: relative;
    bottom: 97px;
    left: 32px;

    @media (max-width: 700px) {
      bottom: 50px;
    }
  }
`;
