
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

interface Props {
    total: number;
    // page: number;
    // handleClick: (page: number) => void
}


export default function TablePagination({ total }: Props) {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
        // handleClick(first)
    };

    return (
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={total} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
}
