import { Fragment, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentModel from '../../../../Models/AssignmentModel';
import store from '../../../../Redux/Store';
import assignmentService from '../../../../Services/AssignmentServices';
import { AssignmentAmountCard } from '../AssignmentAmountCard/AssignmentAmountCard';
import TablePagination from '../AssignmentTable/Pagination';
import { AddAssignmentButton } from '../../AddAssignmentButton/AddAssignmentButton';
import { useMobile } from '../../../hooks/useMobileHook';
import { Divider } from "primereact/divider";
import { ScrollTop } from 'primereact/scrolltop';
import AssignmentsTable from '../AssignmentTable/AssignmentsTable';
import * as styled from './AssignmentList.styled';
import { PaginatorPageChangeEvent } from 'primereact/paginator';

export default function AssignmentList(): JSX.Element {
  const [assignmentList, setAssignmentList] = useState<AssignmentModel[]>([]);
  const [totalAssignments, setTotalAssignments] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [end, setEnd] = useState<number>(10);

  const isMobile = useMobile();

  const fetchAssignments = async () => {
    try {
      const user_id = store.getState().authState.user._id;
      const result = await assignmentService.fetchAssignmentsByUserId(user_id, first, end);
      setAssignmentList(result.assignments);
      setTotalAssignments(result.totalAssignments);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAssignments();

  }, [first, end]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    const calculatedEnd = (event.page + 1) * event.rows;
    setEnd(calculatedEnd);
  };

  return (
    <Fragment>
      <styled.AssignmentListWrapper>
        <styled.AssignmentWidthWrapper $isMobile={isMobile}>
          <styled.AddAssignmentButtonWrapper $isMobile={isMobile}>
            <AddAssignmentButton />
          </styled.AddAssignmentButtonWrapper>
          <Fragment>
            <styled.AssignmentAmountCardWrapper $isMobile={isMobile}>
              <AssignmentAmountCard />
              <AssignmentAmountCard />
              <AssignmentAmountCard />
              <AssignmentAmountCard />
            </styled.AssignmentAmountCardWrapper>
            <div>
              <AssignmentsTable assignmentList={assignmentList} />
              <TablePagination total={totalAssignments} onPageChange={onPageChange} first={first} rows={rows} />
            </div>
            <div>
              <Divider align="center" type="solid">
                <span>משימות לביצוע</span>
              </Divider>
            </div>
          </Fragment>
        </styled.AssignmentWidthWrapper>
        <ScrollTop />
      </styled.AssignmentListWrapper>
    </Fragment>
  );
}
