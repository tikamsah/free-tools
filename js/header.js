
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

(function() {
  // Get current path and query string
  var path = window.location.pathname + window.location.search + window.location.hash;

  // Build the canonical URL on the new domain
  var canonicalUrl = "https://it-tools.roptive.com" + path;

  // Create <link rel="canonical">
  var link = document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", canonicalUrl);

  // Append to <head>
  document.head.appendChild(link);
})();


