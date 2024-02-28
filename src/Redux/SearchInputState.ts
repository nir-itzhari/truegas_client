import SearchInputModel from "../Models/SearchInputModel";


export class SearchInputState {
    public fullName: string = null
    public city: string = null
    public street: string = null
}

export enum SearchInputActionType {
    InputFullName = "InputFullName",
    InputCity = "InputCity",
    InputStreet = "InputStreet",
}

export interface SearchInputAction {
    type: SearchInputActionType;
    payload?: string;
}

export const updateInputFullName = (fullName: string): SearchInputAction => {
    return { type: SearchInputActionType.InputFullName, payload: fullName };
}

export const updateInputCity = (city: string): SearchInputAction => {
    return { type: SearchInputActionType.InputCity, payload: city };
}
export const updateInputStreet = (street: string): SearchInputAction => {
    return { type: SearchInputActionType.InputStreet, payload: street };
}


export const searchInputReducer = (currentState = new SearchInputState(), action: SearchInputAction): SearchInputState => {
    const newState = { ...currentState };

    switch (action.type) {
        case SearchInputActionType.InputFullName:
            // Assuming searchInput is an object, you need to ensure it's initialized
            // before trying to access its properties.
            newState.fullName = action.payload
            break;
        case SearchInputActionType.InputCity:
            // Similarly, you need to ensure that searchInput is initialized properly
            // before accessing its properties.
            newState.city = action.payload;
            break;
        case SearchInputActionType.InputStreet:
            // Same issue here, ensure searchInput is initialized properly.
            newState.street = action.payload;
            break;
    }

    return newState;
}