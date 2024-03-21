import AssignmentModel from './../Models/AssignmentModel';

export class AssignmentsState {
    public assignments: AssignmentModel[] = [];
    public totalAssignments: number = 0

}

export enum AssignmentActionType {
    FetchAssignments = "FetchAssignments",
    AddAssignment = "AddAssignment",
    UpdateAssignment = "UpdateAssignment",
    DeleteAssignment = "DeleteAssignment",
    UpdateTotalAssignments = "UpdateTotalAssignments",
}

export interface AssignmentAction {
    type: AssignmentActionType;
    payload: any;
}

export const fetchAssignmentsAction = (assignments: AssignmentModel[]): AssignmentAction => {
    return { type: AssignmentActionType.FetchAssignments, payload: assignments };
}

export const addAssignmentAction = (assignment: AssignmentModel): AssignmentAction => {
    return { type: AssignmentActionType.AddAssignment, payload: assignment };
}
export const updateAssignmentAction = (assignment: AssignmentModel): AssignmentAction => {
    return { type: AssignmentActionType.UpdateAssignment, payload: assignment };
}
export const deleteAssignmentAction = (assignmentId: string): AssignmentAction => {
    return { type: AssignmentActionType.DeleteAssignment, payload: assignmentId };
}

export const updateTotalAssignmentsAction = (totalAssignments: number): AssignmentAction => {
    return { type: AssignmentActionType.UpdateTotalAssignments, payload: totalAssignments };
}


export const assignmentsReducer = (currentState = new AssignmentsState(), action: AssignmentAction): AssignmentsState => {
    switch (action.type) {
        case AssignmentActionType.UpdateTotalAssignments:
            return { ...currentState, totalAssignments: action.payload };
        case AssignmentActionType.FetchAssignments:
            return { ...currentState, assignments: action.payload };
        case AssignmentActionType.AddAssignment:
            return { ...currentState, assignments: [...currentState.assignments, action.payload] };
        case AssignmentActionType.UpdateAssignment:
            return {
                ...currentState,
                assignments: currentState.assignments.map(assignment => {
                    if (assignment._id === action.payload._id) {
                        return action.payload;
                    }
                    return assignment;
                })
            };
        case AssignmentActionType.DeleteAssignment:
            return {
                ...currentState,
                assignments: currentState.assignments.filter(assignment => assignment._id !== action.payload)
            };
        default:
            return currentState;
    }
};
