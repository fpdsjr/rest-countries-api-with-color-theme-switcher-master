import styled from "styled-components";

export const CountryInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 123px;

  p {
    margin-top: 12px;
    font-weight: 300;
  }

  span {
    font-weight: 300;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const SecondoryInfos = styled.div``;

export const BorderInfo = styled.div`
  margin-bottom: 50px;
`;
