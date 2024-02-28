import config from "../Utils/Config";
import store from "../Redux/Store";
import { ClientModel } from "../Models/ClientModel";
import { deleteClientAction, fetchClientsAction } from "../Redux/ClientState";
import axios from "axios";
import { updateInputFullName } from "../Redux/SearchInputState";

class SearchInputService {

    public updateSearchInputName(fullName: string): void {
        store.dispatch(updateInputFullName(fullName))

    }

    public async getClientsBySearch(parameters: any): Promise<ClientModel[]> {
        // let clients: ClientModel[] = store.getState().clientsState.clients
        // if (clients.length < 0) {
            const fullName = parameters.fullName || '0'
            const city = parameters.city || '0'
            const street = parameters.street || '0'
            const forthParam = parameters.param || '0'
            const response = await axios.get<ClientModel[]>(config.clientsSearchUrl + `${fullName}` + `/${city}` + `/${street}`);
        // }
        const clients = response.data;
        return clients;
    }
    public updateSearchInputCity(city: string): void {

    }

    public updateSearchInputStreet(street: string): void {

    }

}
const searchInputService = new SearchInputService();

export default searchInputService
