import { Card } from 'primereact/card';
import { useEffect, useState } from 'react';
import { MdAssignment } from "react-icons/md";
import * as styled from './AssignmentAmountCard.styled'
import store from '../../../../Redux/Store';
import assignmentService from '../../../../Services/AssignmentServices';
import { AmountCardModel } from '../../../../Models/AmountCardModel';
import { useMobile } from './../../../hooks/useMobileHook';

export const AssignmentAmountCard = () => {
    const [amountCard, setAmountCard] = useState<AmountCardModel>()
    const isMobile = useMobile()
    const fetch = async () => {
        try {
            const user_id = store.getState().authState.user._id
            const amountCard = await assignmentService.getCardAmount(user_id)
            if (amountCard) {
                setAmountCard(amountCard)
            }

        } catch (error: any) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetch()
    }, [])

    return (
        <styled.CardWrapper $isMobile={isMobile}>
            <styled.AssignmentContainer>
                <styled.AssignmentIcon><MdAssignment fontSize='30px' /></styled.AssignmentIcon>
                <styled.AssignmentDetails>
                    <styled.AssignmentTitle>משימות</styled.AssignmentTitle>
                    <styled.AssignmentCount>{amountCard?.totalAssignments}</styled.AssignmentCount>
                </styled.AssignmentDetails>
            </styled.AssignmentContainer>
            <styled.AdditionalInfo>
                <span style={{ display: 'flex', flexDirection: 'row-reverse', gap: 5 }}>
                    <styled.NewAssignmentCount>
                        {amountCard?.assignmentCount}
                    </styled.NewAssignmentCount>
                    <span>
                        משימות חדשות מתחילת השבוע
                    </span>
                </span>
            </styled.AdditionalInfo>
            <styled.AdditionalInfo>
                <span>הכנסות מתחילת שבוע: <styled.NewAssignmentCount>{amountCard?.totalIncome}₪</styled.NewAssignmentCount></span>
            </styled.AdditionalInfo>
        </styled.CardWrapper>
    );
}
