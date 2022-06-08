/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 1300px;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    gap: 350px;
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.primaryFontColor};
      font-family: ${theme.fonts.primaryFont};
      font-size: 3rem;
      font-weight: 600;
    }

    p {
      color: #5A6473;
      font-size: 1.4rem;
      font-weight: 300;
      font-family: ${theme.fonts.primaryFont};
      margin-top: -5px;
    }
  `}
`;