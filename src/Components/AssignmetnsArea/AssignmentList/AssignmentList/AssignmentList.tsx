import { Fragment, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentModel from '../../../../Models/AssignmentModel';
import store from '../../../../Redux/Store';
import assignmentService from '../../../../Services/AssignmentServices';
import CollapsibleTable from './CollapseTable';
import { AssignmentAmountCard } from '../AssignmentAmountCard/AssignmentAmountCard';
import TablePagination from './Pagination';
import { AddAssignmentButton } from '../../AddAssignmentButton/AddAssignmentButton';
import { useMobile } from '../../../hooks/useMobileHook';
import { Divider } from "primereact/divider";
import { ScrollTop } from 'primereact/scrolltop';


export default function AssignmentList(): JSX.Element {
  const data = useLoaderData() as AssignmentModel[];
  const [assignmentList, setAssignmentList] = useState<AssignmentModel[]>();
  const isMobile = useMobile()


  const fetchAssignments = async () => {

    try {
      const user_id = store.getState().authState.user._id
      const result = await assignmentService.fetchAssignmentsByUserId(user_id);
      return setAssignmentList(result);
    } catch (error: any) {
      console.log(error.message);
    }
  }



  useEffect(() => {
    fetchAssignments()

    const userId = store.getState().authState.user._id
    const unsubscribeMe = store.subscribe(() => {
      assignmentService.fetchAssignmentsByUserId(userId)
        .then(assignments => {
          setAssignmentList([...assignments]);
        })
        .catch(err => console.log(err.message));
    });



    return () => unsubscribeMe();
  }, [data]);


  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <div style={{ position: 'absolute', left: '0', top: '10%', width: '130px' }}>
            <AddAssignmentButton />
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between' }}>
              <AssignmentAmountCard />
              <AssignmentAmountCard />
              <AssignmentAmountCard />
              <AssignmentAmountCard />
            </div>
            <div>
              <CollapsibleTable assignmentList={assignmentList} />
              <TablePagination total={assignmentList && assignmentList.length} />
            </div>
            <div>
              <Divider align="center" type="solid">
                <span>משימות לביצוע</span>
              </Divider>
            </div>
          </div>
        </div>
        <ScrollTop />
      </div>
    </Fragment>
  )
}