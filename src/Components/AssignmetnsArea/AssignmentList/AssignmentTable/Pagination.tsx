import React from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

interface Props {
    total: number;
    first: number;
    rows: number;
    onPageChange: (event: PaginatorPageChangeEvent) => void;
}




const TablePagination: React.FC<Props> = ({ total, first, rows, onPageChange }: Props) => {
    const onPageChangeInternal = (event: PaginatorPageChangeEvent) => {
        onPageChange(event);
    };

    return (
        <div className="card">
            <Paginator dir="ltr" first={first} rows={rows} totalRecords={total} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChangeInternal} />
        </div>
    );
}

export default TablePagination;
