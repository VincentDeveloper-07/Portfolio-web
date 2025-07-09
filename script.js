// Mobile menu functionality - Make sure this is in your HTML
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Debug: Check if elements exist
console.log('Menu Icon:', menuIcon);
console.log('Navbar:', navbar);

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        console.log('Menu icon clicked!'); // Debug log
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        console.log('Navbar classes:', navbar.className); // Debug log
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
} else {
    console.error('Menu elements not found!');
}