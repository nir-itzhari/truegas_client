import AssignmentModel from "../../../../Models/AssignmentModel";
import { AssignmentTableRow } from "../AssignmentTableRow/AssignmentTableRow";
import * as styled from "./AssignmentTable.styled";
import { Fragment, useEffect, useState } from "react";

interface Props {
    assignmentRows: AssignmentModel[];
}

export const AssignmentTable = ({ assignmentRows }: Props): JSX.Element => {
    const [assignmentsRows, setAssignmentsRows] = useState<AssignmentModel[]>([]);
    
    useEffect(() => {
        if (assignmentRows) {
            setAssignmentsRows(assignmentRows);
        }
    }, [assignmentRows]);


    const assignmentTableCells = [
        "תאריך",
        "סוג עבודה", 
        "תמונות",
        "בוצע",
        "ערוך",
        "מחק",
    ];


    return (
        <styled.tableWrapper>
            <styled.tableContentWrapper>
                <styled.thWrapper>
                    <styled.thContentWrapper>
                        {assignmentTableCells.map((t, index) => (
                            <styled.th key={index}>{t}</styled.th>
                        ))}
                    </styled.thContentWrapper>
                </styled.thWrapper>
                <styled.rowWrapper>
                    {assignmentsRows.map((row, rowIndex) => (
                        <Fragment key={row._id}>
                            <styled.rowContentWrapper>
                                <AssignmentTableRow row={row} />
                            </styled.rowContentWrapper>
                            <styled.rowBorder></styled.rowBorder>
                        </Fragment>
                    ))}
                </styled.rowWrapper>
            </styled.tableContentWrapper>
        </styled.tableWrapper>
    );
};