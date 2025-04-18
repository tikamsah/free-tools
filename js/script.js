
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Initialize AdSense
(adsbygoogle = window.adsbygoogle || []).push({});

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');


function includeLayout(url,layout) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(layout).innerHTML = html;
        })
        .catch(error => console.error('Error fetching layout:', error));
}
 includeLayout('https://it-tools.nepexo.com/footer.html','footerContainer');

