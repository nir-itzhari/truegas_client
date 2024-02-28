import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { assignmentsReducer } from "./AssignmentState";
import { authReducer } from "./AuthState";
import { clientsReducer } from "./ClientState";
import { searchInputReducer } from "./SearchInputState";


const RootReducer = combineReducers({
    assignmentsState: assignmentsReducer,
    clientsState: clientsReducer,
    authState: authReducer,
    searchInputState: searchInputReducer
});

const store = configureStore({ reducer: RootReducer });
export default store

