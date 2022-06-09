/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 120px;
    margin-bottom: 20px;
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    width: 1100px;
    height: 376px;
    background-color: #063183;
    margin: 0 auto;
    border-radius: 10px;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1300px) {
      width: 800px;
    }

    @media (max-width: 810px) {
      width: 600px;
    }

    @media (max-width: 610px) {
      width: 400px;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`

    @media (max-width: 610px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  
    h2 {
      font-family: ${theme.fonts.primaryFont};
      color: #FFF;
      font-size: 2.4rem;
      font-weight: 500;

      @media (max-width: 1300px) {
        font-size: 4rem;
      }

      @media (max-width: 610px) {
        font-size: 3rem;
      }
    }

    p {
      font-family: ${theme.fonts.primaryFont};
      color: #FFF;
      font-size: 1.3rem;
      line-height: 60px;
      font-weight: 400;

      @media (max-width: 1300px) {
        font-size: 1.6rem;
      }

      @media (max-width: 610px) {
        font-size: 1.5rem;
        line-height: 40px;
      }
    }

  `}
`;

export const ImageIllustration = styled.div`
  ${({ theme }) => css`
    margin-top: -30px;

    @media (max-width: 1300px) {
      width: 300px;
      height: 300px;
      display: none;
    }
  `}
`;
