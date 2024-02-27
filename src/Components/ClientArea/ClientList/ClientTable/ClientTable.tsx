import { ClientModel } from "../../../../Models/ClientModel";
import { ClientTableRow } from "../ClientTableRow/ClientTableRow";
import * as styled from "./ClientTable.styled";
import { Fragment, useEffect, useState } from "react";

interface Props {
    clientRows: ClientModel[];
}

export const ClientTable = ({ clientRows }: Props): JSX.Element => {
    const [clientsRows, setClientsRows] = useState<ClientModel[]>([]);

    useEffect(() => {
        if (clientRows) {
            setClientsRows(clientRows);
        }
    }, [clientRows]);

    const tableTh = [
        "שם",
        "עיר",
        "רחוב",
        "מספר בית",
        "מספר דירה",
        "קומה",
        "טלפון",
        "ערוך",
        "מחק",
    ];




    return (
        <styled.tableWrapper>
            <styled.tableContentWrapper>
                <styled.thWrapper>
                    <styled.thContentWrapper>
                        {tableTh.map((t, index) => (
                            <styled.th key={index}>{t}</styled.th>
                        ))}
                    </styled.thContentWrapper>
                </styled.thWrapper>
                <styled.rowWrapper>
                    {clientsRows.map((row, rowIndex) => (
                        <Fragment key={row._id}>
                            <styled.rowContentWrapper>
                                <ClientTableRow row={row} />
                            </styled.rowContentWrapper>
                            <styled.rowBorder></styled.rowBorder>
                        </Fragment>
                    ))}
                </styled.rowWrapper>
            </styled.tableContentWrapper>
            {/* <styled.overlay show={show}></styled.overlay> */}
        </styled.tableWrapper>
    );
};