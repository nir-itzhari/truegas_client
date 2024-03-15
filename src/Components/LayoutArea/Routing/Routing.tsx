import "./Routing.css";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import AssignmentsList from "../../AssignmetnsArea/AssignmentList/AssignmentList/AssignmentList";
import PageNotFound from "../PageNotFound/PageNotFound";
import searchInputService from "../../../Services/SearchInputServices";
import { AddClientFrom } from "../../ClientArea/AddClientForm/AddClientForm";
import { UpdateClientFrom } from "../../ClientArea/UpdateClientForm/UpdateClientForm";
import SignInSide from "../../AuthArea/Auth/SignIn/SignIn";
import SignUp from "../../AuthArea/Auth/SignUp/SignUp";
import ForgotPassword from "../../AuthArea/Auth/ForgotPassword/ForgotPassword";
import Logout from "../../AuthArea/Auth/Logout/Logout";
import { ClientList } from "../../ClientArea/ClientList/ClientListWrapper/ClientListWrapper";
import { AddAssignment } from "../../AssignmetnsArea/AddAssignmentForm/AddAssignment";
import { ResetPassword } from "../../AuthArea/Auth/ResetPassword/ResetPassword";
import { PrivateRoute } from "./PrivateRoute";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>} />

            <Route
                path="/signin"
                errorElement={<PageNotFound />}
                element={<SignInSide />} />

            <Route
                path="/signup"
                errorElement={<PageNotFound />}
                element={<SignUp />} />


            <Route
                path="/logout"
                errorElement={<PageNotFound />}
                element={<Logout />} />

            <Route
                path="/forgot-password"
                errorElement={<PageNotFound />}
                element={<ForgotPassword />} />


            <Route
                path="/reset-password"
                // loader={async () => {
                //     const params = useParams()
                //     const { token } = params
                //     if (token) {
                //         return (<PageNotFound />)
                //     }
                //     return token
                // }}
                errorElement={<PageNotFound />}
                element={<ResetPassword />} />


            <Route
                path="/assignments"
                element={
                    <PrivateRoute>
                        <AssignmentsList />
                    </PrivateRoute>}
                errorElement={<PageNotFound />} />


            <Route
                path="/assignments/addAssignment"
                loader={async () => {
                    try {
                        const result = await searchInputService.getClientsBySearch({ fullName: 'הכל' });
                        return result;
                    } catch (error: any) {
                        console.log(error.message);
                        return null;
                    }
                }}
                element={
                    <PrivateRoute>
                        <AddAssignment />
                    </PrivateRoute>}
                errorElement={<PageNotFound />} />


            <Route
                path="/clients"
                element={
                    <PrivateRoute>
                        <ClientList />
                    </PrivateRoute>}
                errorElement={<PageNotFound />} />

            <Route
                path="/addClient"
                element={
                    <PrivateRoute>
                        <AddClientFrom />
                    </PrivateRoute>}
                errorElement={<PageNotFound />} />

            <Route
                path="/update-client/:clientId"
                element={
                    <PrivateRoute>
                        <UpdateClientFrom />
                    </PrivateRoute>}
                errorElement={<PageNotFound />} />

            <Route path="*" element={<PageNotFound />} />

        </Route>
    )
);


export default router;