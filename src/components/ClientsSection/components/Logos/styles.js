/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 1300px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 200px;
    margin: 0 auto;
    fill: none;
  `}
`;

export const LogoEmprise = styled.img`
  ${({ theme }) => css`
    width: 110px;
    height: 110px;
  `}
`;
