import { Task, TaskFormValues, AjaxResponse } from '../../../../models/src/index.ts';

declare const agent: {
    Tasks: {
        list: () => Promise<Task[]>;
        listPaginated: (page: number, limit: number) => Promise<AjaxResponse>;
        details: (id: string) => Promise<Task>;
        create: (task: TaskFormValues) => Promise<void>;
        update: (task: TaskFormValues) => Promise<void>;
        delete: (id: string) => Promise<void>;
    };
};
export default agent;
