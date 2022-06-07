/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LinksContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  `}
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
  `}
`;
