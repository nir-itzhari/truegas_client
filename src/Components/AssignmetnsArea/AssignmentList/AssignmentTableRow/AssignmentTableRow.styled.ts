import styled from 'styled-components';


export const rowWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column
`

export const rowContent = styled.div`
    position: relative;
    width: 100%;
    direction: rtl;
    font-size: 0.8rem;
    font-family: IBM Plex Sans Hebrew, sans-serif;
    text-align: center;
    border-width: 95%;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    cursor: pointer;
`;

export const rowContentOpen = styled.div<{ $selected: boolean }>`
    overflow: hidden; /* Ensure the content doesn't overflow */
    display:flex;
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: right;
    // height: ${props => props.$selected ? 'auto' : '0'}; /* Initially set height to 0 when not selected */
    max-height: ${props => props.$selected ? '100px' : '0'}; /* Set a maximum height when selected */
    opacity: ${props => props.$selected ? 1 : 0}; /* Initially set opacity to 0 when not selected */
    transition: max-height 0.3s ease, opacity 0.3s ease;
`;

export const row = styled.div`
    // background-color: whitesmoke;
`


export const buttonWrapper = styled.div`

`

export const actionButtons = styled.div`
    display: flex;
    gap: 15px;
`

export const editButton = styled.div`
    cursor: pointer;
    display: inline-block;
`


export const deleteButton = styled.div`
    cursor: pointer;
    display: inline-block;
`

export const arrowDownWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(50%, -50%);

* {
    font-size: 20px;
}
`

export const popupContent = styled.div` 

`