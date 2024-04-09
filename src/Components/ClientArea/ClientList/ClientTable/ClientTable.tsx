import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import ClientsTableRow from '../ClientTableRow/ClientsTableRow';
import { CircularProgress } from '@mui/material';
import { useMobile } from '../../../../Hooks/useMobileHook';
import { ClientModel } from '../../../../Models/ClientModel';

interface Props {
    clientList: ClientModel[]
}


const ClientTable: React.FC<Props> = (args) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [clients, setClients] = useState<ClientModel[]>()
    const isMobile = useMobile()


    const collapseThCells = [
        "שם",
        "עיר",
        "רחוב",
        "מספר בית",
        "מספר דירה",
        "קומה",
        "טלפון",
        "פעולות",
    ];
    const collapseThCellsMobile = [
        "שם",
        "עיר",
        "פרטים",
    ];


    useEffect(() => {
        if (args.clientList) {
            setClients(args.clientList)
            setIsLoading(false)
        }
    }, [args.clientList]);

    return (
        <TableContainer component={Paper} dir='rtl' style={{ marginTop: '15px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>
                            {/* <ExportCSVButton data={args.assignmentList} /> */}
                        </TableCell>
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
                        clients.map((row) => (
                            <ClientsTableRow key={row._id} row={row} isLoading={isLoading} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ClientTable;
