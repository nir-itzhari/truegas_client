import { Table, TableRow } from "@mui/material";
import styled from "styled-components";

export const topSectionWrapper = styled.div`
width: 90%;
// margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const loaderContainer = styled.div`
text-align: center;
width: 100%;
margin: 10% 0;
`

export const spinnerProgress = styled.div`
display: inline-block;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const noResult = styled.div<({results: string})>`
display: ${(props) => props.results === 'true' ? 'none' : 'inline-flex'};
direction: rtl;
flex-direction: row;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const mainTableWrapper = styled.div`
width: 100%;
height: 100%;
`

export const paginationWrapper = styled.div`
position: absolute;
top: 96%;
left: 50%;
transform: translate(-50%, -50%);
`
// export const errorData = styled.div`
// text-align: center;
// width: 100%;
// margin: 5% 0;
// `

// export const tableWrapper = styled(Table)`
// max-width: 650;
// `


// export const thWrapper = styled(TableRow)`
// background-color: orange;

// `

// export const trWrapper = styled(TableRow)`
// background-color: #cccccc2b;

// &:hover {
//     background-color: #0000002b;
//     cursor: pointer;
// }
// `