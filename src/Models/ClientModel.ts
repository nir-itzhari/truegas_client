import AssignmentModel from './AssignmentModel';


export class ClientModel {
    public _id: string;
    public fullName: string;
    public city: string;
    public street: string;
    public floor: number;
    public buildingNumber: number;
    public apartmentNumber: number;
    public phoneNumber: string;
    public phoneNumberTwo?: string;
    public assignment_id: string[];
    public assignments: AssignmentModel[];
}