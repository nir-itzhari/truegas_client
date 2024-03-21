import React, { useEffect, useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import store from "../../../../Redux/Store";
import { updateInputFirst, updateInputRows } from "../../../../Redux/SearchInputState";

interface Props {
    total: number;
}

const TablePagination: React.FC<Props> = ({ total }: Props) => {
    const [first, setFirst] = useState<number>(store.getState().searchInputState.first);
    const [rows, setRows] = useState<number>(store.getState().searchInputState.rows);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const { first, rows } = store.getState().searchInputState;
            setFirst(first);
            setRows(rows);
        });

        return () => unsubscribe();
    }, []); 

    const onPageChangeInternal = (event: PaginatorPageChangeEvent) => {
        store.dispatch(updateInputFirst(event.first));
        store.dispatch(updateInputRows(event.rows));
    };

    return (
        <div className="card">
            <Paginator dir="ltr" first={first} rows={rows} totalRecords={total} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChangeInternal} />
        </div>
    );
}

export default TablePagination;
