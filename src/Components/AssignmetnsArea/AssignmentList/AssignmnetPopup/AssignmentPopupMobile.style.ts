import styled from 'styled-components';
import Box from '@mui/material/Box';

export const StyledModalBox = styled(Box) <({ $isMobile: boolean }) >`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.$isMobile ? '100%' : '80%'};
`;
