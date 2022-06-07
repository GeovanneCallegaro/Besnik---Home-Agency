/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 15px;
    margin: 0 auto;
  `}
`;

export const LogoAndMenu = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-right: 40px;
`;

export const ButtonsSection = styled.div`
  display: flex;
  padding: 5px;
`;
