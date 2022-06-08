/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const InfoContent = styled.div`
  ${({ theme }) => css`
    text-align: center;

    h4 {
      font-family: ${theme.fonts.primaryFont};
      color: ${theme.colors.primaryColorFont};
      font-weight: 600;
      font-size: 4rem;
    }

    p {
      color: #7B8087;
      font-size: 1.3rem;
      font-family: ${theme.fonts.primaryFont};
      margin-top: 10px;
      text-indent: -4px;
    }
  `}
`;
