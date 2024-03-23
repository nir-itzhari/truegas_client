import styled from "styled-components";


export const addButtonWrapper = styled.div`
    display: flex;
    padding: 15px;
    flex-direction: row;
    gap: 10px;
    width: calc(100% - 16px);
    margin: 10px;
    color: white;
    align-items: center;
    background-color: #ef8e3c;
    border-radius: 12px;
    cursor: pointer;
    justify-content: center;
    letter-spacing: 3px;
`


export const addButton = styled.span`
    font-size: 25px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`

export const addText = styled.span`
    font-weight: 600;
`