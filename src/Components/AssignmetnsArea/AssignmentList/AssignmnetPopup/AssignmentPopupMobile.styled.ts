import styled from 'styled-components';
import { Galleria } from 'primereact/galleria';
import { Button } from '@mui/material';

export const StyledModalBox = styled.div<({ $isMobile: boolean }) >`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const DetailsButton = styled(Button)`
  justify-content: flex-start !important;
`

export const GalleryWrapper = styled.div<({ $isMobile: boolean }) >`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: ${props => props.$isMobile ? '100%' : '80%'};
background-color: #fff;
border-radius: 25px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ImageGalleryTitle = styled.h3`
`

export const CloseButtonWrapper = styled.div`
display: inline-block;
position: absolute;
top: 15px;
right: 15px;
`;

export const CloseButton = styled(Button)`

`;

export const ImageGalleria = styled(Galleria)`
max-width: 300px;
`