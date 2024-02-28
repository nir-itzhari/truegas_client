import config from "../Utils/Config";
import { addAssignmentAction, fetchAssignmentsAction, updateAssignmentAction } from "../Redux/AssignmentState";
import AssignmentModel from "../Models/AssignmentModel";
import { deleteAssignmentAction } from './../Redux/AssignmentState';
import axios from "axios";
import store from "../Redux/Store";

class AssignmentService {

    public async fetchAssignments(): Promise<AssignmentModel[]> {

        if (store.getState().assignmentsState.assignments.length === 0) {
            const response = await axios.get<AssignmentModel[]>(config.assignmentsUrl);
            const assignments = response.data;
            store.dispatch(fetchAssignmentsAction(assignments));
        }
        return store.getState().assignmentsState.assignments;
    }

    public async fetchAssignmentsByUserId(user_id: string): Promise<AssignmentModel[]> {

        if (store.getState().assignmentsState.assignments.length === 0) {
            const response = await axios.get<AssignmentModel[]>(config.assignmentsUrl + user_id);
            const assignments = response.data;
            store.dispatch(fetchAssignmentsAction(assignments));
        }
        return store.getState().assignmentsState.assignments;
    }


    public async getOneAssignments(assignmentId: string): Promise<AssignmentModel> {
        let assignment = store.getState().assignmentsState.assignments.find((a: AssignmentModel) => a._id === assignmentId);
        if (!assignment) {
            const response = await axios.get<AssignmentModel>(config.assignmentsUrl + assignmentId);
            assignment = response.data;
        }
        return assignment;
    }

    public async addNewAssignment(assignments: AssignmentModel): Promise<AssignmentModel> {

        const formData = new FormData();
        formData.append('date', assignments.date.toString())
        formData.append('title', assignments.title);
        formData.append('description', assignments.description);
        formData.append('user_id', assignments.user_id);
        formData.append('client_id', assignments.client_id);
        formData.append('imageFile', assignments.imageFile.item(0));

        const response = await axios.post<AssignmentModel>(config.assignmentsUrl, formData);
        const addedAssignments = response.data;
        store.dispatch(addAssignmentAction(addedAssignments));

        return addedAssignments;
    }

    public async updateAssignment(assignments: AssignmentModel): Promise<AssignmentModel> {

        const formData = new FormData();
        // formData.append('date', format(assignments.date, "YYYY-MM-DD"))
        formData.append('title', assignments.title);
        formData.append('description', assignments.description);
        formData.append('user_id', assignments.user_id);
        formData.append('client_id', assignments.client_id);
        formData.append('imageFile', assignments.imageFile.item(0));

        const response = await axios.post<AssignmentModel>(config.assignmentsUrl, formData);
        const updatedAssignments = response.data;

        store.dispatch(updateAssignmentAction(updatedAssignments));

        return updatedAssignments;
    }

    public async deleteOneAssignment(assignmentId: string): Promise<void> {
        await axios.delete(config.assignmentsUrl + assignmentId);
        store.dispatch(deleteAssignmentAction(assignmentId));
    }
}
const assignmentService = new AssignmentService();

export default assignmentService
