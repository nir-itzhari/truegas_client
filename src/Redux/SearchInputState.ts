import SearchInputModel from "../Models/SearchInputModel";


export class SearchInputState {
    public fullName: string = null
    public city: string = null
    public street: string = null
    public rows: number = 10
    public first: number = 0
}

export enum SearchInputActionType {
    InputFullName = "InputFullName",
    InputCity = "InputCity",
    InputStreet = "InputStreet",
    InputFirst = "InputFirst",
    InputRows = "InputRows",
}

export interface SearchInputAction {
    type: SearchInputActionType;
    payload?: any;
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

export const updateInputFirst = (first: number): SearchInputAction => {
    return { type: SearchInputActionType.InputFirst, payload: first };
}
export const updateInputRows = (rows: number): SearchInputAction => {
    return { type: SearchInputActionType.InputRows, payload: rows };
}


export const searchInputReducer = (currentState = new SearchInputState(), action: SearchInputAction): SearchInputState => {
    const newState = { ...currentState };

    switch (action.type) {
        case SearchInputActionType.InputFullName:
            newState.fullName = action.payload
            break;
        case SearchInputActionType.InputCity:
            newState.city = action.payload;
            break;
        case SearchInputActionType.InputStreet:
            newState.street = action.payload;
            break;
        case SearchInputActionType.InputFirst:
            newState.first = action.payload;
            break;
        case SearchInputActionType.InputRows:
            newState.rows = action.payload;
            break;
    }

    return newState;
}