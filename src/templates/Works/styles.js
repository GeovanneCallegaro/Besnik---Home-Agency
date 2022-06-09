/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    h2 {
      font-size: 3rem;
      margin-top: 10px;
      font-family: ${theme.fonts.primaryFont};
      color: ${theme.colors.primaryFontColor};
      font-weight: 600;

      @media (max-width: 610px) {
        font-size: 2.3rem;
      }
    }

    p {
      color: #5A6473;
      font-size: 1.4rem;
      width: 420px;
      text-align: center;
      font-family: ${theme.fonts.primaryFont};

      @media (max-width: 610px) {
        width: 300px;
      }
    }
  `}
`;
