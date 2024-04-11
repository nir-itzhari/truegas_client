import { FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import { AssignmentImagesPopup } from './AssignmentImagesPopup';
import AssignmentModel from '../../../../Models/AssignmentModel';
import { Card } from '@mui/material';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useMobile } from '../../../../Hooks/useMobileHook';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ClientModel } from '../../../../Models/ClientModel';
import * as styled from './AssignmentPopupMobile.styled'

interface Props {
    assignment?: AssignmentModel;
    client?: ClientModel;
}

const AssignmentPopupMobile: FC<Props> = ({ assignment, client }) => {
    const [open, setOpen] = useState(false);
    const isMobile = useMobile()
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <styled.DetailsButton onClick={handleOpen}>לפרטים</styled.DetailsButton>
            <Modal
                open={open}
                onClose={handleClose}>
                <styled.StyledModalBox $isMobile={isMobile}>
                    <Card style={{ padding: 10, width: '100%' }}>

                        <>
                            {assignment ? (
                                <>
                                    <div style={{ textAlign: 'center' }}>
                                        <h2>פרטים נוספים</h2>
                                    </div>
                                    <div dir='rtl' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <p>
                                            <span style={{ fontSize: '20px', fontWeight: 600 }}> פירוט מלא:</span> {assignment.description}
                                        </p>
                                        <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <span style={{ fontSize: '20px', fontWeight: 600, marginLeft: '5px' }}>בוצע:</span> {assignment.isDone ?
                                                <IoCheckmarkDoneCircleOutline style={{ fontSize: '25px', color: 'green' }} />
                                                :
                                                <AiOutlineCloseCircle style={{ fontSize: '25px', color: 'red' }} />}
                                        </p>
                                        <p>
                                            <span style={{ fontSize: '20px', fontWeight: 600 }}>מחיר:</span> {assignment.price.toFixed(2)}₪
                                        </p>
                                        <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            {assignment.images.length > 0 &&
                                                <>
                                                    <span style={{ fontSize: '20px', fontWeight: 600, marginLeft: '5px' }}>תמונות:</span>
                                                    <AssignmentImagesPopup images={assignment.images} />
                                                </>
                                            }
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div dir='rtl'>
                                    שם: {client.fullName}
                                </div>
                            )
                            }
                        </>
                    </Card>
                </styled.StyledModalBox>
            </Modal>
        </div>
    );
};

export default AssignmentPopupMobile;
