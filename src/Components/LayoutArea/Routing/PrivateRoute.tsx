import { Route, Navigate } from "react-router-dom";
import authService from "../../../Services/AuthServices";
import { FC, ReactNode, useEffect, useState } from "react";
import notify from "../../../Services/NotifyService";

interface Props {
    children: JSX.Element
}

export const PrivateRoute = ({ children }: Props): any => {
    return authService.isLoggedIn() ? children : <Navigate to="/signin" replace />;
};