import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import AssignmentModel from '../../../../Models/AssignmentModel';
import { ExportButton } from './ExportToXLSX/ExportToXLSX';




interface Props {
    data: AssignmentModel[];
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}



export const DownloadMenu: React.FC<Props> = ({ data, setDisplay }) => {
    return (
        <Paper >
            <MenuList>
                <MenuItem>
                    <ListItemText>
                        <span>
                            <ExportButton assignments={data} setDisplay={setDisplay} />
                        </span>
                    </ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}