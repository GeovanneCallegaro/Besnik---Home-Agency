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
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    h2 {
      font-family: ${theme.fonts.primaryFont};
      color: #FFF;
      font-size: 2.4rem;
      font-weight: 500;
    }

    p {
      font-family: ${theme.fonts.primaryFont};
      color: #FFF;
      font-size: 1.3rem;
      line-height: 60px;
      font-weight: 400;
    }

  `}
`;

export const ImageIllustration = styled.div`
  ${({ theme }) => css`
    margin-top: -30px;

  `}
`;