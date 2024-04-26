import { default as TaskStore } from './stores/task.store';
import { default as PaginationStore } from './stores/pagination.store';
import { default as DialogStore } from './stores/dialog.store';

interface Store {
    taskStore: TaskStore;
    dialogStore: DialogStore;
    paginationStore: PaginationStore;
}
export declare const store: Store;
export declare const StoreContext: import('react').Context<Store>;
export declare function useStore(): Store;
export {};
