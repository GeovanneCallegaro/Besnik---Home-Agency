/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, background }) => css`
    background-color: ${
      background ? theme.colors.buttonBgColor : 'transparent'
    };
    padding: 8px 25px;
    color: ${background ? '#FFFFFF' : theme.colors.buttonBgColor};
    margin-right: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-family: ${theme.fonts.primaryFont};
  `}
`;
