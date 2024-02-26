import { CircularProgress, Stack, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GrDocumentMissing } from "react-icons/gr";
import { useLoaderData, useLocation } from "react-router-dom";
import * as styled from "./ClientListWrapper.styled";
import AssignmentModel from "../../../../Models/AssignmentModel";
import { ClientModel } from "../../../../Models/ClientModel";
import store from "../../../../Redux/Store";
import clientService from "../../../../Services/ClientService";
import { SearchFilter } from "../../../SearchFilter/SearchFilter";
import { AddClientButton } from "../../AddClientButton/AddClientButton";
import { ClientTable } from "../ClientTable/ClientTable";



const itemsPerPage = 10;

export const ClientList = (): JSX.Element => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [clientList, setClientList] = useState<ClientModel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    if (clientList) {
      setIsLoading(true)
    }


    const unsubscribeMe = store.subscribe(() => {
      clientService.fetchClients()
        .then(clients => {
          setClientList(sortDataList([...clients]));
        })
        .catch(err => console.log(err.message));
    });



    return () => unsubscribeMe();
  }, [clientList, isLoading]);


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


  const handleClick = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(clientList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = clientList.slice(startIndex, endIndex);

  return (
    <styled.mainTableWrapper>
      <styled.topSectionWrapper>
        <AddClientButton />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <SearchFilter searchResults={searchFilter} />
          <div>
            <FaSearch style={{ fontSize: '30px', margin: '0 10px' }} />
          </div>
        </div>
      </styled.topSectionWrapper>
      {!isLoading &&
        <styled.spinnerProgress>
          <CircularProgress />
        </styled.spinnerProgress>}
      {isLoading && (
        <>
          <ClientTable clientRows={slicedItems} />
          <styled.paginationWrapper>
            <Stack spacing={2}>
              <Pagination count={totalPages} page={currentPage} onChange={handleClick} variant="outlined" />
            </Stack>
          </styled.paginationWrapper>

          <styled.noResult results={isLoading && slicedItems.length === 0 ? 'false' : 'true'}>
            <div>
              <span>לא נמצאו נתונים...</span>
            </div>
            <div>
              <GrDocumentMissing />
            </div>
          </styled.noResult>
        </>
      )}

    </styled.mainTableWrapper>
  )
}