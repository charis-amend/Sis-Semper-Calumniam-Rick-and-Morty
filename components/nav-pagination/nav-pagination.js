
const maxPage = 42;

export function UpdatePagination(currentPage) {

    // importing these 2 things for pagination function
    const pagination = document.querySelector('[data-js="pagination"]');

    // changing the html:
    // pagination.innerHTML = `
    // <span class="navigation__pagination" data-js="pagination">${currentPage} / ${maxPage}</span>
    // `
    pagination.textContent = `${currentPage} / ${maxPage}`
}

UpdatePagination();