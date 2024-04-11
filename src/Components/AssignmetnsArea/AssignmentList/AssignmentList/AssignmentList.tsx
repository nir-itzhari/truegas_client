import { FC, Fragment, useEffect, useState } from 'react';
import AssignmentModel from '../../../../Models/AssignmentModel';
import store from '../../../../Redux/Store';
import assignmentService from '../../../../Services/AssignmentServices';
import { AssignmentAmountCard } from '../AssignmentAmountCard/AssignmentAmountCard';
import TablePagination from '../AssignmentTable/Pagination';
import { useMobile } from '../../../../Hooks/useMobileHook';
import { Divider } from "primereact/divider";
import { ScrollTop } from 'primereact/scrolltop';
import AssignmentsTable from '../AssignmentTable/AssignmentsTable';
import * as styled from './AssignmentList.styled';
import FilterBar from '../../FilterBar/FilterBar';

const AssignmentList: FC = (): JSX.Element => {
  const [assignmentList, setAssignmentList] = useState<AssignmentModel[]>([]);
  const [totalAssignments, setTotalAssignments] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const isMobile = useMobile();
  
  const handlePageChange = (page: number, rows: number) => {
    setCurrentPage(page);
    setItemsPerPage(rows)
  };
  const fetchAssignments = async () => {
    try {
      const user_id = store.getState().authState.user._id;
      const result = await assignmentService.fetchAssignmentsByUserId(user_id);
      setAssignmentList(result.assignments);
      setTotalAssignments(result.totalAssignments);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAssignments();

    const unSubscribeMe = store.subscribe(() => {
      const assignments = store.getState().assignmentsState.assignments;
      const totalAssignments = store.getState().assignmentsState.totalAssignments;
      setAssignmentList(assignments);
      setTotalAssignments(totalAssignments);
    });

    return () => unSubscribeMe();
  }, [currentPage, itemsPerPage]);

  return (
    <>
      <styled.AssignmentListWrapper>
        <styled.AssignmentWidthWrapper $isMobile={isMobile}>
          <>
            <styled.AssignmentAmountCardWrapper $isMobile={isMobile}>
              <AssignmentAmountCard />
              <AssignmentAmountCard />
              <AssignmentAmountCard />
              <AssignmentAmountCard />
            </styled.AssignmentAmountCardWrapper>
            <div style={{ marginTop: 10 }}>
              <FilterBar />
              <AssignmentsTable assignmentList={assignmentList} />
              <TablePagination total={totalAssignments}
                onPageChange={handlePageChange} />
            </div>
            <div>
              <Divider align="center" type="solid">
                <span>משימות לביצוע</span>
              </Divider>
            </div>
          </>
        </styled.AssignmentWidthWrapper>
        <ScrollTop />
      </styled.AssignmentListWrapper>
    </>
  );
}

export default AssignmentList