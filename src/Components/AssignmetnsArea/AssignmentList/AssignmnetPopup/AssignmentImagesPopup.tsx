import React, { FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { StyledModalBox } from './AssignmentPopupMobile.style';
import { Card, CircularProgress } from '@mui/material';
import { ImagesModel } from '../../../../Models/ImagesModel';
import config from '../../../../Utils/Config';
import { Galleria } from 'primereact/galleria';
import { useMobile } from '../../../hooks/useMobileHook';
import { IoIosImages } from 'react-icons/io';

interface Props {
    images: ImagesModel[]
}

export const AssignmentImagesPopup: FC<Props> = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const isMobile = useMobile();

    const handleOpen = () => {
        setOpen(true);
        setLoading(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };

    const itemTemplate = (item: any) => {
        return <img src={config.assignmentsImagesUrl + item.name} alt={'image'} style={{ width: '100%', display: 'block' }} />;
    };

    const onItemChange = (e: any) => {
        setLoading(true);
    };

    return (
        <>
            <IoIosImages onClick={handleOpen} fontSize={30} cursor='pointer' />
            <Modal
                open={open}
                onClose={handleClose}
                keepMounted={true}
            >
                <StyledModalBox $isMobile={isMobile}>
                    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>תמונות</h2>
                        {images.length === 0 && <CircularProgress />} {/* Show loading spinner if images array is empty */}
                        <div>
                            <Galleria value={images} style={{ maxWidth: '300px' }} showThumbnails={false} showIndicators item={itemTemplate} />
                        </div>
                        <Button onClick={handleClose}>סגור</Button>
                    </Card>
                </StyledModalBox>
            </Modal>
        </>
    );
};
