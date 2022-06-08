/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;

    img {
      width: 35px;
      height: 35px;
      align-self: center;
    }

    h4 {
      font-family: ${theme.fonts.primaryFont};
      font-weight: 500;
      color: #3B3C45;
      font-size: 1.5rem;
      text-align: center;
      align-self: center;
      margin-top: 10px;
    }
  `}
`;
