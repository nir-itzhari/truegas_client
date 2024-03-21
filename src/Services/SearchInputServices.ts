import config from "../Utils/Config";
import store from "../Redux/Store";
import { ClientModel } from "../Models/ClientModel";
import { fetchClientsAction } from "../Redux/ClientState";
import axios from "axios";
import { updateInputFullName } from "../Redux/SearchInputState";

class SearchInputService {

    public updateSearchInputName(fullName: string): void {
        store.dispatch(updateInputFullName(fullName))

    }

    public async getClientsBySearch(): Promise<ClientModel[]> {

        if (store.getState().clientsState.clients.length === 0) {
            const userId = store.getState().authState.user._id
            const fullName = store.getState().searchInputState.fullName || 'הכל'
            const city = store.getState().searchInputState.city || '0'
            const street = store.getState().searchInputState.street || '0'
            const first = store.getState().searchInputState.first
            const rows = store.getState().searchInputState.rows
            const response = await axios.get<ClientModel[]>(config.clientsSearchUrl + `${userId}` + `/${fullName}` + `/${city}` + `/${street}` + `/${first}` + `/${rows}`);
            const clients = response.data;
            store.dispatch(fetchClientsAction(clients))
        }
        return store.getState().clientsState.clients;
    }
}
const searchInputService = new SearchInputService();

export default searchInputService
