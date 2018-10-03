import styled from 'styled-components';
import { BREAKPOINTS } from '../assets/variables';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  padding: 0;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    padding: 2rem;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    padding: 1rem;
  }
`;
