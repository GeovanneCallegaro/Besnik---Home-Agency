/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 320px;
    height: 360px;
    display: flex;
    flex-direction: column;

    @media (max-width: 410px) {
      width: 300px;
    }
  `}
`;

export const ImageProperty = styled.img`
  ${({ theme }) => css`
    width: 320px;
    height: 230px;

    @media (max-width: 410px) {
      width: 300px;
    }
`}
`;

export const InfosPropertySection = styled.div`
  ${({ theme }) => css`
    height: 130px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `}
`;

export const MasterInfos = styled.div`
  ${({ theme }) => css`
    margin-left: 30px;
    margin-top: 10px;

    @media (max-width: 410px) {
      margin-left: 20px;
    }

    h4 {
      color: ${theme.colors.primaryFontColor};
      font-family: ${theme.fonts.primaryFont};
      font-weight: 600;
      font-size: 1.7rem;
      line-height: 30px;
    }

    p {
      color: #A3A6AB;
      font-size: 1.3rem;
      font-family: ${theme.fonts.primaryFont};
      font-weight: 400;
    }
  `}
`;

export const SecondaryInfos = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 14px;
      height: 14px;
    }

    p {
      color: #4D4D52;
      font-family: ${theme.fonts.primaryFont};
      font-size: 1.2rem;
      margin-left: 5px;
      font-weight: 300;
    }
  `}
`;
