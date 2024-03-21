import React, { useState, useEffect, useRef } from 'react';
import AssignmentModel from '../../../../Models/AssignmentModel';
import * as styled from './ExportToXLSXButton.style';
import { DownloadMenu } from './DownloadMenu';
import Tooltip from '@mui/material/Tooltip';

interface Props {
    data: AssignmentModel[];
}

const ExportCSVButton: React.FC<Props> = ({ data }) => {
    const [display, setDisplay] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const downloadIconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                !downloadIconRef.current?.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setDisplay(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div style={{ position: 'relative' }} ref={downloadIconRef} >
                <div>
                    <Tooltip title='הורדה' placement="right-end">
                        <span style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)}>
                            <styled.downloadIcon cursor='pointer' onClick={() => setDisplay(!display)} />
                        </span>
                    </Tooltip>
                    {display &&
                        <div style={{ position: 'absolute', right: '0', zIndex: 2 }} ref={menuRef}>
                            <DownloadMenu setDisplay={setDisplay} data={data} />
                        </div>}
                </div>
            </div>
        </>
    );
};

export default ExportCSVButton;
