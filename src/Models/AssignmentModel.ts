class AssignmentModel {
    public _id: string;
    public date: Date;
    public title: string;
    public description: string;
    public client_id: string;
    public user_id: string;
    public imageFile: FileList;
    public imageName: string;
    public isDone?: boolean;
}

export default AssignmentModel;