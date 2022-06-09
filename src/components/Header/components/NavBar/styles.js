/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const linksShow = keyframes`
  to {
    transform: translateX(0);
  }

  from {
    transform: translateX(-80%);
  }

`;

export const LinksContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    animation: ${linksShow} 1s;

    .close {
      display: none;
      margin-top: 10px;

      @media (max-width: 810px) {
        display: block;
        font-size: 2rem;
        color: #FFF;
      }
    }

    @media (min-width: 810px) {
      display: flex !important;
    }

    @media (max-width: 810px) {
      position: absolute;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      top: 0;
      left: 0;
      display: none;
      justify-content: center;
    }
  `}
`;

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  @media (min-width: 810px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  ${({ theme }) => css`
    padding: 10px;
    list-style: none;
    cursor: pointer;
    font-size: 1.6rem;
    font-family: ${theme.fonts.primaryFont};
    color: #4F5361;
    font-weight: 500;

    @media (max-width: 1300px) {
      padding: 5px;
    }

    @media (max-width: 810px) {
      font-size: 2rem;
      padding: 10px;
      color: #FFF;
    }
  `}
`;
