import axios from "axios";
import store from "../Redux/Store";


class InterceptorsService {

    public createInterceptors(): void {

        axios.interceptors.request.use(
            config => {
                const token = store.getState().authState.token;
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

    }

}

const interceptorsService = new InterceptorsService();
interceptorsService.createInterceptors(); // Call createInterceptors to set up interceptors

export default interceptorsService;