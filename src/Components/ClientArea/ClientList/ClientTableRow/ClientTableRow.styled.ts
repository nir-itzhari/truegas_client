import styled from "styled-components";


export const rowWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column
`


export const rowContent = styled.div`
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: 0.8rem;
    direction: rtl;
    font-family: IBM Plex Sans Hebrew, sans-serif;
    text-align: center;
    border-width: 95%;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    cursor: pointer;
    `
    
    export const row = styled.div`
    background-color: whithtsmoke;
`


export const buttonWrapper = styled.div`

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