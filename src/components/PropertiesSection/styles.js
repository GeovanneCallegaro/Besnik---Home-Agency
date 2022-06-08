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
    gap: 55px;
  `}
`;
