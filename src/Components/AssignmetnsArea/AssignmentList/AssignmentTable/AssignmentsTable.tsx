import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import AssignmentModel from '../../../../Models/AssignmentModel';
import AssignmentsTableRow from '../AssignmentTableRow/AssignmentsTableRow';
import { CircularProgress } from '@mui/material';
import { useMobile } from '../../../hooks/useMobileHook';

interface Props {
    assignmentList: AssignmentModel[]
}


const AssignmentsTable: React.FC<Props> = (args) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [assignments, setAssignments] = useState<AssignmentModel[]>()
    const isMobile = useMobile()


    const collapseThCells = ['תאריך', 'סוג עבודה', 'פירוט', 'בוצע', 'תמונות', 'מחיר', 'פעולות'];
    const collapseThCellsMobile = ['תאריך', 'סוג עבודה', 'פרטים'];


    const sortAssignmentList = (dataList: AssignmentModel[]): AssignmentModel[] => {
        return dataList.slice().sort((a: AssignmentModel, b: AssignmentModel) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                console.error('Invalid date found:', a.date, b.date);
                return 0;
            }

            return dateB.getTime() - dateA.getTime();
        });
    };

    useEffect(() => {
        if (args.assignmentList) {
            setAssignments(sortAssignmentList(args.assignmentList))
            setIsLoading(false)
        }   
    }, [args.assignmentList]);

    return (
        <TableContainer component={Paper} dir='rtl' style={{ marginTop: '15px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {!isMobile ?
                            collapseThCells.map((c, i) => <TableCell key={i} style={{ fontWeight: '600' }} align='right'>{c}</TableCell>)
                            :
                            collapseThCellsMobile.map((c, i) => <TableCell key={i} style={{ fontWeight: '600' }} align='right'>{c}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading ?
                        <>
                            <TableRow key={'loading'} style={{ height: '50px' }}>
                                <TableCell colSpan={10} style={{ textAlign: 'center' }}>
                                    <CircularProgress />
                                </TableCell>
                            </TableRow>
                        </>
                        :
                        assignments.map((row) => (
                            <AssignmentsTableRow key={row._id} row={row} isLoading={isLoading} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AssignmentsTable;
