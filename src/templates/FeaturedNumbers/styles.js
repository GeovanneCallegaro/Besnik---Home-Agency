/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    @media (max-width: 410px) {
      margin-bottom: -40px;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 1300px;
    align-items: center;
    justify-content: center;
    gap: 120px;
    margin: 0 auto;

    @media (max-width: 1300px) {
      width: 800px;
      gap: 0px;
    }

    @media (max-width: 810px) {
      width: 600px;
    }

    @media (max-width: 610px) {
      width: 400px;
    }

    @media (max-width: 410px) {
      width: 300px;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    img.card {
      width: 400px;
      height: 400px;
      position: absolute;
      z-index: 10;
      top: 20px;
      right: 230px;

      @media (max-width: 1300px) {
        width: 300px;
        height: 300px;
        right: 160px;
        top: -10px;
      }

      @media (max-width: 810px) {
        display: none;
      }
    }

    img.house {
      width: 600px;
      height: 600px;

      @media (max-width: 1300px) {
        width: 400px;
        height: 450px;
      }

      @media (max-width: 810px) {
        width: 300px;
        height: 400px;
      }

      @media (max-width: 610px) {
        display: none;
      }
    }

  `}
`;

export const InfosTextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: -100px;
    
    h2 {
      font-family: ${theme.fonts.primaryFont};
      color: ${theme.colors.primaryFontColor};
      font-size: 3rem;
      font-weight: 600;
      width: 240px;
      line-height: 50px;
      margin-top: 5px;
      margin-bottom: 20px;

      @media (max-width: 810px) {
        width: 210px;
        line-height: 35px;
      }

      @media (max-width: 810px) {
        width: 300px;
      }
    }

    p {
      width: 300px;
      font-family: ${theme.fonts.primaryFont};
      color: #5A6473;
      font-size: 1.5rem;

      @media (max-width: 810px) {
        font-size: 1.3rem;
        width: 250px;
      }

      @media (max-width: 610px) {
        width: 300px;
        font-size: 1.5rem;
        margin-bottom: 30px;
      }
    }

    @media (max-width: 810px) {
      margin-top: -30px;
    }

    @media (max-width: 610px) {
      margin-top: 0px;
    }
  `}
`;

export const InfosContainer = styled.div`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    flex-wrap: wrap;

    @media (max-width: 1300px) {
      width: 800px;
      gap: 60px;
    }

    @media (max-width: 810px) {
      width: 600px;
    }

    @media (max-width: 610px) {
      width: 400px;
      gap: 20px;
    }

    @media (max-width: 410px) {
      width: 300px;
    }
  `}
`;
