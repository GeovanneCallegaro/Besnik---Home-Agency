/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 600px;
    background-color: ${theme.colors.bgColor};
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
  `}
`;
