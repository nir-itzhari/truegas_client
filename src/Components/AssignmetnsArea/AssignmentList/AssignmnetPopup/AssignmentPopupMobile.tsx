import { FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { StyledModalBox } from './AssignmentPopupMobile.style';
import { AssignmentImagesPopup } from './AssignmentImagesPopup';
import AssignmentModel from '../../../../Models/AssignmentModel';
import { Card } from '@mui/material';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useMobile } from '../../../hooks/useMobileHook';

interface Props {
    assignment: AssignmentModel;
}

const AssignmentPopupMobile: FC<Props> = ({ assignment }) => {
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
            <Button onClick={handleOpen}>לפרטים</Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <StyledModalBox $isMobile={isMobile}>
                    <Card style={{ padding: 10 }}>

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
                                        <IoCheckmarkDoneCircle style={{ fontSize: '25px', color: 'green' }} />
                                        :
                                        <IoCheckmarkDoneCircle style={{ fontSize: '25px', color: 'red' }} />}
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
                    </Card>
                </StyledModalBox>
            </Modal>
        </div>
    );
};

export default AssignmentPopupMobile;
