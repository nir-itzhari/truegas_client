import { useLocation, useNavigate } from 'react-router-dom';
import * as styled from './AddAssignmentButton.styled'
import { MdAssignmentAdd, MdGroupAdd } from "react-icons/md";
import { useEffect, useState } from 'react';


export const AddAssignmentButton = () => {
    const navigate = useNavigate()
    const handleAddClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        navigate('/assignments/addAssignment')
    }


    return (
        <styled.addButtonWrapper onClick={handleAddClick}>
            <styled.addButton>
                {<MdAssignmentAdd />}
            </styled.addButton>
            <styled.addText>
                {'הוספת משימה'}
            </styled.addText>
        </styled.addButtonWrapper>
    )
}