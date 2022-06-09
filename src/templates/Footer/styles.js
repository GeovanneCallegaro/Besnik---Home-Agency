/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 60px;
    gap: 680px;

    @media (max-width: 1300px) {
      width: 800px;
      gap: 550px;
    }
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`

  `}
`;

export const SocialMediaContainer = styled.div`
  ${({ theme }) => css`

    a {
      text-decoration: none;
    }

    .icon {
      font-size: 2.5rem;
      cursor: pointer;
      margin-left: 10px;
      color: #000;
    }
  `}
`;
