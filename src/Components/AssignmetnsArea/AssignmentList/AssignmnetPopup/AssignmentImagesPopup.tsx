import { FC, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button, CircularProgress } from '@mui/material';
import { ImagesModel } from '../../../../Models/ImagesModel';
import config from '../../../../Utils/Config';
import { useMobile } from '../../../../Hooks/useMobileHook';
import { IoIosImages } from 'react-icons/io';
import * as styled from './AssignmentPopupMobile.style'
import Badge from '@mui/material/Badge';
import { IoMdClose } from 'react-icons/io';

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
            <Badge color="warning" badgeContent={images.length} max={3}>
                <IoIosImages onClick={handleOpen} fontSize={30} cursor='pointer' color={images.length === 0 && 'gray'}/>
            </Badge>
            <Modal
                open={open && images.length > 0}
                onClose={handleClose}
                keepMounted={true}
            >

                <>
                    <styled.GalleryWrapper $isMobile={isMobile}>
                        <styled.CloseButtonWrapper>
                            <styled.CloseButton variant="text" onClick={handleClose}><IoMdClose fontSize={30} /></styled.CloseButton>
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
