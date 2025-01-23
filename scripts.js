// ...existing code...

function scrollToHeader() {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
}

// Add animation to elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    document.getElementById('back-to-header').addEventListener('click', scrollToHeader);

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('aside ul li a').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });
});

// ...existing code...
