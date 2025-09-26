function toggleMenu() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function closeMenu() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Animation for service cards
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    
    services.forEach(service => {
        service.addEventListener('mouseenter', () => {
            service.style.transform = 'translateY(-10px)';
            service.style.boxShadow = '0 0 30px rgba(7, 123, 50, 0.3)';
        });

        service.addEventListener('mouseleave', () => {
            service.style.transform = 'translateY(0)';
            service.style.boxShadow = '0 0 20px rgba(7, 123, 50, 0.2)';
        });
    });
});
