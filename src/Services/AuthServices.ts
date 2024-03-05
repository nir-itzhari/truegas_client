import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import config from "../Utils/Config";
import store from "../Redux/Store";
import axios from "axios";
import { registerAction, loginAction, logoutAction } from "../Redux/AuthState";




class AuthService {

    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(config.registerUrl, user);
        const token = response.data;
        store.dispatch(registerAction(token));
    }




    public async login(credentials: CredentialsModel): Promise<string> {
        const response = await axios.post<string>(config.loginUrl, credentials);
        const token = response.data;
        if (token) {
            localStorage.setItem("token", token);
            store.dispatch(loginAction(token));
        }

        return token;

    }

    public logout(): void {
        store.dispatch(logoutAction());
    }

    public async resetPassword(token: string, newPassword: string): Promise<string> {
        const response = await axios.post(config.resetPasswordUrl, { token: token, newPassword: newPassword })
        console.log(response.data)

        return response.data.message

    }

    public async isLoggedIn(): Promise<boolean> {
        const tokenFromStore = store.getState().authState.token
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStore === null && tokenFromStorage === null) {
            return false;
        }
        return true;
    }
}

const authService = new AuthService();

export default authService;

