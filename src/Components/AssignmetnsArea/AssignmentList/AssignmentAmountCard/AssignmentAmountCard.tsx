import { Card } from 'primereact/card';
import { useEffect } from 'react';
import { MdAssignment } from "react-icons/md";
import * as styled from './AssignmentAmountCard.styled'

export const AssignmentAmountCard = () => {

    useEffect(() => {

    }, [])

    return (
        <styled.CardWrapper dir='ltr'>
            <styled.AssignmentContainer>
                <styled.AssignmentIcon><MdAssignment fontSize='30px' /></styled.AssignmentIcon>
                <styled.AssignmentDetails>
                    <styled.AssignmentTitle>משימות</styled.AssignmentTitle>
                    <styled.AssignmentCount>50</styled.AssignmentCount>
                </styled.AssignmentDetails>
            </styled.AssignmentContainer>
            <styled.AdditionalInfo>
                <span>נוספו <styled.NewAssignmentCount>6</styled.NewAssignmentCount> משימות חדשות</span>
            </styled.AdditionalInfo>
        </styled.CardWrapper>
    );
}
