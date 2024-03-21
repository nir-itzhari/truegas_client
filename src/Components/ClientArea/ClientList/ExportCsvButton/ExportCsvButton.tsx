import React, { useState, useEffect, useRef } from 'react';
import AssignmentModel from '../../../../Models/AssignmentModel';
import * as styled from './ExportCsvButton.style';
import { DownloadMenu } from './DownloadMenu';

interface Props {
    data: AssignmentModel[];
}

const ExportCSVButton: React.FC<Props> = ({ data }) => {
    const [display, setDisplay] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const downloadIconRef = useRef<HTMLDivElement>(null);

    // Close the menu when clicking outside of it
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
                    <styled.downloadIcon cursor='pointer' onClick={() => setDisplay(!display)} />
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
