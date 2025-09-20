
function includeHeaderLayout(url,layout) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(layout).innerHTML = html;
        })
        .catch(error => console.error('Error fetching layout:', error));
}
includeHeaderLayout('https://it-tools.roptive.com/header.html','headerContainer');

function includeLayout(url,layout) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(layout).innerHTML = html;
        })
        .catch(error => console.error('Error fetching layout:', error));
}
includeLayout('https://it-tools.roptive.com/footer.html','footerContainer');


