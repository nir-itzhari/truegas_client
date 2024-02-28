import * as styled from './Logout.styled'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../../Services/AuthServices";
import notify from "../../../../Services/NotifyService";
import store from "../../../../Redux/Store";

function Logout(): JSX.Element {
    const navigate = useNavigate()
    useEffect(() => {
        const user = store.getState().authState.user
        if (user) {
            authService.logout();
            notify.success("התנתקת בהצלחה");
            navigate("/signin", { replace: true });
            
        }
    }, [])

    return null
}

export default Logout;
