/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 115px;

    & > img {
      width: 510px;
      margin-right: -20px;
    }
  `}
`;
