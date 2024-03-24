import * as styled from './FilterBar.styled'
import { Button } from 'primereact/button';
import HeDateRangePicker from '../../SharedArea/HeDateRangePicker ';
import { useMobile } from '../../hooks/useMobileHook';
import { TbFilterSearch } from "react-icons/tb";
import { AddAssignmentButton } from '../AddAssignmentButton/AddAssignmentButton';
import { Chip, Divider } from '@mui/material';

export default function FilterBar() {
    const isMobile = useMobile()
    const startContent = (
        <>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <TbFilterSearch fontSize={50} />
                <span style={{ fontSize: 20, fontWeight: 600, fontFamily: 'IBM Plex Sans Hebrew, sans-serif' }}>
                    סינון
                </span>
            </span>
            <HeDateRangePicker />
            <Button>חפש</Button>
            <Button>נקה</Button>
        </>
    );


    const centerContent = (
        <>
            {isMobile && <Divider>
                <Chip label="הוספת משימה" size="small" />
            </Divider>}
            <AddAssignmentButton />
        </>
    );


    const endContent = (
        <>

        </>
    );


    return (
        <div className="card">
            <styled.SearchToolBar $isMobile={isMobile} start={startContent} center={centerContent} end={endContent} />
        </div>
    );
}
