export default class PaginatorUtils {

    public static getPagesBoundaries(maxVisPages: number, currentPage: number, totalPages: number) {
        const halfvisPages = Math.floor(maxVisPages / 2);
        let firstPage = currentPage < halfvisPages ? 0 : currentPage - halfvisPages;
        let lastPage = firstPage + maxVisPages;
        if (lastPage > totalPages - 1) {
            lastPage = totalPages - 1;
            firstPage = lastPage - maxVisPages < 0 ? 0 : lastPage - maxVisPages;
        }

        return { firstPage, lastPage };
    }
}