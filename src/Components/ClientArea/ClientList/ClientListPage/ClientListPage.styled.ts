import styled from "styled-components";

export const ClientsListWrapper = styled.div`
display: flex;
justify-content: center;
`

export const ClientsWidthWrapper = styled.div<({ $isMobile: boolean }) >`
width: ${(props) => props.$isMobile ? '100%' : '80%'};
margin-top: 15px;
`

export const AddAssignmentButtonWrapper = styled.div<({ $isMobile: boolean }) >`
position: ${props => props.$isMobile ? 'fixed' : 'absolute'};
left: ${props => props.$isMobile ? '33%' : 0};
top: ${props => props.$isMobile ? '88%' : '10%'};
width: 130px;
z-index: 2;
`
export const AssignmentAmountCardWrapper = styled.div<({ $isMobile: boolean }) >`
display: flex;
flex-direction: ${(props) => props.$isMobile ? 'column' : 'row'};
justify-content:  ${(props) => props.$isMobile ? 'center' : 'space-between'};
`

export const mainTableWrapper = styled.div`
width: 100 %;
height: 100 %;
`

export const paginationWrapper = styled.div`
position: absolute;
top: 96 %;
left: 50 %;
transform: translate(-50 %, -50 %);
`

export const topSectionWrapper = styled.div`
width: 90%;
// margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
