/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1300px;
    margin-top: 40px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 55px;

    @media (max-width: 1300px) {
      width: 800px;
    }

    @media (max-width: 810px) {
      width: 600px;
    }
  `}
`;
