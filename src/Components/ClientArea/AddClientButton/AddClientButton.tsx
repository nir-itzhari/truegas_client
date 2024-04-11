import { useNavigate } from 'react-router-dom';
import * as styled from './addClientButton.styled'
import { MdGroupAdd } from "react-icons/md";


export const AddClientButton = () => {
    const navigate = useNavigate()
    const handleAddClick = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate('/addClient')
        e.stopPropagation()
    }


    return (
        <styled.addButtonWrapper onClick={handleAddClick}>
            <styled.addButton>
                {<MdGroupAdd />}
            </styled.addButton>
            <styled.addText>
                {'הוסף לקוח'}
            </styled.addText>
        </styled.addButtonWrapper>
    )
}