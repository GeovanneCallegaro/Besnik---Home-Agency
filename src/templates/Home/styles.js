/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.bgColor};
  `}
`;
