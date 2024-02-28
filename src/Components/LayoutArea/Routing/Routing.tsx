import "./Routing.css";
import { createBrowserRouter, createRoutesFromElements, redirect, Route } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import AssignmentsList from "../../AssignmetnsArea/AssignmentList/AssignmentTableWrapperList/AssignmentListWrapper";
import PageNotFound from "../PageNotFound/PageNotFound";
import clientService from "../../../Services/ClientService";
import assignmentService from "../../../Services/AssignmentServices";
import searchInputService from "../../../Services/SearchInputServices";
import { AddClientFrom } from "../../ClientArea/AddClientForm/AddClientForm";
import { UpdateClientFrom } from "../../ClientArea/UpdateClientForm/UpdateClientForm";
import SignInSide from "../../AuthArea/Auth/SignIn/SignIn";
import SignUp from "../../AuthArea/Auth/SignUp/SignUp";
import ForgotPassword from "../../AuthArea/Auth/ForgotPassword/ForgotPassword";
import Logout from "../../AuthArea/Auth/Logout/Logout";
import { ClientList } from "../../ClientArea/ClientList/ClientListWrapper/ClientListWrapper";
import { AddAssignment } from "../../AssignmetnsArea/AddAssignmentForm/AddAssignment";
import { useEffect } from "react";
import authService from "../../../Services/AuthServices";
import store from "../../../Redux/Store";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
                path="/assignments"
                loader={async () => {
                    try {
                        const user_id = store.getState().authState.user._id
                        const result = await assignmentService.fetchAssignmentsByUserId(user_id);
                        return result;
                    } catch (error: any) {
                        console.log(error.message);
                        return null;
                    }
                }}
                errorElement={<PageNotFound />}
                element={<AssignmentsList />} />

            <Route
                path="/clients"
                // loader={async () => {
                //     try {
                //         const result = await clientService.fetchClients();
                //         return result;
                //     } catch (error: any) {

                //         return null;
                //     }
                // }}

                errorElement={<PageNotFound />}
                element={<ClientList />} />

            <Route
                path="/signin"
                errorElement={<PageNotFound />}
                element={<SignInSide />} />

            <Route
                path="/signup"
                errorElement={<PageNotFound />}
                element={<SignUp />} />

            <Route
                path="/forgot-password"
                errorElement={<PageNotFound />}
                element={<ForgotPassword />} />

            <Route
                path="/logout"
                errorElement={<PageNotFound />}
                element={<Logout />} />

            <Route
                path="/addAssignment"
                loader={async () => {
                    try {
                        const result = await searchInputService.getClientsBySearch({ fullName: 'הכל' });
                        return result;
                    } catch (error: any) {
                        console.log(error.message);
                        return null;
                    }
                }}
                element={<AddAssignment />}
                errorElement={<PageNotFound />} />

            <Route
                path="/addClient"
                element={<AddClientFrom />}
                errorElement={<PageNotFound />} />

            <Route
                path="/update-client/:clientId"
                element={<UpdateClientFrom />}
                errorElement={<PageNotFound />} />

            <Route path="*" element={<PageNotFound />} />

        </Route>
    )
);


export default router;