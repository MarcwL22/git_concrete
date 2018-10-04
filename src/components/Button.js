import styled, { css } from 'styled-components';

export const Button = styled.a`
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 3px;
  border: 1px solid #000;
  transition: all 0.2s;
  margin: 0 1rem;
  cursor: pointer;
  ${props =>
    props.outline
      ? css`
          background-color: #000;
          color: #fff;
          &:hover {
            background-color: #fff;
            color: #000;
          }
        `
      : css`
          &:hover {
            background-color: #000;
            color: #fff;
          }
        `};
  ${props =>
    props.small
      ? css`
          font-size: 1.4rem;
          padding: 0.5rem;
        `
      : css`
          font-size: 1.6rem;
          padding: 1rem 2rem;
        `};
`;
