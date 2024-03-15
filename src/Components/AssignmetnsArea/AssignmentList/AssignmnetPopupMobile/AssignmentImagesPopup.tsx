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
    const isMobile = useMobile()

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
        // Handle image loading error here
    };

    const itemTemplate = (item: any) => {
        setLoading(false)
        return <img src={config.assignmentsImagesUrl + item.name} alt={'image'} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <>
            <IoIosImages onClick={handleOpen} fontSize={30} cursor='pointer' />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <StyledModalBox $isMobile={isMobile}>
                    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>תמונות</h2>
                        {loading && <CircularProgress />} {/* Show loading spinner while loading images */}
                        <p>
                            {/* {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={config.assignmentsImagesUrl + img.name}
                                    alt="assignment image"
                                    width={100}
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                            ))} */}
                            <Galleria value={images} style={{ maxWidth: '300px' }} showThumbnails={false} showIndicators item={itemTemplate} />

                        </p>
                        <Button onClick={handleClose}>סגור</Button>
                    </Card>
                </StyledModalBox>
            </Modal>
        </>
    );
};
