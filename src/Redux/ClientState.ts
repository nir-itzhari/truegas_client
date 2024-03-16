import { ClientModel } from './../Models/ClientModel';

export class ClientsState {
    public clients: ClientModel[] = [];

}

export enum ClientActionType {
    FetchClients = "FetchClients",
    AddClient = "AddClient",
    UpdateClient = "UpdateClient",
    DeleteClient = "DeleteClient",
}

export interface ClientAction {
    type: ClientActionType;
    payload?: any;
}

export const fetchClientsAction = (clients: ClientModel[]): ClientAction => {
    return { type: ClientActionType.FetchClients, payload: clients };
}

export const addClientAction = (client: ClientModel): ClientAction => {
    return { type: ClientActionType.AddClient, payload: client };
}
export const updateClientAction = (client: ClientModel): ClientAction => {
    return { type: ClientActionType.UpdateClient, payload: client };
}
export const deleteClientAction = (clientId: string): ClientAction => {
    return { type: ClientActionType.DeleteClient, payload: clientId };
}


export const clientsReducer = (currentState = new ClientsState(), action: ClientAction): ClientsState => {
    let newState = { ...currentState };

    switch (action.type) {
        case ClientActionType.FetchClients:
            newState.clients = action.payload;
            break;
        case ClientActionType.AddClient:
            newState.clients = [...newState.clients, action.payload];
            break;
        case ClientActionType.UpdateClient:
            newState.clients = newState.clients.map(client => {
                return client._id === action.payload._id ? action.payload : client;
            });
            break;
        case ClientActionType.DeleteClient:
            newState.clients = newState.clients.filter(client => client._id !== action.payload);
            break;
        default:
            break;
    }

    return newState;
}