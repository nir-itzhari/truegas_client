import Header from "../Header/Header";
import { Outlet, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./Layout.css";
import authService from "../../../Services/AuthServices";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import store from "../../../Redux/Store";
import notify from "../../../Services/NotifyService";


function Layout(): JSX.Element {
    const navigate = useNavigate()

    useEffect(() => {
        const user = store.getState().authState.user
        if (!user) {
            notify.error("משתמש לא מחובר");
            navigate("/signin", { replace: true });
        }
    }, [])


    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Outlet />
                </LocalizationProvider>
            </main>
        </div>
    );
}

export default Layout;
