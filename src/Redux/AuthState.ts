import { jwtDecode } from "jwt-decode";
import UserModel from "../Models/UserModel";

export class AuthState {
    public user: UserModel = null;
    public token: string = null;

    public constructor() {
        this.token = localStorage.getItem("token");
        if (this.token) {
            const encodedObject: any = jwtDecode(this.token);
            this.user = encodedObject.user;
        }
    }
}

export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

export function registerAction(token: string): AuthAction {
    return { type: AuthActionType.Register, payload: token };
}
export function loginAction(token: string): AuthAction {
    return { type: AuthActionType.Login, payload: token };
}
export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout };
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload;
            const encodedObject: any = jwtDecode(newState.token);
            newState.user = encodedObject.user;
            break;
        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;
    }

    return newState
}