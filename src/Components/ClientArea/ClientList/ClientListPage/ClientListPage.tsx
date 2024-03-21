import { Fragment, useState } from 'react';
import store from '../../../../Redux/Store';
import TablePagination from '../ClientTable/Pagination';
import { useMobile } from '../../../hooks/useMobileHook';
import { ScrollTop } from 'primereact/scrolltop';
import ClientsTable from '../ClientTable/ClientTable';
import * as styled from './ClientListPage.styled';
import { PaginatorPageChangeEvent } from 'primereact/paginator';
import { AddClientButton } from '../../AddClientButton/AddClientButton';
import { ClientModel } from '../../../../Models/ClientModel';
import { SearchFilter } from '../../../SearchFilter/SearchFilter';
import { FaSearch } from 'react-icons/fa';

const ClientListPage = (): JSX.Element => {
  const [clientList, setClientList] = useState<ClientModel[]>([]);

  const isMobile = useMobile();

  const sortDataList = (dataList: (ClientModel[])) => {
    return dataList.slice().sort((a: any, b: any) => a.fullName.localeCompare(b.fullName, 'he'));
  };

  const searchFilter = async (filteredClients: ClientModel[]) => {
    const checkInput = Object.entries(filteredClients).every(value => value === null)
    if (filteredClients.length === 0 && checkInput) {
      const clientsFromStore = store.getState().clientsState.clients
      setClientList(sortDataList(clientsFromStore))
    }
    setClientList(sortDataList(filteredClients));
  };


  return (
    <Fragment>
      <styled.ClientsListWrapper>
        <styled.ClientsWidthWrapper $isMobile={isMobile}>
          <styled.topSectionWrapper dir='ltr'>
            <AddClientButton />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <SearchFilter searchResults={searchFilter} />
              <div>
                <FaSearch style={{ fontSize: '30px', margin: '0 10px' }} />
              </div>
            </div>
          </styled.topSectionWrapper>
          <Fragment>
            <div>
              <ClientsTable clientList={clientList} />
              <TablePagination total={clientList.length} />
            </div>
          </Fragment>
          <ScrollTop />
        </styled.ClientsWidthWrapper>
      </styled.ClientsListWrapper>
    </Fragment>
  );
}

export default ClientListPage