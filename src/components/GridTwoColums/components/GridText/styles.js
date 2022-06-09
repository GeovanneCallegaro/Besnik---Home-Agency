/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 500px;
    margin-left: 133px;

    p {
      font-family: ${theme.fonts.primaryFont};
      color:'#5A6473';
      font-weight: 300;
      font-size: 1.5rem;
      margin-bottom: 30px;
      margin-top: 40px;

      @media (max-width: 1300px) {
        margin-bottom: 15px;
        margin-top: 20px;
        font-size: 1.3rem;
      }
    }

    h1 {
      color: ${theme.colors.primaryFontColor};
      font-size: 5rem;
      font-weight: 700;
      font-family: ${theme.fonts.primaryFont};
      line-height: 50px;

      @media (max-width: 1300px) {
        font-size: 4rem;
      }
    }

    @media (max-width: 1300px) {
      margin-left: 0;
      width: 400px;
    }
  `}
`;
