import styled from 'styled-components';
import { Card } from 'primereact/card';

export const CardWrapper = styled(Card)`
    width: 24%;
    margin-bottom: 5px;
    border-radius: 12px;
`;

export const AssignmentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
`;

export const AssignmentIcon = styled.div`
    // Your styles for the icon here
`;

export const AssignmentDetails = styled.div`
    text-align: right;
`;

export const AssignmentTitle = styled.span`
    font-weight: 600;
`;

export const AssignmentCount = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: orange;
`;

export const AdditionalInfo = styled.div`
    text-align: right;
    padding: 5px 0;
`;

export const NewAssignmentCount = styled.span`
    color: green;
    font-weight: 600;
`;