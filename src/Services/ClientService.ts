import config from "../Utils/Config";
import store from "../Redux/Store";
import { ClientModel } from "../Models/ClientModel";
import { addClientAction, deleteClientAction, fetchClientsAction, updateClientAction } from "../Redux/ClientState";
import axios from "axios";

class ClientService {

    public async fetchClients(): Promise<ClientModel[]> {
        if (store.getState().clientsState.clients.length === 0) {
            const response = await axios.get<ClientModel[]>(config.clientsUrl);
            const clients = response.data;
            store.dispatch(fetchClientsAction(clients.slice().sort((a, b) => a.fullName.localeCompare(b.fullName, 'he'))));
        }
        return store.getState().clientsState.clients;
    }

    public async getOneClient(clientId: string): Promise<ClientModel> {
        let client = store.getState().clientsState.clients.find((c: ClientModel) => c._id === clientId);
        if (!client) {
            const response = await axios.get<ClientModel>(config.clientsUrl + clientId);
            client = response.data;
        }
        return client;
    }

    public async getClientsBySearch(parameters: any): Promise<string[]> {
        // let client = store.getState().clientsState.clients.find((c: ClientModel) => c._id === clientId);
        // if (!client) {
        const fullName = parameters.fullName || "0"
        const secondParam = '' || '2'
        const thirdParam = '' || '3'
        const forthParam = '' || '4'
        const response = await axios.get<string[]>(config.clientsSearchUrl + `${fullName}` + `/${secondParam}` + `/${thirdParam}` + `/${forthParam}`);
        let clients: string[] = response.data;
        // }
        return clients;
    }

    public async addNewClient(client: ClientModel): Promise<ClientModel> {

        const formData = new FormData();
        formData.append('fullName', client.fullName);
        formData.append('city', client.city);
        formData.append('street', client.street);
        formData.append('buildingNumber', client.buildingNumber);
        formData.append('apartmentNumber', client.apartmentNumber);
        formData.append('floor', client.floor);
        formData.append('phoneNumber', client.phoneNumber);
        const response = await axios.post<ClientModel>(config.clientsUrl, formData);
        const addedClient = response.data;
        store.dispatch(addClientAction(addedClient));

        return addedClient;
    }

    public async updateAssignment(client: ClientModel): Promise<ClientModel> {

        const formData = new FormData();
        formData.append('fullName', client.fullName);
        formData.append('city', client.city);
        formData.append('street', client.street);
        formData.append('buildingNumber', client.buildingNumber);
        formData.append('apartmentNumber', client.apartmentNumber);
        formData.append('floor', client.floor);
        const response = await axios.post<ClientModel>(config.clientsUrl, formData);
        const updatedClient = response.data;
        store.dispatch(updateClientAction(updatedClient));
        return updatedClient;
    }

    public async deleteOneClient(clientId: string): Promise<void> {
        await axios.delete(config.clientsUrl + clientId);
        store.dispatch(deleteClientAction(clientId));
    }
}
const clientService = new ClientService();

export default clientService
