import { FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';
import { ImagesModel } from '../../../../Models/ImagesModel';
import config from '../../../../Utils/Config';
import { useMobile } from '../../../hooks/useMobileHook';
import { IoIosImages } from 'react-icons/io';
import * as styled from './AssignmentPopupMobile.style'

interface Props {
    images: ImagesModel[]
}

export const AssignmentImagesPopup: FC<Props> = ({ images }) => {
    const [open, setOpen] = useState(false);
    const isMobile = useMobile();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const itemTemplate = (item: any) => {
        return <img src={config.assignmentsImagesUrl + item.name} alt={'תמונה'} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <>
            <IoIosImages onClick={handleOpen} fontSize={30} cursor='pointer' />
            <Modal
                open={open}
                onClose={handleClose}
                keepMounted={true}
            >

                <>
                    <styled.GalleryWrapper $isMobile={isMobile}>
                        <styled.CloseButtonWrapper>
                            <styled.CloseButton cursor='pointer' fontSize={30} onClick={handleClose} />
                        </styled.CloseButtonWrapper>
                        <styled.ImageGalleryTitle>תמונות</styled.ImageGalleryTitle>

                        {images.length === 0 ? (

                            <CircularProgress style={{ margin: 15 }} />

                        ) : (

                            <styled.ImageGalleria
                                value={images}
                                showThumbnails={false}
                                showIndicators
                                item={itemTemplate} />
                        )}
                    </styled.GalleryWrapper>
                </>
            </Modal>
        </>
    );
};
