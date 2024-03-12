import { Navigate } from "react-router-dom";
import authService from "../../../Services/AuthServices";

interface Props {
    children: JSX.Element
}

export const PrivateRoute = ({ children }: Props): any => {
    return authService.isLoggedIn() ? children : <Navigate to="/signin" replace />;
};