import { Task, TaskFormValues } from '../../../../models/src/index.ts';

export default class TaskStore {
    tasks: Task[];
    loadingInitial: boolean;
    totalTasks: number;
    constructor();
    loadTask: (id: string) => Promise<Task | undefined>;
    private setTask;
    private getTask;
    private setTasks;
    createTask: (task: TaskFormValues) => Promise<void>;
    updateTask: (task: TaskFormValues) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    loadPaginatedTasks: (currentPage: number) => Promise<void>;
    setLoadingInitial(state: boolean): void;
    setTotalTasks(totalTasks: number): void;
}
