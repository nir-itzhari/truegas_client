import * as styled from './AssignmentListWrapper.styled'
import { Fragment, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CircularProgress, Pagination, Stack } from '@mui/material';
import { GrDocumentMissing } from "react-icons/gr";
import AssignmentModel from '../../../../Models/AssignmentModel';
import store from '../../../../Redux/Store';
import assignmentService from '../../../../Services/AssignmentServices';
import { AddAssignmentButton } from '../../AddAssignmentButton/AddAssignmentButton';
import { AssignmentTable } from '../AssignmentTable/AssignmentTable';



const itemsPerPage = 10;

export default function AssignmentList(): JSX.Element {
  const data = useLoaderData() as AssignmentModel[];
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [assignmentList, setAssignmentList] = useState<AssignmentModel[]>([]);


  useEffect(() => {
    if (data) {
      setAssignmentList(sortAssignmentList(data));
      setIsLoading(false)
    }

    const unsubscribeMe = store.subscribe(() => {
      assignmentService.fetchAssignments()
        .then(assignments => {
          setAssignmentList([...assignments]);
        })
        .catch(err => console.log(err.message));
    });



    return () => unsubscribeMe();
  }, [data]);


  const sortAssignmentList = (dataList: AssignmentModel[]): AssignmentModel[] => {
    return dataList.slice().sort((a: AssignmentModel, b: AssignmentModel) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        console.error('Invalid date found:', a.date, b.date);
        return 0;
      }

      return dateA.getTime() - dateB.getTime();
    });
  };



  const handleClick = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(assignmentList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = assignmentList.slice(startIndex, endIndex);

  return (
    <Fragment>
      <styled.mainTableWrapper>
        <styled.topSectionWrapper>
          <AddAssignmentButton />
        </styled.topSectionWrapper>
        {isLoading &&
          <Fragment>
            <styled.spinnerProgress>
              <CircularProgress />
            </styled.spinnerProgress>
          </Fragment>}
        {assignmentList && (
          <Fragment>
            <AssignmentTable assignmentRows={slicedItems} />
            <styled.paginationWrapper>
              <Stack spacing={2}>
                <Pagination count={totalPages} page={currentPage} onChange={handleClick} variant="outlined" />
              </Stack>
            </styled.paginationWrapper>

            <styled.noResult results={slicedItems.length === 0 ? 'false' : 'true'}>
              <div>
                <span>לא נמצאו נתונים...</span>
              </div>
              <div>
                <GrDocumentMissing />
              </div>
            </styled.noResult>
          </Fragment>
        )}

      </styled.mainTableWrapper>
    </Fragment>
  )
}