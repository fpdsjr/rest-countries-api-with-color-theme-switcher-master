import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 335px;
  list-style: none;
  margin: 20px;
  border-radius: 5px;
  margin-right: 31px;
  margin-bottom: 55px;
`;

export const ImageWrapper = styled.span`
  & > span {
    border-radius: 5px 5px 0px 0px;
  }
`;

export const InfoCardContainer = styled.div`
  padding: 13px 26px;
  & h1 {
    font-size: 16px;
    font-weight: 900;
    margin-top: 10px;
    margin-bottom: 19px;
  }

  & li {
    margin-top: 5px;
    & span {
      font-size: 14px;
      font-weight: 600;
    }

    font-size: 14px;
    font-weight: 300;
  }
`;
