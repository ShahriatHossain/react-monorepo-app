export declare class Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    constructor(init?: TaskFormValues);
}
export declare class TaskFormValues {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    constructor(task?: TaskFormValues);
}
