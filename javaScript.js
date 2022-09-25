const searchBar = document.getElementById("search-bar");

function hideSearch() {
    let hiddenSearch2 = document.getElementById('focus-search-icon');
    hiddenSearch2.style.display = 'none';
};
function showSearch() {
    let hiddenSearch2 = document.getElementById('focus-search-icon');
    hiddenSearch2.style.display = 'block';
};

searchBar.addEventListener('blur', hiddenSearch());
searchBar.addEventListener('focus', showSearch());