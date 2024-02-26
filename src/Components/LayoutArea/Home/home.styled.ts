import styled from "styled-components";


// export const homeContainer = styled.div`
//     text-align: center;
//     box-sizing: border-box;
//     padding: 10px;
// `


export const homeText = styled.div`
    font-size: 50px;
    font-weight: 700;
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

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity to your preference */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeText = styled.div`
  text-align:center;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;