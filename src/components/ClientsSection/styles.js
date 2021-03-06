/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
  `}
`;

export const SectionUpper = styled.div`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    gap: 370px;
    margin-top: 40px;

    @media (max-width: 1300px) {
      width: 800px;
      gap: 360px;
    }

    @media (max-width: 810px) {
      width: 600px;
      gap: 160px;
    }

    @media (max-width: 610px) {
      width: 400px;
      gap: 50px;
    }

    @media (max-width: 410px) {
      width: 300px;
      gap: 0px;
    }
  `}
`;

export const TextEmprise = styled.div`
  ${({ theme }) => css`

    img {
      width: 100px;
    }

    p {
      color: #7D8589;
      font-family: ${theme.fonts.primaryFont};
      font-size: 1.2rem;
      font-weight: 300;
      text-indent: 4px;

      @media (max-width: 610px) {
        font-size: 1rem;
      }

      @media (max-width: 410px) {
        text-indent: 0px;
      }
    }
  `}
`;

export const RatedEmprise = styled.div`
  ${({ theme }) => css`
    img {
      margin-left: 60px;
      width: 100px;

      @media (max-width: 610px) {
        margin-left: 20px;
      }
    }

    p {
      color: #7D8589;
      font-family: ${theme.fonts.primaryFont};
      font-size: 1.2rem;
      font-weight: 300;
      text-indent: 4px;
      margin-top: 5px;

      @media (max-width: 610px) {
        display: none;
      }
    }
  `}
`;
