document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form submission alert
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your message has been received.");
    });
});