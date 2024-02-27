import * as styled from './ClientTableRow.styled';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ClientModel } from '../../../../Models/ClientModel';
import clientService from '../../../../Services/ClientService';


interface Props {
    row: ClientModel;
}

export const ClientTableRow = ({ row }: Props): JSX.Element => {
    const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRowClick = (id: string) => {
        setSelectedRowId(prevId => (prevId === id ? null : id));
    };


    const handleDelete = async (e: React.MouseEvent<HTMLDivElement>, _id: string) => {
        e.stopPropagation();
        console.log('Row to delete: ' + _id)
        try {
            await clientService.deleteOneClient(_id)
            alert('Delete Clicked!');
        } catch (error: any) {
            console.log(error.message)
        }
    };

    return (
        <>
            <styled.rowContent onClick={() => handleRowClick(row._id)}>
                {Object.entries(row).map(([key, value]) => (
                    !['_id', 'user_id', 'assignment', 'assignment_id', 'updatedAt'].includes(key) && (
                        <styled.row key={key}>
                            {key === 'phoneNumber' ? (
                                Array.isArray(value) ? value.map(phone => `0${phone}`).join(', ') : value
                            ) : (
                                value
                            )}
                        </styled.row>
                    )
                ))}
                <styled.buttonWrapper>
                    <styled.editButton onClick={(e) => { e.stopPropagation(); navigate('/update-client/' + row._id) }}><FiEdit /></styled.editButton>
                </styled.buttonWrapper>
                <styled.buttonWrapper>
                    <styled.deleteButton onClick={(e) => handleDelete(e, row._id)}><MdDeleteForever /></styled.deleteButton>
                </styled.buttonWrapper>
                <styled.arrowDownWrapper>
                    {selectedRowId === row._id ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </styled.arrowDownWrapper>
            </styled.rowContent>
            {selectedRowId === row._id && (
                <styled.rowContent>
                    <div>
                        NEW ROW
                    </div>
                    {/* Render additional row content here */}
                    {/* You can add your content here which you want to show underneath the clicked row */}
                    {/* <AssignmentPopup assignmentDetails={row._id} onClose={() => setSelectedRowId(null)} /> */}
                </styled.rowContent>
            )}
        </>
    );
};