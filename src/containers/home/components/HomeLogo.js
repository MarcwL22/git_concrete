import React from 'react';
import styled from 'styled-components';
// UIComponents
import { Heading1 } from '../../../components';

const LogoHeading = styled(Heading1)`
  margin-bottom: 5rem;
`;

const HomeLogo = () => <LogoHeading>GitChallenge</LogoHeading>;
export default HomeLogo;
