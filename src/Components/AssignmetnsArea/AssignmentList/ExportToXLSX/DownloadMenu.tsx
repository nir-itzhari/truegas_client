import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import AssignmentModel from '../../../../Models/AssignmentModel';
import { ExportButton } from './ExportToXLSXTemplate/ExportToXLSXTemplate';
import { SiMicrosoftexcel } from "react-icons/si";




interface Props {
    data: AssignmentModel[];
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}



export const DownloadMenu: React.FC<Props> = ({ data, setDisplay }) => {
    return (
        <Paper >
            <MenuList style={{ padding: 0 }}>
                <MenuItem>
                    <ListItemText>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <SiMicrosoftexcel style={{ margin: '0 0 0 5px', fontSize: 18 }} />
                            <ExportButton assignments={data} setDisplay={setDisplay} />
                        </span>
                    </ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}