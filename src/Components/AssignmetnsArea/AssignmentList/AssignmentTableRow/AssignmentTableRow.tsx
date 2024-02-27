import * as styled from './AssignmentTableRow.styled';
import { useState } from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import dayjs from 'dayjs';
import { IoIosImages } from "react-icons/io";
import assignmentService from '../../../../Services/AssignmentServices';
import AssignmentModel from '../../../../Models/AssignmentModel';



interface Props {
    row: AssignmentModel;
}

export const AssignmentTableRow = ({ row }: Props): JSX.Element => {
    const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleRowClick = (id: string) => {
        setSelectedRowId(prevId => (prevId === id ? null : id));
    };
    const handleDelete = async (e: React.MouseEvent<HTMLDivElement>, _id: string) => {
        e.stopPropagation();
        console.log('Row to delete: ' + _id)
        try {
            await assignmentService.deleteOneAssignment(_id)
            alert('Delete Clicked!');
        } catch (error: any) {
            console.log(error.message)
        }
    };

    return (
        <>
            <styled.rowContent onClick={() => handleRowClick(row._id)}>
                {/* Render row content */}
                <styled.row>{row.date ? dayjs(row.date).format('DD/MM/YYYY') : ""}</styled.row>
                <styled.row>{row.title}</styled.row>
                <styled.row key="image">
                    <IoIosImages fontSize={30} />
                </styled.row>
                <styled.row>{row.isDone && <IoCheckmarkDoneCircle style={{ fontSize: '30px', color: 'green' }} />}</styled.row>
                {/* Render buttons */}
                <styled.buttonWrapper>
                    <styled.editButton onClick={(e) => { e.stopPropagation(); navigate('/update-client/' + row._id) }}><FiEdit /></styled.editButton>
                </styled.buttonWrapper>
                <styled.buttonWrapper>
                    <styled.deleteButton onClick={(e) => handleDelete(e, row._id)}><MdDeleteForever /></styled.deleteButton>
                </styled.buttonWrapper>
                {/* Render arrow icon based on selected row */}
                <styled.arrowDownWrapper>
                    {selectedRowId === row._id ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </styled.arrowDownWrapper>
            </styled.rowContent>
            {/* {selectedRowId === row._id && ( */}
                <styled.rowContentOpen $selected={selectedRowId === row._id}>
                    <div>
                        NEW ROW
                    </div>
                </styled.rowContentOpen>
            {/* )} */}
        </>
    );
};
