import "./AuthMenu.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import store from "../../../../Redux/Store";
import UserModel from "../../../../Models/UserModel";
import { Tooltip as MaterialToolTip } from "@mui/material";
import * as styled from './AuthMenu.styled'

function AuthMenu(): JSX.Element {
    const [user, setUser] = useState<UserModel>(null);


    useEffect(() => {

        setUser(store.getState().authState.user);

        const unSubscribeMe = store.subscribe(() => {
            setUser(store.getState().authState.user);
        })

        return () => unSubscribeMe()

    }, []);

    return (
        <div className="AuthMenu">
            {user === null ?
                <>
                    <span>
                         שלום אורח |
                        <MaterialToolTip title="Sign in">
                            <NavLink className="login" to="/signin">התחבר</NavLink>
                        </MaterialToolTip>
                    </span>
                </>
                :
                <>
                    <span>שלום, {user.firstName} </span>
                    <span> | </span>

                    <MaterialToolTip title="התנתק">
                        <styled.signUpButton to={'/logout'}>התנתק</styled.signUpButton>
                    </MaterialToolTip>
                </>
            }
        </div >
    );
}

export default AuthMenu;