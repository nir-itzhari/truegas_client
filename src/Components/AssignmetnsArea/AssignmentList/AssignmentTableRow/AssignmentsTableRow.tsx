import React, { useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import dayjs from 'dayjs';
import AssignmentModel from '../../../../Models/AssignmentModel';
import * as styled from './AssignmentTableRow.styled'
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import assignmentService from '../../../../Services/AssignmentServices';
import { useMobile } from '../../../hooks/useMobileHook';
import AssignmentPopupMobile from '../AssignmnetPopup/AssignmentPopupMobile';
import { AssignmentImagesPopup } from '../AssignmnetPopup/AssignmentImagesPopup';
import { TbCurrencyShekel } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";



interface Props {
  row: AssignmentModel;
  isLoading: boolean;
}

const AssignmentsTableRow: React.FC<Props> = ({ row, isLoading }) => {

  const collapseThCells = ['שם', 'עיר', 'רחוב', 'מספר בית', 'קומה', 'מספר דירה'];
  const collapseThCellsMobile = ['שם', 'עיר', 'רחוב', 'מספר בית', 'מספר דירה'];

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const isMobile = useMobile()

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
  useEffect(() => {

  }, [isLoading, row])
  return (
    <React.Fragment>
      {!isLoading && (
        <>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              {row.date ? dayjs(row.date).format('DD/MM/YYYY') : ""}
            </TableCell>
            <TableCell align="right">{row.title}</TableCell>
            {!isMobile ?
              <>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.isDone ?
                  <IoCheckmarkDoneCircleOutline style={{ fontSize: '30px', color: 'green' }} />
                  :
                  <AiOutlineCloseCircle style={{ fontSize: '30px', color: 'red' }} />
                }</TableCell>
                <TableCell align="right"><AssignmentImagesPopup images={row.images} /></TableCell>
                <TableCell align="right"><div style={{ display: 'flex', alignItems: 'center' }}><TbCurrencyShekel />{row.price === 0 ? 0 : row.price.toFixed(2)}</div></TableCell>
                <TableCell align="right">
                  <styled.actionButtons>
                    <styled.buttonWrapper>
                      <styled.editButton onClick={(e) => { e.stopPropagation(); navigate('/update-client/' + row._id) }}><FiEdit /></styled.editButton>
                    </styled.buttonWrapper>
                    <styled.buttonWrapper>
                      <styled.deleteButton onClick={(e) => handleDelete(e, row._id)}><MdDeleteForever /></styled.deleteButton>
                    </styled.buttonWrapper>
                  </styled.actionButtons>
                </TableCell>
              </>
              :
              <>
                <TableCell align="right" style={{ padding: 0 }}>
                  <AssignmentPopupMobile assignment={row} />
                </TableCell>
              </>
            }
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse style={{ width: isMobile ? '100%' : '80%', margin: '0 auto' }} in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: isMobile ? 0 : 1 }}>
                  <Typography style={{ textDecoration: 'underline' }} align='right' fontWeight={600} variant="h6" gutterBottom component="div">
                    לקוח
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        {!isMobile ?
                          collapseThCells.map((c, i) => <TableCell key={i} style={{ fontWeight: '600' }} align='right'>{c}</TableCell>)
                          :
                          collapseThCellsMobile.map((c, i) => <TableCell key={i} style={{ fontWeight: '600' }} align='right'>{c}</TableCell>)
                        }
                      </TableRow>
                    </TableHead>
                    <TableBody dir='rtl'>
                      {row.client && row.client.map((historyRow) => (
                        <TableRow key={historyRow._id}>
                          <TableCell align='right' component="th" scope="row">{historyRow.fullName}</TableCell>
                          <TableCell align='right' component="th" scope="row">{historyRow.city}</TableCell>
                          <TableCell align='right'>{historyRow.street}</TableCell>
                          <TableCell align='right'>{historyRow.buildingNumber}</TableCell>
                          {!isMobile && <TableCell align='right'>{historyRow.floor}</TableCell>}
                          <TableCell align='right'>{historyRow.apartmentNumber}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </>
      )}
    </React.Fragment>
  );
}

export default AssignmentsTableRow;
