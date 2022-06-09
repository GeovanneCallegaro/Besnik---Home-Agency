/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    flex-wrap: wrap;

    img {
      width: 35px;
      height: 35px;
      align-self: center;
    }

    h4 {
      font-family: ${theme.fonts.primaryFont};
      font-weight: 500;
      color: #3B3C45;
      font-size: 1.5rem;
      text-align: center;
      align-self: center;
      margin-top: 10px;
    }

    @media (max-width: 1300px) {
      width: 250px;
      height: 250px;
    } 

    @media (max-width: 810px) {
      width: 200px;
      height: 200px;
      margin-top: 40px;
    } 

    @media (max-width: 610px) {
      width: 150px;
      height: 150px;
      margin-top: 80px;
    } 
  `}
`;
