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
import * as styled from './ClientsTableRow.styled'
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import assignmentService from '../../../../Services/AssignmentServices';
import { useMobile } from '../../../hooks/useMobileHook';
import { AssignmentImagesPopup } from '../../../AssignmetnsArea/AssignmentList/AssignmnetPopup/AssignmentImagesPopup';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { ClientModel } from '../../../../Models/ClientModel';
import dayjs from 'dayjs';
import { GrDocumentMissing } from "react-icons/gr";
import AssignmentPopupMobile from '../../../AssignmetnsArea/AssignmentList/AssignmnetPopup/AssignmentPopupMobile';



interface Props {
  row: ClientModel;
  isLoading: boolean;
}

const ClientsTableRow: React.FC<Props> = ({ row, isLoading }) => {

  const collapseThCells = ['תאריך', 'סוג עבודה', 'פירוט', 'בוצע', 'מחיר', 'תמונות'];
  const collapseThCellsMobile = ['תאריך', 'סוג עבודה', 'פרטים'];

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
              {row.fullName}
            </TableCell>
            <TableCell align="right">{row.city}</TableCell>
            {!isMobile ?
              <>
                <TableCell align="right">{row.street}</TableCell>
                <TableCell align="right">{row.buildingNumber}</TableCell>
                <TableCell align="right">{row.apartmentNumber}</TableCell>
                <TableCell align="right">{row.floor}</TableCell>
                <TableCell align="right">
                  {isMobile ? (
                    <styled.PhoneLink href={'tel:0' + row.phoneNumber}>
                      {Array.isArray(row.phoneNumber) && row.phoneNumber ? row.phoneNumber.map(phone => `0${phone}`).join(', ') : row.phoneNumber}
                    </styled.PhoneLink>
                  ) : (
                    <span>
                      {Array.isArray(row.phoneNumber) && row.phoneNumber ? row.phoneNumber.map(phone => `0${phone}`).join(', ') : row.phoneNumber}
                    </span>
                  )}
                </TableCell>
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
                <TableCell align="right">
                  <AssignmentPopupMobile client={row} />
                </TableCell>
              </>
            }
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
              <Collapse style={{ width: isMobile ? '100%' : '80%', margin: '0 auto' }} in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: isMobile ? 0 : 1 }}>
                  <Typography style={{ textDecoration: 'underline' }} align='right' fontWeight={600} variant="h6" gutterBottom component="div">
                    משימות
                  </Typography>
                  <Table size="small" aria-label="clients">
                    <TableHead>
                      <TableRow>
                        {row.assignments.length > 0 ? (
                          !isMobile ?
                            collapseThCells.map((c, i) => <TableCell key={i} style={{ fontWeight: '600' }} align='right'>{c}</TableCell>)
                            :
                            collapseThCellsMobile.map((c, i) => <TableCell key={i} style={{ fontWeight: '600' }} align='right'>{c}</TableCell>)
                        ) : (
                          <>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10, textAlign: 'center', fontWeight: 600, fontSize: !isMobile ? 20 : 15, textDecoration: 'underline', fontFamily: 'IBM Plex Sans Hebrew, sans-serif' }}>
                              <span>
                                <GrDocumentMissing fontSize={20} style={{ margin: '0 5px' }} />
                              </span>
                              <span>
                                לא נמצאו נתונים
                              </span>
                            </div>
                          </>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody dir='rtl'>
                      {row.assignments && row.assignments.map((historyRow) => (
                        <TableRow key={historyRow._id}>
                          <TableCell align='right'>{dayjs(historyRow.date).format('DD/MM/YYYY')}</TableCell>
                          <TableCell align='right'>{historyRow.title}</TableCell>
                          {isMobile ? (
                            <TableCell align='right' style={{ textAlign: 'right' }}>
                              <AssignmentPopupMobile assignment={historyRow} />
                            </TableCell>
                          ) : (
                            <>
                              <TableCell align='right'>{historyRow.description}</TableCell>
                              <TableCell align="right">
                                {historyRow.isDone ? (
                                  <IoCheckmarkDoneCircleOutline style={{ fontSize: '30px', color: 'green' }} />
                                ) : (
                                  <AiOutlineCloseCircle style={{ fontSize: '30px', color: 'red' }} />
                                )}
                              </TableCell>
                              <TableCell align='right'>{historyRow.price.toFixed(2)}₪</TableCell>
                              <TableCell align="right">
                                <AssignmentImagesPopup images={historyRow.images} />
                              </TableCell>
                            </>
                          )}
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

export default ClientsTableRow;
