/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 115px;

    & > img {
      width: 510px;
      margin-right: -20px;

      @media (max-width: 1300px) {
        width: 400px;
        margin-top: 70px;
        margin-right: -30px;
      }

      @media (max-width: 960px) {
        width: 300px;
        margin-right: 0px;
      }

      @media (max-width: 810px) {
        width: 250px;
        margin-top: 120px;
      }

      @media (max-width: 610px) {
        display: none;
      }
    }

    @media (max-width: 1300px) {
      width: 800px;
      justify-content: space-around;
    }

    @media (max-width: 960px) {
      gap: 50px;
    }

    @media (max-width: 810px) {
      width: 600px;
      margin-top: 20px;
    }

    @media (max-width: 610px) {
      width: 400px;
    }

    @media (max-width: 410px) {
      width: 300px;
    }
  `}
`;
