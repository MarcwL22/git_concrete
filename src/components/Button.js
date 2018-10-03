import styled, { css } from 'styled-components';

export const Button = styled.a`
  color: purple;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 3px;
  border: 1px solid purple;
  transition: all 0.2s;
  cursor: pointer;
  ${props =>
    props.outline
      ? css`
          background-color: purple;
          color: #fff;
          &:hover {
            background-color: #fff;
            color: purple;
          }
        `
      : css`
          &:hover {
            background-color: purple;
            color: #fff;
          }
        `};
`;
