import styled from "styled-components";


// export const homeContainer = styled.div`
//     text-align: center;
//     box-sizing: border-box;
//     padding: 10px;
// `


export const homeText = styled.div`
    position: relative;
    font-size: 50px;
    font-weight: 700;
    z-index: 1;
`


// import styled from 'styled-components';

// export const homeContainer = styled.div`
//     position: relative;
// `;

// export const imageContainer = styled.div`
//     position: relative;
//     width: 100%;
//     height: auto; /* Adjust height as needed */
// `;

// export const imageOverlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 99%;
//     background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
//     z-index: 999; /* Ensure the overlay is above the image */
// `;

export const HomeContainer = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.img<{ $screenWidth: number }>`
  width: ${props => props.$screenWidth}px;
  height: auto;
`;

export const sectionOne = styled.div`
position: absolute;
top: 0;
left: 0;
height: 75%;
width: 100%;
z-index: 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%);
  clip-path: ellipse(150% 87% at 93% 13%);
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartWrapper = styled.div`
  text-align: center;
  margin: 0 0 5px 0;
  z-index: 2;
  position: relative;
`