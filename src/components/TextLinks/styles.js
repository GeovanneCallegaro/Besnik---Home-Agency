/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    p {
      color: #0689FF;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      font-family: ${theme.fonts.primaryFont};

      &::first-letter {
        text-transform: uppercase;
      }
    }

    img {
      margin-left: 5px;
      width: 20px;
      height: 10px;
    }
  `}
`;
