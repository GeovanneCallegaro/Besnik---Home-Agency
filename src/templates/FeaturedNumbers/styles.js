/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
        width: 350px;
        height: 350px;
        right: 250px;
        top: 10px;
      }
    }

    img.house {
      width: 600px;
      height: 600px;
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
    }

    p {
      width: 300px;
      font-family: ${theme.fonts.primaryFont};
      color: #5A6473;
      font-size: 1.5rem;
    }
  `}
`;

export const InfosContainer = styled.div`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    @media (max-width: 1300px) {
      width: 800px;
      gap: 60px;
    }
  `}
`;
