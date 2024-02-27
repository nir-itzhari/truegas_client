import styled from "styled-components";


// export const overlay = styled.div<{ show: string }>`
// position: fixed;
// width: 100%;
// height: 100%;
// display: ${(props) => props.show === 'true' ? 'block' : 'none'};
// opacity: ${(props) => props.show === 'true' ? 1 : 0};
// top: 0;
// left: 0;
// z-index: 999;
// background-color: #000000ba;
// `



export const tableWrapper = styled.div`
width: 100%;
height: 80%;
`

export const tableContentWrapper = styled.div`
    width: 85%;
    border: 1px inset transparent;
    border-radius: 26px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }

}
`

export const thWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: orange;
    padding: 15px 0;
    border-radius: 25px;
    border-bottom: 1px solid gray;
    z-index: 1;
    justify-content: center;
`

export const thContentWrapper = styled.div`
display: grid;
width: calc(100% - 60px);
direction: rtl;
margin-right: 10px;
grid-template-columns: repeat(9, 1fr);
text-align: center;
`


export const th = styled.div`
font-weight: 700;
`


export const rowWrapper = styled.div`
    width: 98%;
    height: 90%;
    margin: -5px auto;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid transparent;
    background-color: #76a7ee3b;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;    
`

export const rowBorder = styled.div`
   width: 95%;
   margin: 0 auto;
   border-bottom: 1px solid #80808066;
`

export const rowContentWrapper = styled.div`
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 5px;
    border-radius: 25px;

    
    &:hover {
        background-color: #ffffff9e;
    }

&:nth-child(odd) {
    // background-color: white;

}
`
