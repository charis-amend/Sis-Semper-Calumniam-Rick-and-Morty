
const maxPage = 42;

export function UpdatePagination(currentPage) {

    // importing these 2 things for pagination function
    const pagination = document.querySelector('[data-js="pagination"]');

    // changing the html:
    pagination.textContent = `${currentPage} / ${maxPage}`
}

UpdatePagination();