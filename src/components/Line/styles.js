/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, width }) => css`
    width: ${width}px;
    background-color: ${theme.colors.primaryFontColor};
    height: 5px;
    border-radius: 2px;
  `}
`;
