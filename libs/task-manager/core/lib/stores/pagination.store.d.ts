export default class PaginationStore {
    currentPage: number;
    totalPages: number;
    constructor();
    setCurrentPage(page: number): void;
    setTtotalPages(totalPages: number): void;
}
