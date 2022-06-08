/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
  `}
`;

export const SectionUpper = styled.div`
  ${({ theme }) => css`
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    gap: 370px;
    margin-top: 40px;
  `}
`;

export const TextEmprise = styled.div`
  ${({ theme }) => css`

    img {
      width: 100px;
    }

    p {
      color: #7D8589;
      font-family: ${theme.fonts.primaryFont};
      font-size: 1.2rem;
      font-weight: 300;
      text-indent: 4px;
    }
  `}
`;

export const RatedEmprise = styled.div`
  ${({ theme }) => css`
    img {
      margin-left: 60px;
      width: 100px;
    }

    p {
      color: #7D8589;
      font-family: ${theme.fonts.primaryFont};
      font-size: 1.2rem;
      font-weight: 300;
      text-indent: 4px;
      margin-top: 5px;
    }
  `}
`;
